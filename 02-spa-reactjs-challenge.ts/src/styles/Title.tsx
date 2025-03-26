import styled from "styled-components";
import { defaultTheme } from "./themes/default";

type TypographyVariant = Exclude<keyof typeof defaultTheme.typography, "fonts">;

interface TextProps {
    variant?: TypographyVariant;
  }

export const Text = styled.p<TextProps>`
  ${({theme, variant ="body"}) =>{
    const typography = theme.typography[variant as TypographyVariant];
 
    return `
      font-size: ${typography.size};
      font-weight: ${typography.weight};
      line-height: ${typography.lineHeight};
      font-family: ${theme.typography.fonts[typography.family]}

      `
  }}
` 