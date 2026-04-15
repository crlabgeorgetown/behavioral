import { wordToPictureAnalysisProfile } from "../analysis/wordToPicture.js"
import { buildRadarPayloadFromAnalyses, RADAR_RANGE } from "../analysis/radar.js"

const Chart = globalThis.Chart
if (!Chart) {
  throw new Error("Chart.js UMD failed to load (globalThis.Chart missing)")
}

const DEBUG_PREFIX = "[ValidationHarness]"

const WRITTEN_BUILD_COLUMNS = [
  "ItemNum", "Date", "Time", "SubjectID", "Item", "RT", "TrialType", "TimedOut", "TargetLocation", "ResponseLocation", "Accuracy", "Repetitions", "Response", "WordType", "PartOfSpeech", "TrialWasAdministered", "BuildTestID", "EPrimeTemplateID", "Volume", "ExperimentNameShort"
]

const AUDITORY_BUILD_COLUMNS = [
  "ItemNum", "Date", "Time", "SubjectID", "Item", "RT", "TimedOut", "TargetLocation", "ResponseLocation", "Accuracy", "Repetitions", "Response", "TrialType", "WordType", "PartOfSpeech", "TrialWasAdministered", "BuildTestID", "EPrimeTemplateID", "Volume", "ExperimentNameShort"
]

const ui = {
  fileInput: document.getElementById("buildFiles"),
  ageInput: document.getElementById("age"),
  educationInput: document.getElementById("education"),
  prepareBtn: document.getElementById("prepareBtn"),
  exportCsvBtn: document.getElementById("exportCsvBtn"),
  exportPdfBtn: document.getElementById("exportPdfBtn"),
  status: document.getElementById("status"),
  summary: document.getElementById("summary"),
  radarWrap: document.getElementById("radarWrap"),
  radarCanvas: document.getElementById("radarCanvas")
}

let state = {
  runs: [],
  analyses: [],
  baseMetadata: null,
  radarPayload: null,
  radarChart: null
}

function log(stage, payload) {
  if (payload === undefined) {
    console.log(`${DEBUG_PREFIX} ${stage}`)
    return
  }
  console.log(`${DEBUG_PREFIX} ${stage}`, payload)
}

function setStatus(text, cls = "") {
  ui.status.className = cls
  ui.status.textContent = text
}

function normalizeBuildText(raw) {
  return String(raw || "")
    .replace(/^\uFEFF/, "")
    .replace(/\r\n/g, "\n")
    .replace(/\r/g, "\n")
}

function detectModality(text) {
  const value = String(text || "").toLowerCase()
  if (value.includes("written")) return "written"
  if (value.includes("auditory")) return "auditory"
  return null
}

function toTaskLabel(experimentNameShort) {
  const modality = detectModality(experimentNameShort)
  if (modality === "written") return "Written Word-to-Picture"
  if (modality === "auditory") return "Auditory Word-to-Picture"
  return String(experimentNameShort || "Word-to-Picture")
}

function toCellValue(value, headerName) {
  const trimmed = String(value ?? "").trim()
  if (trimmed === "") return ""

  const numericColumns = new Set([
    "ItemNum", "RT", "Accuracy", "Repetitions", "TrialWasAdministered", "BuildTestID", "EPrimeTemplateID", "Volume"
  ])

  if (numericColumns.has(headerName)) {
    const parsed = Number(trimmed)
    return Number.isFinite(parsed) ? parsed : trimmed
  }

  return trimmed
}

function parseBuildTable(rawText, fileName) {
  log("parseBuildTable:start", { fileName })
  const lines = normalizeBuildText(rawText)
    .split("\n")
    .filter((line) => line.trim() !== "")

  if (lines.length < 2) {
    throw new Error(`${fileName}: file does not contain header + trial rows.`)
  }

  const headers = lines[0].split("\t").map((h) => h.trim())
  const requiredHeaders = ["SubjectID", "RT", "Accuracy", "TrialType", "WordType", "ExperimentNameShort"]
  const missingHeaders = requiredHeaders.filter((h) => !headers.includes(h))
  if (missingHeaders.length) {
    throw new Error(`${fileName}: missing required header(s): ${missingHeaders.join(", ")}`)
  }

  const rows = []
  for (let i = 1; i < lines.length; i++) {
    const values = lines[i].split("\t")
    if (values.length !== headers.length) {
      throw new Error(`${fileName}: row ${i + 1} has ${values.length} columns; expected ${headers.length}.`)
    }

    const row = {}
    headers.forEach((headerName, idx) => {
      row[headerName] = toCellValue(values[idx], headerName)
    })
    rows.push(row)
  }

  const trialData = {}
  headers.forEach((headerName) => {
    trialData[headerName] = rows.map((r) => r[headerName])
  })

  log("parseBuildTable:done", { fileName, rows: rows.length, columns: headers.length })
  return { headers, rows, trialData }
}

