import { styled, css, CSS } from '../../../stitches.config'

const baseCSS: CSS = {
  border: '2px solid transparent',
  padding: '$1 $2',
  borderRadius: '$small',
  fontWeight: 'bold',

  '&:hover': {
    cursor: 'pointer'
  }
}

const primaryCSS: CSS = {
  color: '$white',
  backgroundColor: '$violet9',
  borderColor: '$violet9',

  '&:hover': {
    backgroundColor: '$violet10',
    borderColor: '$violet10'
  }
}

const secondaryCSS: CSS = {
  color: '$violet9',
  backgroundColor: '$violet3',
  borderColor: '$violet9',

  '&:hover': {
    color: '$violet10',
    backgroundColor: '$violet4',
    borderColor: '$violet10'
  }
}

const isFullWidthCSS: CSS = {
  width: '100%'
}

const buttonCSS = css({
  ...baseCSS,
  variants: {
    variant: {
      primary: primaryCSS,
      secondary: secondaryCSS
    },
    isFullWidth: {
      true: isFullWidthCSS
    }
  }
})

export const Button = styled('button', buttonCSS)
