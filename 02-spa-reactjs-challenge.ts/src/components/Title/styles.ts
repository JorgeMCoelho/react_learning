import styled, {css} from "styled-components";

export type TitleVariant = 'xsBold' | 'sBold' | 'mExtraBold' | 'lExtraBold' | 'xlExtraBold'

interface TitleContainerProps {
    variant: TitleVariant;
}

const titleVariants ={
    xsBold: {
        fontSize: '1.125rem',
        fontWeight: '600',
        },
    sBold: {
        fontSize: '1.25rem',
        fontWeight: '600',
        },
    mExtraBold: {
        fontSize: '1.5rem',
        fontWeight: '800',
        },
    lExtraBold: {
        fontSize: '2rem',
        fontWeight: '800',
        },
    xlExtraBold: {
        fontSize: '3rem',
        fontWeight: '800',
        },
}

export const TitleContainer = styled.p<TitleContainerProps>`
    ${props =>{
        return css`
            font-size: ${titleVariants[props.variant].fontSize};
            font-weight: ${titleVariants[props.variant].fontWeight};
            line-height: 130%;
        `
    }}
`