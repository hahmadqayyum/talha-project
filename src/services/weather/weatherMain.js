import React from 'react'

import { ChakraProvider, ColorModeScript } from '@chakra-ui/react'
import App from './components/App'


export default function weatherMain(params) {
  return (
    <ChakraProvider>
      <ColorModeScript initialColorMode="light" />
      <App />
    </ChakraProvider>
  )
}

