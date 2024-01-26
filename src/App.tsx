import { Box } from '@chakra-ui/react'
import TopBar from './components/top-bar/TopBar'
import SpeedGear from './components/speed-gear-telemetry/SpeedGear'

function App() {
  return (
    <Box style={{ width: '100vw' }}>
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
        <SpeedGear />
      </Box>
    </Box>
  )
}

export default App