function parseDateTime(dateValue, timeValue) {
  const dateText = String(dateValue || "").trim()
  const timeText = String(timeValue || "").trim()
  if (!dateText || !timeText) return null
  const parsed = new Date(`${dateText} ${timeText}`)
  return Number.isNaN(parsed.getTime()) ? null : parsed
}

function buildSummary(metaData, trialData, submittedAt) {
  const accuracyValues = (trialData.Accuracy || []).filter((v) => v !== null && v !== undefined && v !== "")
  const correctRtValues = (trialData.RT || [])
    .map((rt, i) => ({ rt: Number(rt), accuracy: Number((trialData.Accuracy || [])[i]) }))
    .filter(({ rt, accuracy }) => Number.isFinite(rt) && rt >= 0 && accuracy === 1)
    .map(({ rt }) => rt)

  const trialsCompleted = accuracyValues.length
  const accuracyPct = trialsCompleted > 0
    ? ((accuracyValues.reduce((sum, v) => sum + Number(v), 0) / trialsCompleted) * 100).toFixed(1)
    : "N/A"
  const averageRT = correctRtValues.length > 0
    ? (correctRtValues.reduce((sum, v) => sum + v, 0) / correctRtValues.length).toFixed(0)
    : "N/A"

  return {
    task: metaData.Task || metaData.ExperimentNameShort || "Unknown Task",
    participantId: metaData.SubjectID || "XXX",
    age: metaData.Age || "N/A",
    education: metaData.Education || "N/A",
    inputDevice: metaData.inputDevice || "N/A",
    completedAt: submittedAt ? submittedAt.toLocaleString() : "N/A",
    trialsCompleted,
    accuracyPct,
    averageRT
  }
}

function buildRun(fileName, table, age, education) {
  const firstRow = table.rows[0] || {}
  const lastRow = table.rows[table.rows.length - 1] || {}
  const submittedAt = parseDateTime(lastRow.Date, lastRow.Time) || new Date()

  const experimentNameShort = firstRow.ExperimentNameShort || ""
  const task = toTaskLabel(experimentNameShort)

  const metaData = {
    ExperimentNameShort: experimentNameShort,
    SubjectID: firstRow.SubjectID || "XXX",
    BuildTestID: firstRow.BuildTestID,
    EPrimeTemplateID: firstRow.EPrimeTemplateID,
    Volume: firstRow.Volume,
    Task: task,
    Age: age || "N/A",
    Education: education || "N/A"
  }

  const summary = buildSummary(metaData, table.trialData, submittedAt)
  const analysis = wordToPictureAnalysisProfile.compute({
    trialData: table.trialData,
    summary,
    metaData
  })

  const modality = detectModality(metaData.Task)
    || detectModality(metaData.ExperimentNameShort)
    || "auditory"

  return {
    fileName,
    submittedAt,
    modality,
    label: summary.task,
    metaData,
    summary,
    trialData: table.trialData,
    analysis
  }
}

function renderRadar(payload) {
  if (state.radarChart) {
    state.radarChart.destroy()
    state.radarChart = null
  }

  if (!payload || !Array.isArray(payload.labels) || !Array.isArray(payload.values)) {
    ui.radarWrap.hidden = true
    return
  }

  ui.radarWrap.hidden = false
  state.radarChart = new Chart(ui.radarCanvas, {
    type: "radar",
    data: {
      labels: payload.labels,
      datasets: [{
        data: payload.values,
        borderColor: "#1f9cab",
        backgroundColor: "rgba(31, 156, 171, 0.38)",
        pointBackgroundColor: "#1f9cab",
        pointBorderColor: "#1f9cab",
        pointRadius: 3,
        borderWidth: 2
      }]
    },
    options: {
      animation: false,
      plugins: {
        legend: { display: false },
        title: {
          display: true,
          text: "Performance",
          font: { size: 20, weight: "700" }
        }
      },
      scales: {
        r: {
          min: RADAR_RANGE.min,
          max: RADAR_RANGE.max,
          ticks: { stepSize: 1 },
          reverse: false,
          startAngle: -22.5
        }
      }
    }
  })
}

