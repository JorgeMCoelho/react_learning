import { HomeContainer, IntroContainer, IntroContainerText } from "./styles"

import coffeeDelivery from '../../assets/coffeeDelivery.svg'
import { Text } from "../../styles/Text"
import { Coffee, Package, ShoppingCart, Timer } from "phosphor-react"

export function Home() {
    return(
        <HomeContainer>
            <IntroContainer>
                <IntroContainerText>
                    <Text variant="titleXl">Find the perfect coffee for any time of the day.</Text>
                    <Text variant="textL">With Coffee Delivery, you receive your coffee wherever you are, at any time.</Text>
                    <table>
                        <tr>
                            <td><ShoppingCart size={32} weight="fill" />Simple and secure purchase</td>
                            <td><Package size ={32} weight="fill" />The packaging keeps the coffee intact</td>
                        </tr>
                        <tr>
                            <td><Timer size={32} weight="fill" />Fast and tracked delivery</td>
                            <td><Coffee size={32} weight="fill" />The coffee arrives fresh at your doorstep</td>
                        </tr>
                    </table>
                </IntroContainerText>
                <img src={coffeeDelivery} alt="" />
            </IntroContainer>

        </HomeContainer>
    )
}