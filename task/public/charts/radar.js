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

Chart.register(
    RadarController,
    RadialLinearScale,
    PointElement,
    LineElement,
    Filler,
    Tooltip,
    Legend,
    Title
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
                            return `${context.label}: ${raw.toFixed(2)}`
                        }
                    }
                }
            },
            scales: {
                r: {
                    min: RADAR_RANGE.min,
                    max: RADAR_RANGE.max,
                    ticks: {
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
