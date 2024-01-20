import { ChartOptions } from 'chart.js'
import React from 'react'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

// Register the required components
ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

//import { ChartOptions } from 'chart.js'

// Define a type for the telemetry data
export type TelemetryData = {
    Distance: number[]
    Speed: number[]
    Gear: number[]
}

// Define a type for the component props
type F1TelemetryChartProps = {
    telemetryData: TelemetryData
}

const F1TelemetryChart: React.FC<F1TelemetryChartProps> = ({
    telemetryData
}) => {
    const data = {
        labels: telemetryData.Distance,
        datasets: [
            {
                label: 'Speed (km/h)',
                data: telemetryData.Speed,
                fill: false,
                backgroundColor: 'rgb(255, 99, 132)',
                borderColor: 'rgba(255, 99, 132, 0.2)',
                yAxisID: 'y-axis-speed'
            },
            {
                label: 'Gear',
                data: telemetryData.Gear,
                fill: false,
                backgroundColor: 'rgb(54, 162, 235)',
                borderColor: 'rgba(54, 162, 235, 0.2)',
                yAxisID: 'y-axis-gear'
            }
        ]
    }

    const options: ChartOptions<'line'> = {
        scales: {
            y: {
                type: 'linear',
                position: 'left',
                ticks: {
                    maxRotation: 350,
                    minRotation: 0
                }
            },
            y1: {
                type: 'linear',
                position: 'right',
                ticks: {
                    maxRotation: 8,
                    minRotation: 0
                },
                grid: {
                    drawOnChartArea: false
                }
            }
        }
    }

    console.log('telemetry ', telemetryData)

    return <Line data={data} options={options} />
}

export default F1TelemetryChart