function getBuildColumns(modality) {
  return modality === "written" ? WRITTEN_BUILD_COLUMNS : AUDITORY_BUILD_COLUMNS
}

function toBuildBoolean(value) {
  if (value === true || value === "true" || value === "True" || value === 1 || value === "1") return "True"
  return "False"
}

function toBuildTrialType(value) {
  const text = String(value || "").trim().toLowerCase()
  if (!text) return ""
  if (text === "practice") return "Practice"
  if (text === "real") return "Real"
  return `${text.charAt(0).toUpperCase()}${text.slice(1)}`
}

function pick(trialData, key, index) {
  const values = trialData[key] || []
  return values[index]
}

function buildRowFromTrial(run, index) {
  const { trialData, metaData, modality } = run
  const response = pick(trialData, "Response", index)
  const cresp = pick(trialData, "CRESP", index)

  const defaults = modality === "written"
    ? { BuildTestID: 201, EPrimeTemplateID: 72, Volume: -1000 }
    : { BuildTestID: 203, EPrimeTemplateID: 74, Volume: -1000 }

  return {
    ItemNum: pick(trialData, "ItemNum", index) ?? index + 1,
    Date: pick(trialData, "Date", index) ?? "",
    Time: pick(trialData, "Time", index) ?? "",
    SubjectID: metaData.SubjectID || "XXX",
    Item: pick(trialData, "Item", index) ?? cresp ?? response ?? "",
    RT: pick(trialData, "RT", index) ?? "",
    TrialType: toBuildTrialType(pick(trialData, "TrialType", index)),
    TimedOut: toBuildBoolean(pick(trialData, "TimedOut", index)),
    TargetLocation: pick(trialData, "TargetLocation", index) ?? "",
    ResponseLocation: pick(trialData, "ResponseLocation", index) ?? "",
    Accuracy: pick(trialData, "Accuracy", index) ?? "",
    Repetitions: pick(trialData, "Repetitions", index) ?? 0,
    Response: response ?? "",
    WordType: pick(trialData, "WordType", index) ?? pick(trialData, "ResponseWordType", index) ?? "",
    PartOfSpeech: pick(trialData, "PartOfSpeech", index) ?? pick(trialData, "PartofSpeech", index) ?? "",
    TrialWasAdministered: pick(trialData, "TrialWasAdministered", index) ?? 1,
    BuildTestID: pick(trialData, "BuildTestID", index) ?? metaData.BuildTestID ?? defaults.BuildTestID,
    EPrimeTemplateID: pick(trialData, "EPrimeTemplateID", index) ?? metaData.EPrimeTemplateID ?? defaults.EPrimeTemplateID,
    Volume: pick(trialData, "Volume", index) ?? metaData.Volume ?? defaults.Volume,
    ExperimentNameShort: metaData.ExperimentNameShort || metaData.Task || ""
  }
}

