import { CartCounter, HeaderContainer, HeaderWrapper, LocationButton, ShoppingCartButton } from './styles'
import { MapPin, ShoppingCart } from 'phosphor-react'

import logo from '../../assets/logo.svg'
import { useNavigate } from 'react-router-dom';
import { Text } from '../../components/Text';

interface ShoppingCartTemp {
    id: number;
    productQuantity: number;
}

export function Header() {
    const navigate = useNavigate();
    
    const shoppingCart: ShoppingCartTemp = {
        id: 1,
        productQuantity: 0,
    }
    
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
                        <Text variant='sRegular'>New Cambria, KS</Text>
                    </LocationButton>
                    <ShoppingCartButton onClick={() => navigate("/checkout")}>
                        <ShoppingCart size={22} weight='fill' />
                            {shoppingCart.productQuantity > 0 && (
                                <CartCounter>
                                    <Text variant="xsBold">{shoppingCart.productQuantity}</Text>
                                </CartCounter>
                            )}

            
                    </ShoppingCartButton>
                    
                    
                </nav>
            </HeaderContainer>
        </HeaderWrapper>
    )
}