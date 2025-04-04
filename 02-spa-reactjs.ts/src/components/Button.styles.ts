import styled, { css } from 'styled-components'

// here the variant can't be optional
export type ButtonVariant = 'primary' | 'secondary' | 'danger' | 'success'

interface ButtonContainerProps {
  variant: ButtonVariant;
}

const buttonVariants = {
  primary: 'purple',
  secondary: 'orange',
  danger: 'red',
  success: 'green',
}
// styled.button (styled componente + html element)
export const ButtonContainer = styled.button<ButtonContainerProps>`
    width: 100px;
    height: 40px;
    border-radius: 4px;
    border: 0;
    margin: 8px;

// here we are using the theme from the default.ts file
    background-color: ${props => props.theme['green-500']};
    color: ${props => props.theme.white};
/*
    ${props => {
        return css`
            background-color: ${buttonVariants[props.variant]}
        `
    }}*/
`