function escapeCsv(value) {
  if (value === null || value === undefined) return ""
  const stringValue = String(value)
  if (/[",\n]/.test(stringValue)) {
    return `"${stringValue.replace(/"/g, '""')}"`
  }
  return stringValue
}

function exportCsv() {
  log("exportCsv:start", { runCount: state.runs.length })
  const csvLines = []
  csvLines.push("MetadataKey,MetadataValue")

  Object.entries(state.baseMetadata).forEach(([key, value]) => {
    csvLines.push(`${escapeCsv(key)},${escapeCsv(value)}`)
  })
  csvLines.push("BuildLikeTrialDelimiter,COMMA")

  state.runs.forEach((run, idx) => {
    const runNum = idx + 1
    csvLines.push(`${escapeCsv(`Run${runNum}`)},${escapeCsv(run.label)}`)
    csvLines.push(`${escapeCsv(`Run${runNum}CompletedAt`)},${escapeCsv(run.submittedAt.toISOString())}`)
    csvLines.push(`${escapeCsv(`Run${runNum}BuildLikeSchema`)},${escapeCsv(run.modality)}`)
    csvLines.push(`${escapeCsv(`Run${runNum}BuildLikeTrialColumns`)},${escapeCsv(getBuildColumns(run.modality).join(";"))}`)
  })

  csvLines.push("")
  state.runs.forEach((run) => {
    const buildColumns = getBuildColumns(run.modality)
    const rowCount = Object.keys(run.trialData).reduce((max, key) => {
      return Math.max(max, (run.trialData[key] || []).length)
    }, 0)

    csvLines.push(buildColumns.map(escapeCsv).join(","))
    csvLines.push("")
    for (let rowIndex = 0; rowIndex < rowCount; rowIndex++) {
      const row = buildRowFromTrial(run, rowIndex)
      csvLines.push(buildColumns.map((column) => escapeCsv(row[column])).join(","))
    }
    csvLines.push("")
  })

  const blob = new Blob([csvLines.join("\n")], { type: "text/csv;charset=utf-8;" })
  const url = URL.createObjectURL(blob)
  const link = document.createElement("a")
  const safeName = String(state.baseMetadata.Task || "Both").replace(/[^a-zA-Z0-9_-]/g, "_")
  link.href = url
  link.download = `${safeName}_trials.csv`
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
  URL.revokeObjectURL(url)
  setStatus("CSV export started.", "ok")
  log("exportCsv:done", { lineCount: csvLines.length })
}

function exportPdf() {
  log("exportPdf:start", { runCount: state.runs.length })
  const jsPDFClass = window?.jspdf?.jsPDF
  if (!jsPDFClass) {
    throw new Error("jsPDF UMD failed to load (window.jspdf.jsPDF missing)")
  }

  const doc = new jsPDFClass({ unit: "pt", format: "letter" })
  const summary = {
    task: state.baseMetadata.Task,
    participantId: state.baseMetadata.SubjectID,
    age: state.baseMetadata.Age,
    education: state.baseMetadata.Education,
    inputDevice: "N/A",
    completedAt: state.runs[state.runs.length - 1]?.summary?.completedAt || "N/A",
    trialsCompleted: state.runs.reduce((sum, r) => sum + Number(r.summary.trialsCompleted || 0), 0)
  }

  let radarImage = null
  if (state.radarChart) {
    radarImage = ui.radarCanvas.toDataURL("image/png")
  }

  doc.setFontSize(16)
  doc.text("Cognitive Recovery Lab - Task Summary", 40, 50)
  doc.setFontSize(11)
  const lines = [
    `Task: ${summary.task}`,
    `Participant ID: ${summary.participantId}`,
    `Age: ${summary.age}`,
    `Education: ${summary.education}`,
    `Input Device: ${summary.inputDevice}`,
    `Completed At: ${summary.completedAt}`,
    `Trials Completed: ${summary.trialsCompleted}`
  ]
  lines.forEach((line, i) => doc.text(line, 40, 90 + i * 20))

  if (radarImage) {
    try {
      doc.addImage(radarImage, "PNG", 314, 80, 250, 194)
    } catch (error) {
      console.error(`${DEBUG_PREFIX} exportPdf:addImage:error`, error)
    }
  }

  let cursorY = 270
  state.analyses.forEach((analysis) => {
    if (cursorY > 700) {
      doc.addPage()
      cursorY = 50
    }

    doc.setFontSize(13)
    doc.text(analysis.title || "Task Analysis", 40, cursorY)
    cursorY += 20

    doc.setFontSize(11)
    if (analysis.table && Array.isArray(analysis.table.rows) && Array.isArray(analysis.table.columns)) {
      const x = [40, 130, 220, 315, 390, 470]
      doc.setFont(undefined, "bold")
      analysis.table.columns.forEach((column, i) => {
        if (column) doc.text(String(column), x[i] || 40, cursorY)
      })
      cursorY += 18

      analysis.table.rows.forEach((row) => {
        const cells = Array.isArray(row?.cells) ? row.cells : []
        doc.setFont(undefined, row?.type === "section" ? "bold" : "normal")
        cells.forEach((cell, i) => {
          if (cell !== null && cell !== undefined && cell !== "") {
            doc.text(String(cell), x[i] || 40, cursorY)
          }
        })
        cursorY += 18
      })
      doc.setFont(undefined, "normal")
    } else {
      ;(analysis.metrics || []).forEach((metric) => {
        doc.text(`${metric.label}: ${metric.value}`, 40, cursorY)
        cursorY += 18
      })
    }
    cursorY += 12
  })

  const safeName = String(summary.task || "Both").replace(/[^a-zA-Z0-9_-]/g, "_")
  doc.save(`${safeName}_summary.pdf`)
  setStatus("PDF export started.", "ok")
  log("exportPdf:done")
}

function summarizeRuns(runs) {
  return runs.map((run, i) => {
    return [
      `Run ${i + 1}: ${run.fileName}`,
      `  Label: ${run.label}`,
      `  Modality: ${run.modality}`,
      `  Participant: ${run.summary.participantId}`,
      `  Trials Completed: ${run.summary.trialsCompleted}`,
      `  Accuracy: ${run.summary.accuracyPct === "N/A" ? "N/A" : `${run.summary.accuracyPct}%`}`,
      `  Avg RT: ${run.summary.averageRT}`
    ].join("\n")
  }).join("\n\n")
}

async function prepareAnalysis() {
  log("prepare:start")
  const files = Array.from(ui.fileInput.files || [])
  if (files.length === 0) {
    setStatus("Please choose at least one .build file.", "warn")
    return
  }
  if (files.length > 2) {
    setStatus("Please choose one or two files only.", "warn")
    return
  }

  ui.exportCsvBtn.disabled = true
  ui.exportPdfBtn.disabled = true
  setStatus("Parsing file(s)...")
  ui.summary.textContent = ""

  try {
    const age = String(ui.ageInput.value || "").trim() || "N/A"
    const education = String(ui.educationInput.value || "").trim() || "N/A"

    const runs = []
    for (const file of files) {
      const text = await file.text()
      const table = parseBuildTable(text, file.name)
      runs.push(buildRun(file.name, table, age, education))
    }

    const participantIds = [...new Set(runs.map((r) => r.summary.participantId))]
    if (participantIds.length > 1) {
      setStatus(`Loaded files have mixed SubjectID values: ${participantIds.join(", ")}`, "warn")
    } else {
      setStatus("Analysis prepared. You can export CSV/PDF.", "ok")
    }

    const baseMetadata = {
      SubjectID: runs[0].summary.participantId || "XXX",
      Age: age,
      Education: education,
      Task: runs.length === 1 ? runs[0].label : "Both"
    }

    const analyses = runs.map((r) => r.analysis)
    const radarPayload = buildRadarPayloadFromAnalyses(analyses)

    state = {
      runs,
      analyses,
      baseMetadata,
      radarPayload,
      radarChart: state.radarChart
    }

    renderRadar(radarPayload)
    ui.summary.textContent = summarizeRuns(runs)
    ui.exportCsvBtn.disabled = false
    ui.exportPdfBtn.disabled = false

    log("prepare:done", { runCount: runs.length, participant: baseMetadata.SubjectID })
  } catch (error) {
    console.error(`${DEBUG_PREFIX} prepare:error`, error)
    setStatus(`Failed: ${error instanceof Error ? error.message : String(error)}`, "err")
  }
}

ui.prepareBtn.addEventListener("click", prepareAnalysis)
ui.exportCsvBtn.addEventListener("click", () => {
  try {
    exportCsv()
  } catch (error) {
    console.error(`${DEBUG_PREFIX} exportCsv:error`, error)
    setStatus(`CSV export failed: ${error instanceof Error ? error.message : String(error)}`, "err")
  }
})
ui.exportPdfBtn.addEventListener("click", () => {
  try {
    exportPdf()
  } catch (error) {
    console.error(`${DEBUG_PREFIX} exportPdf:error`, error)
    setStatus(`PDF export failed: ${error instanceof Error ? error.message : String(error)}`, "err")
  }
})

log("init:ready")
setStatus("Validation app initialized. Select one or two .build files.", "ok")
