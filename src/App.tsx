import {
  ChakraProvider,
} from "@chakra-ui/react"
import Footer from "./components/Footer"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import Spacer from "./components/Spacer"
import TechUsed from "./components/TechUsed"
import theme from "./components/theme/Theme"

export const App = () => (
  <ChakraProvider theme={theme}>
    <Navbar />
    <Hero />
    {/* <TechUsed /> */}
    <Spacer />
    <Footer />
  </ChakraProvider>
)
