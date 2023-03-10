import {
  ChakraProvider,
} from "@chakra-ui/react"
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import theme from "./components/theme/Theme"
import { Route, Routes } from "react-router-dom"
import AboutMe from "./pages/AboutMe"
import Projects from "./pages/Projects"
import Experience from "./pages/Experience"
import NotFound from "./pages/404"
import Contact from "./pages/Contact"

export const App = () => (
  <ChakraProvider theme={theme}>
    <Navbar />
    <Routes>
      <Route path="/" element={<AboutMe />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/experience" element={<Experience />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
    <Footer />
  </ChakraProvider>
)
