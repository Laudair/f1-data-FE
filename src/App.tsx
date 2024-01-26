import React, { useState } from 'react'
import F1TelemetryChart, { TelemetryData } from './components/TelemtryChart'
import { fetchF1TelemetryData } from './requests/fetchTelemetry'
import { Button, Select, Box, Text, useColorMode } from '@chakra-ui/react'
import TopBar from './components/top-bar/TopBar'

function App() {
  const { colorMode, toggleColorMode } = useColorMode()
  const [telemetry, setTelemetry] = useState<TelemetryData | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | undefined>()
  const [selectedDriver, setSelectedDriver] = useState('HAM')
  const [selectedYear, setSelectedYear] = useState('2022');
  const [selectedRace, setSelectedRace] = useState('SILVERSTONE');

  const handleDriverChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedDriver(event.target.value);
  };

  const handleYearChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedYear(event.target.value);
  };

  const handleRaceChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedRace(event.target.value);
  };

  const fetchData = async () => {
    console.log('start fetching')
    setLoading(true)
    setError(undefined)
    try {
      const data = await fetchF1TelemetryData(
        selectedYear,
        selectedRace,
        selectedDriver ?? 'HAM'
      )
      setTelemetry(data)
    } catch (error) {
      setError('error fetching')
      console.log('error ', error)
    }

    console.log('end fetching')
    setLoading(false)
  }

  interface IDriver {
    fullName: string
    shortName: string
    driverNumber: string
  }

  const drivers: IDriver[] = [
    { fullName: 'Lewis Hamilton', shortName: 'HAM', driverNumber: '44' },
    { fullName: 'George Russell', shortName: 'RUS', driverNumber: '63' },
    { fullName: 'Max Verstappen', shortName: 'VER', driverNumber: '1' },
    { fullName: 'Sergio Perez', shortName: 'PER', driverNumber: '11' },
    { fullName: 'Charles Leclerc', shortName: 'LEC', driverNumber: '16' },
    { fullName: 'Carlos Sainz', shortName: 'SAI', driverNumber: '55' },
    { fullName: 'Lando Norris', shortName: 'NOR', driverNumber: '4' },
    { fullName: 'Daniel Ricciardo', shortName: 'RIC', driverNumber: '3' },
    { fullName: 'Fernando Alonso', shortName: 'ALO', driverNumber: '14' },
    { fullName: 'Esteban Ocon', shortName: 'OCO', driverNumber: '31' },
    { fullName: 'Pierre Gasly', shortName: 'GAS', driverNumber: '10' },
    { fullName: 'Yuki Tsunoda', shortName: 'TSU', driverNumber: '22' },
    { fullName: 'Sebastian Vettel', shortName: 'VET', driverNumber: '5' },
    { fullName: 'Lance Stroll', shortName: 'STR', driverNumber: '18' },
    { fullName: 'Valtteri Bottas', shortName: 'BOT', driverNumber: '77' },
    { fullName: 'Guanyu Zhou', shortName: 'ZHO', driverNumber: '24' },
    { fullName: 'Alexander Albon', shortName: 'ALB', driverNumber: '23' },
    { fullName: 'Nicholas Latifi', shortName: 'LAT', driverNumber: '6' },
    { fullName: 'Mick Schumacher', shortName: 'MSC', driverNumber: '47' },
    { fullName: 'Kevin Magnussen', shortName: 'MAG', driverNumber: '20' }
  ]

  const years = ['2022', '2021', '2020'];
  const races = ['SILVERSTONE', 'MONZA', 'SPA'];

  return (
    <Box style={{ width: "100vw"}}>
      <TopBar key={null} type={''} props={'div'} />

      <Box
        style={{
          height: '100vh',
          width: 'fit-content',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <Box style={{ height: '500px', width: '800px', padding: '12px' }}>
          <Button onClick={toggleColorMode}>
            Toggle {colorMode === 'light' ? 'Dark' : 'Light'}
          </Button>
          <Select placeholder="Select year" onChange={handleYearChange} style={{ marginTop: '12px' }}>
            {years.map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </Select>
          <Select placeholder="Select race" onChange={handleRaceChange} style={{ marginTop: '12px' }}>
            {races.map((race) => (
              <option key={race} value={race}>
                {race}
              </option>
            ))}
          </Select>
          <Select placeholder="Select driver" onChange={handleDriverChange} style={{ marginTop: '12px' }}>
            {drivers.map((driver) => (
              <option key={driver.shortName} value={driver.shortName}>
                {driver.fullName}
              </option>
            ))}
          </Select>
          <Button onClick={() => fetchData()}>Fetch data</Button>
          {loading ? (
            <span>Loading...</span>
          ) : error ? (
            <span>{error}</span>
          ) :  telemetry ? (
            <F1TelemetryChart telemetryData={telemetry} />
          )  : (
            <Text color="GrayText">No data</Text>
          )}
        </Box>
      </Box>
    </Box>
  )
}

export default App
