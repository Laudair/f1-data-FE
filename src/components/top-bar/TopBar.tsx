import React from 'react'
import { Box, Flex, Button, Image } from '@chakra-ui/react'

// Replace this with the path to your Formula 1 logo image
import Formula1Logo from '../../assets/react.svg'

interface TopBarProps extends React.ReactElement<'div'> {
  children?: React.ReactNode
}

const TopBar: React.FC<TopBarProps> = ({ children, ...otherProps }) => {
  return (
    <Box
      w="100%"
      p={4}
      color="grey"
      bg="Background"
      style={{
        height: '80px',
        padding: '12px',
        position: 'fixed', 
        top: 0,           
        left: 0,          
        right: 0,        
        zIndex: 10,
        borderBottom: '1px solid grey',
        boxShadow: 'none',
        backgroundImage: 'none',
        backdropFilter: 'blur(4px)'        
      }}
      {...otherProps}
    >
      <Flex alignItems="center" justifyContent="space-between">
        <Image src={Formula1Logo} htmlWidth="60px" alt="Formula 1 Logo" />
        <Box flex={1} textAlign="center">
          {children}
        </Box>
        <Button colorScheme="blue">Login</Button>
      </Flex>
    </Box>
  )
}

export default TopBar
