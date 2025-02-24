import styled, { css } from 'styled-components';

export type ButtonVariant = 'primary' | 'secondary' | 'danger' | 'success'; // here the variant can't be optional

interface ButtonContainerProps{
    variant: ButtonVariant; 
}

const buttonVariants ={
    primary: 'purple',
    secondary: 'orange',
    danger: 'red',
    success: 'green'    
};

export const ButtonContainer = styled.button<ButtonContainerProps>`   //styled.button (styled componente + html element)
    width: 100px;
    height: 40px;

    ${props => {
        return css`
            background-color: ${buttonVariants[props.variant]}
        ` 
    }}
`