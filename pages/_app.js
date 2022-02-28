import { ChakraProvider } from '@chakra-ui/react'
import Footer from '../components/footer'
import Navbar from '../components/navbar'
import theme from "../Themes/themes"
function MyApp({ Component, pageProps }) {
  return <ChakraProvider>
       <Component {...pageProps} theme={theme} />
  </ChakraProvider>
}

export default MyApp
