import { extendTheme } from "@chakra-ui/react"
const themes = {
    styles: {
      global: {
        
        'html, body': {
          bg:"red",
          color: 'gray.600',
          lineHeight: 'tall',
          boxSizing:"border-box",
          padding:0,
          margin:0
        },
        a: {
          color: 'teal.500',
        },
      },
    },
    breakpoints:["320px","375px","425px","768px","1024px","1440px"]
  }
  const theme = extendTheme(themes)
  export default theme