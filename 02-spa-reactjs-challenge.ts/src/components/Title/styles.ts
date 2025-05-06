import styled, {css} from "styled-components";

export type TitleSizeVariant = 'xs' | 's' | 'm' | 'l' | 'xl'

export type TitleWeightVariant = 'normal' | 'bold' | 'bolder'
interface TitleContainerProps {
    size: TitleSizeVariant;
    weight: TitleWeightVariant;
}

const titleSizeVariants ={
    xs: '1.125rem',
    s: '1.25rem',
    m: '1.5rem',
    l: '2rem',
    xl: '3rem',
}

const titleWeightVariant = {
    normal: '400',
    bold: '600',
    bolder: '800',

}

export const TitleContainer = styled.p<TitleContainerProps>`
    ${props =>{
        return css`
            font-size: ${titleSizeVariants[props.size]};
            font-weight: ${titleWeightVariant[props.weight]};
            line-height: 130%;
        `
    }}
`