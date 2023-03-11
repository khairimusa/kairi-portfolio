import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
  fonts: {
    heading: `'DM Sans', sans-serif`,
    body: `'Dm Sans', sans-serif`,
  },
  useSystemColorMode: true,
  breakpoints: {
    sm: '320px',
    md: '768px',
    lg: '960px',
    xl: '1200px',
    '2xl': '1536px',
  }
})

export default theme
