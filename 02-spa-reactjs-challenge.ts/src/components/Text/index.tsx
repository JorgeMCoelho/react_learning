import { ReactNode } from 'react'
import { TextContainer } from './styles'

interface TextProps {
    variant?: 'xsBold' | 'sRegular' | 'mRegular' | 'mBold' | 'lRegular' | 'lBold'
    children: ReactNode
}

export function Text({ variant = "sRegular", children }: TextProps){
    return <TextContainer variant = {variant}>{children}</TextContainer>
}