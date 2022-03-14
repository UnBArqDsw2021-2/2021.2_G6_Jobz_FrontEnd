import { ChakraProvider } from '@chakra-ui/react'
import { theme } from '../../helpers'
import Main from '../Main'

export default function Profile() {
  return (
    <ChakraProvider theme={theme}>
      <Main />
    </ChakraProvider>
  )
}
