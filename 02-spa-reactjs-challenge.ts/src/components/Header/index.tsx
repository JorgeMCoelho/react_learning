import { HeaderContainer } from './styles'

import logo from '../../assets/logo.svg'

export function Header() {
    return (

        <HeaderContainer>
            <img src={logo} alt="" />
            <div> Porto Alegre, RS</div>
            <div> Shopping Cart</div>
        </HeaderContainer>
    )
}