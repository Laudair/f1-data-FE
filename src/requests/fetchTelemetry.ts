import axios from 'axios'
import { TelemetryData } from '../components/TelemtryChart'

export const fetchF1TelemetryData = async (
  year: string,
  race: string,
  driver: string
): Promise<TelemetryData> => {
  try {
    const response = await axios.get<TelemetryData>(
      `https://congenial-sniffle-6565g5g4v4c449j-3000.app.github.dev/get-f1-data?year=${year}&race=${race}&driver=${driver}`
    )
    return response.data
  } catch (error) {
    // Handle the error appropriately
    console.error('Error fetching F1 telemetry data:', error)
    throw error
  }
}
