import { ButtonContainer, ButtonVariant } from './Button.styles'

interface ButtonProps {
// the "?" in variant, means this is a optional value
  variant?: ButtonVariant
}

// the "=" in variant, means the default value is primary
export function Button({ variant = 'primary' }: ButtonProps) {
  // instead of using the html element <button>
  // we use the styled component ButtonContainer
  return <ButtonContainer variant={variant}>Send</ButtonContainer>
}
