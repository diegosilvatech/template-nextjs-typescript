import { globalCss } from '@stitches/react'

const resetCSS = {
  '*': {
    boxSizing: 'border-box',
    margin: '0',
    padding: '0'
  }
}

export const globalStyles = globalCss(resetCSS)
