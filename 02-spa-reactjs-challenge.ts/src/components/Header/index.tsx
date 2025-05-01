import { CartCounter, HeaderContainer, HeaderWrapper, LocationButton, ShoppingCartButton } from './styles'
import { MapPin, ShoppingCart } from 'phosphor-react'

import logo from '../../assets/logo.svg'
import { useNavigate } from 'react-router-dom';
import { Text } from '../../styles/Text';

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
                        <CartCounter> <Text variant="textS">0</Text> </CartCounter>
                    </ShoppingCartButton>
                    
                    
                </nav>
            </HeaderContainer>
        </HeaderWrapper>
    )
}