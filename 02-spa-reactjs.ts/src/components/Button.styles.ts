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
    border-radius: 4px;
    border: 0;
    margin: 8px;

    background-color: ${props => props.theme['green-500']}; // here we are using the theme from the default.ts file
    color: ${props => props.theme.white};
/*
    ${props => {
        return css`
            background-color: ${buttonVariants[props.variant]}
        ` 
    }}*/
`