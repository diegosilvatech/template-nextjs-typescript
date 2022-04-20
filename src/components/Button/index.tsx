import * as s from './styles'

type ButtonProps = {
  children: string | number
  isFullWidth?: boolean
  variant?: 'primary' | 'secondary'
  onClick?: () => void
}
const Button = ({
  children,
  isFullWidth = false,
  variant = 'primary',
  onClick
}: ButtonProps) => (
  <s.Button isFullWidth={isFullWidth} variant={variant} onClick={onClick}>
    {children}
  </s.Button>
)
export default Button
