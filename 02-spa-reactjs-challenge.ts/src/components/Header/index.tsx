import { HeaderContainer, HeaderWrapper, LocationButton, ShoppingCartButton } from './styles'
import { MapPin, ShoppingCart } from 'phosphor-react'

import logo from '../../assets/logo.svg'

export function Header() {
    return (

        <HeaderWrapper>
            <HeaderContainer>
                <img src={logo} alt="" />
                <nav>
                    <LocationButton>
                        <MapPin size={22} weight='fill' />
                        Porto Alegre, RS
                    </LocationButton>
                    <ShoppingCartButton>
                        <ShoppingCart size={22} weight='fill' />
                    </ShoppingCartButton>
                    
                </nav>
            </HeaderContainer>
        </HeaderWrapper>
    )
}