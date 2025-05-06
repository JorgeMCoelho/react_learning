import { ReactNode } from 'react'
import { TitleContainer } from './styles'

interface TitleProps {
    size?: 'xs' | 's' | 'm' | 'l' | 'xl'
    weight?: 'normal' | 'bold' | 'bolder'
    children: ReactNode
}

export function Title({ size = 'm', weight = 'normal', children }: TitleProps){
    return <TitleContainer size ={size} weight={weight}>{children}</TitleContainer>
}