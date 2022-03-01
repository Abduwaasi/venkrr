import { extendTheme } from "@chakra-ui/react"
const themes = {
    styles: {
      global: {
        'html, body': {
          boxSizing:"border-box",
          padding:0,
          margin:0
        },
        a: {
          color: 'teal.500',
        },
      },
    },
   fonts:{
    body: "Inter,-apple-system, BlinkMacSystemFont, \"Segoe UI\", Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\"",
heading: "Inter,-apple-system, BlinkMacSystemFont, \"Segoe UI\", Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\"",
mono: "Inter,SFMono-Regular,Menlo,Monaco,Consolas,\"Liberation Mono\",\"Courier New\",monospace"
   },
    breakpoints:["320px","375px","425px","768px","1024px","1440px"]
  }
  const theme = extendTheme(themes)
  export default theme