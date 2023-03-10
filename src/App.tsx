import {
  ChakraProvider,
} from "@chakra-ui/react"
import Footer from "./components/Footer"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import Spacer from "./components/Spacer"
import theme from "./components/theme/Theme"

export const App = () => (
  <ChakraProvider theme={theme}>
    <Navbar />
    <Hero />
    <Spacer />
    <Footer />
  </ChakraProvider>
)
