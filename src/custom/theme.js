import { extendTheme } from '@chakra-ui/react'
import "@fontsource/fira-mono" 

const baseTheme = extendTheme({
  fonts: {
    body: `'Fira Mono', sans-serif`,
    heading: `'Fira Mono', sans-serif`,
  },
  components: {
    Link: {
      baseStyle: {
        color: '#54B4B7'
      },
    },
  },
})

export default baseTheme