import styled, {css} from "styled-components";

export type TextVariant = 'xsBold' | 'sRegular' | 'mRegular' | 'mBold' | 'lRegular' | 'lBold' | 'tag'

interface TextContainerProps {
   variant: TextVariant;
}

const textVariants ={
    xsBold: { 
        fontSize:'0.75rem',
        fontWeight: '600',
        },
    sRegular: { 
        fontSize:'0.85rem',
        fontWeight: '400',
        },
    mRegular: { 
        fontSize:'1rem',
        fontWeight: '400',
        },
    mBold: { 
        fontSize: '1rem',
        fontWeight: '600',
        },
    lRegular: { 
        fontSize:'1.25rem',
        fontWeight: '400',
        },
    lBold: { 
        fontSize:'1.25rem',
        fontWeight: '600',
        },
    tag: {
        fontSize: '0.625rem',
        fontWeight: '600',
    }
}

export const TextContainer = styled.p<TextContainerProps>`
    ${props =>{
        return css`
            font-size: ${textVariants[props.variant].fontSize};
            font-weight: ${textVariants[props.variant].fontWeight};
            line-height: 130%;
            font-family: Roboto, sans-serif;
        `
    }}
`