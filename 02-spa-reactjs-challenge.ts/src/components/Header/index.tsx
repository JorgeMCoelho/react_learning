import { HeaderContainer, HeaderWrapper, LocationButton, ShoppingCartButton } from './styles'
import { MapPin, ShoppingCart } from 'phosphor-react'

import logo from '../../assets/logo.svg'
import { useNavigate } from 'react-router-dom';

export function Header() {
    const navigate = useNavigate();
    return (

        <HeaderWrapper>
            <HeaderContainer>
                <img 
                    src={logo} 
                    alt=""
                    onClick={() => navigate("/")}
                />
                <nav>
                    <LocationButton>
                        <MapPin size={22} weight='fill' />
                        New Cambria, KS
                    </LocationButton>
                    <ShoppingCartButton onClick={() => navigate("/checkout")}>
                        <ShoppingCart size={22} weight='fill' />
                    </ShoppingCartButton>
                    
                </nav>
            </HeaderContainer>
        </HeaderWrapper>
    )
}