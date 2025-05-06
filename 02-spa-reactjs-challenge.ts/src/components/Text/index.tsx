import { ReactNode } from 'react'
import { TextContainer } from './styles'

interface TextProps {
    size?: 'xs' | 's' | 'm' | 'l'
    weight?: 'normal' | 'bold'
    children: ReactNode
}

export function Text({ size = 'm', weight = 'normal', children }: TextProps){
    return <TextContainer size ={size} weight={weight}>{children}</TextContainer>
}