import { HomeContainer, IntroContainer, IntroContainerText, ReasonFour, ReasonOne, ReasonThree, ReasonTwo } from "./styles"

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
                        <tbody>
                        <tr>
                            <ReasonOne><ShoppingCart size={32} weight="fill" />Simple and secure purchase</ReasonOne>
                            <ReasonTwo><Package size ={32} weight="fill" />The packaging keeps the coffee intact</ReasonTwo>
                        </tr>
                        <tr>
                            <ReasonThree><Timer size={32} weight="fill" />Fast and tracked delivery</ReasonThree>
                            <ReasonFour><Coffee size={32} weight="fill" />The coffee arrives fresh at your doorstep</ReasonFour>
                        </tr>
                        </tbody>
                    </table>
                </IntroContainerText>
                <img src={coffeeDelivery} alt="" />
            </IntroContainer>

        </HomeContainer>
    )
}