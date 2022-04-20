import { createStitches } from '@stitches/react'
import * as Stitches from '@stitches/react'

import { crimson, mint, violet } from '@radix-ui/colors'

export const {
  config,
  createTheme,
  css,
  getCssText,
  globalCss,
  styled,
  theme
} = createStitches({
  theme: {
    colors: {
      ...violet,
      ...crimson,
      ...mint,
      white: '#ffffff'
    },
    radii: {
      small: '4px',
      large: '8px',
      rounded: '9999px'
    },
    fonts: {
      system: 'system-ui'
    },
    fontSizes: {
      1: '12px',
      2: '13px',
      3: '15px',
      4: '17px',
      5: '19px',
      6: '21px'
    },
    space: {
      1: '5px',
      2: '10px',
      3: '15px',
      4: '20px',
      5: '25px',
      6: '35px'
    },
    sizes: {
      1: '5px',
      2: '10px',
      3: '15px',
      4: '20px',
      5: '25px',
      6: '35px'
    }
  },
  utils: {
    marginX: (value: number) => ({
      marginLeft: value,
      marginRight: value
    }),
    marginY: (value: number) => ({
      marginTop: value,
      marginBottom: value
    }),
    paddingX: (value: number) => ({
      paddingLeft: value,
      paddingRight: value
    }),
    paddingY: (value: number) => ({
      paddingTop: value,
      paddingBottom: value
    })
  },
  media: {
    bp1: '(min-width: 520px)',
    bp2: '(min-width: 900px)'
  }
})

export type CSS = Stitches.CSS<typeof config>
