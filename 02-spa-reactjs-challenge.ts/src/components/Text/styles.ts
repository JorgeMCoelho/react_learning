import styled, {css} from "styled-components";

export type TextSizeVariant = 'xs' | 's' | 'm' | 'l'

export type TextWeightVariant = 'normal' | 'bold'
interface TextContainerProps {
    size: TextSizeVariant;
    weight: TextWeightVariant;
}

const textSizeVariants ={
    xs: '0.75rem',
    s: '0.875rem',
    m: '1rem',
    l: '1.25rem',
}

const textWeightVariant = {
    normal: '400',
    bold: '600',

}

export const TextContainer = styled.p<TextContainerProps>`
    ${props =>{
        return css`
            font-size: ${textSizeVariants[props.size]};
            font-weight: ${textWeightVariant[props.weight]};
            line-height: 130%;
            font-family: Roboto, sans-serif;
        `
    }}
`