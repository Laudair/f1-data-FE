import React, { useState } from 'react'
import F1TelemetryChart, { TelemetryData } from './components/TelemtryChart'
import { fetchF1TelemetryData } from './requests/fetchTelemetry'
import './App.css'


function App() {
  const [telemetry, setTelemetry] = useState<TelemetryData | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | undefined>()



  const fetchData = async () => {
    setLoading(true)
    setError(undefined)
    try {
      const data = await fetchF1TelemetryData('2022', 'Silverstone', 'VER')
      setTelemetry(data)
    }
    catch (error) {
      setError('error fetching')
      console.log('error ', error)
    }

    setLoading(false)
  }


  return (
    <>
      <div style={{ height: '500px', width: '500px' }}>
        
        <button onClick={() => fetchData()}>Fetch data</button>
        {telemetry ? (
          <F1TelemetryChart telemetryData={telemetry} />
        ) : error ? (
          <span>{error}</span>
        ) : loading ? (
          <span>{loading}</span>
        ) : (
          <p>No data</p>
        )}
      </div>
    </>
  )
}

export default App
