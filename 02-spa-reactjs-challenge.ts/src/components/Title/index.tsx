import { ReactNode } from 'react'
import { TitleContainer } from './styles'

interface TitleProps {
    variant?: 'xsBold' | 'sBold' | 'mExtraBold' | 'lExtraBold' | 'xlExtraBold'
    children: ReactNode
}

export function Title({ variant = 'mExtraBold', children }: TitleProps){
    return <TitleContainer variant={variant}>{children}</TitleContainer>
}