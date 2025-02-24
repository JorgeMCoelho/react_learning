import { ButtonContainer, ButtonVariant } from "./Button.styles";

interface ButtonProps {
    variant?: ButtonVariant // the "?" in variant, means this is a optional value
}

export function Button({ variant = 'primary'}: ButtonProps){ // the "=" in variant, means the default value is primary
    return <ButtonContainer variant ={variant}>Send</ButtonContainer> // instead of using the html element <button> we use the styled component ButtonContainer
}