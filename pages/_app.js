import { ChakraProvider } from '@chakra-ui/react'
import Footer from '../components/footer'
import Navbar from '../components/navbar'
import theme from "../Themes/themes"
console.log(theme)
function MyApp({ Component, pageProps }) {
  return <ChakraProvider>
    <Navbar/>
       <Component {...pageProps} theme={theme} />
       <Footer/>
  </ChakraProvider>
}

export default MyApp
