import {
    Chart,
    RadarController,
    RadialLinearScale,
    PointElement,
    LineElement,
    Filler,
    Tooltip,
    Legend,
    Title
} from 'chart.js'
import { RADAR_RANGE } from '../analysis/radar'

const RADAR_START_ANGLE_DEGREES = -22.5

const fixedRadarTickLabelsPlugin = {
    id: 'fixedRadarTickLabels',
    afterDraw(chart, _args, pluginOptions) {
        const radialScale = chart.scales?.r
        if (!radialScale || !pluginOptions?.enabled) return

        const {
            color = '#5a5f66',
            fontSize = 11,
            fontWeight = '400',
            fontFamily = 'Arial',
            xOffset = 0,
            yOffset = 0
        } = pluginOptions

        const min = Number(radialScale.min)
        const max = Number(radialScale.max)
        const step = Number(radialScale.options?.ticks?.stepSize || 1)
        if (!Number.isFinite(min) || !Number.isFinite(max) || !Number.isFinite(step) || step <= 0) return

        const ctx = chart.ctx
        ctx.save()
        ctx.fillStyle = color
        ctx.font = `${fontWeight} ${fontSize}px ${fontFamily}`
        ctx.textAlign = 'center'
        ctx.textBaseline = 'middle'

        for (let value = min; value <= max + 1e-9; value += step) {
            const rounded = Math.round(value)
            if (Math.abs(rounded % 2) !== 0) continue

            const distance = radialScale.getDistanceFromCenterForValue(rounded)
            const x = radialScale.xCenter + xOffset
            const y = radialScale.yCenter - distance + yOffset
            ctx.fillText(String(rounded), x, y)
        }

        ctx.restore()
    }
}

Chart.register(
    RadarController,
    RadialLinearScale,
    PointElement,
    LineElement,
    Filler,
    Tooltip,
    Legend,
    Title,
    fixedRadarTickLabelsPlugin
)

function createRadarChart(
    canvas,
    payload,
    {
        title = 'Performance',
        responsive = true,
        maintainAspectRatio = false
    } = {}
) {
    if (!canvas || !payload || !Array.isArray(payload.labels) || !Array.isArray(payload.values)) {
        return null
    }

    return new Chart(canvas, {
        type: 'radar',
        data: {
            labels: payload.labels,
            datasets: [
                {
                    data: payload.values,
                    borderColor: '#1f9cab',
                    backgroundColor: 'rgba(31, 156, 171, 0.38)',
                    pointBackgroundColor: '#1f9cab',
                    pointBorderColor: '#1f9cab',
                    pointRadius: 3,
                    pointHoverRadius: 4,
                    borderWidth: 2
                }
            ]
        },
        options: {
            animation: false,
            responsive,
            maintainAspectRatio,
            plugins: {
                legend: {
                    display: false
                },
                fixedRadarTickLabels: {
                    enabled: true,
                    color: '#5a5f66',
                    fontSize: 11,
                    xOffset: 0,
                    yOffset: 0
                },
                title: {
                    display: true,
                    text: title,
                    color: '#121212',
                    font: {
                        size: 20,
                        weight: '700'
                    },
                    padding: {
                        top: 8,
                        bottom: 8
                    }
                },
                tooltip: {
                    callbacks: {
                        label(context) {
                            const raw = Number(context.raw)
                            if (!Number.isFinite(raw)) return `${context.label}: N/A`
                            return `${context.label}: ${raw.toFixed(4)}`
                        }
                    }
                }
            },
            scales: {
                r: {
                    // Keep axis orientation stable across browser/PDF rendering.
                    // 0 places the first label at the top, then proceeds clockwise.
                    startAngle: RADAR_START_ANGLE_DEGREES,
                    reverse: false,
                    min: RADAR_RANGE.min,
                    max: RADAR_RANGE.max,
                    ticks: {
                        display: false,
                        stepSize: 1,
                        color: '#5a5f66',
                        backdropColor: 'transparent',
                        font: {
                            size: 11
                        }
                    },
                    pointLabels: {
                        color: '#555b62',
                        font: {
                            size: 14,
                            weight: '600'
                        }
                    },
                    angleLines: {
                        color: '#adb4bd'
                    },
                    grid: {
                        color: '#bcc3cd'
                    }
                }
            }
        }
    })
}

function renderRadarChartToDataUrl(payload, options = {}) {
    if (typeof document === 'undefined') return null

    const canvas = document.createElement('canvas')
    canvas.width = 540
    canvas.height = 420

    const chart = createRadarChart(canvas, payload, {
        ...options,
        responsive: false,
        maintainAspectRatio: false
    })
    if (!chart) return null

    chart.resize(540, 420)
    chart.update('none')

    const dataUrl = canvas.toDataURL('image/png')
    chart.destroy()

    if (!String(dataUrl || '').startsWith('data:image/png;base64,')) {
        return null
    }

    return dataUrl
}

export { createRadarChart, renderRadarChartToDataUrl }
