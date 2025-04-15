import { CoffeeCardContainer, HomeContainer, IntroContainer, IntroContainerBackground, IntroContainerText, ReasonFour, ReasonOne, ReasonThree, ReasonTwo, ReasonsRow } from "./styles"

import coffeeDelivery from '../../assets/coffeeDelivery.svg'
import { Text } from "../../styles/Text"
import { Coffee, Package, ShoppingCart, Timer } from "phosphor-react"
import { CoffeeCardCatalog } from "./components/CoffeeCardCatalog"

export function Home() {
    return(
        <HomeContainer>
            <IntroContainerBackground>
                <IntroContainer>
                    <IntroContainerText>
                        <Text variant="titleXl">Find the perfect coffee for any time of the day.</Text>
                        <Text variant="textL">With Coffee Delivery, you receive your coffee wherever you are, at any time.</Text>
                        <table>
                            <tbody>
                            <ReasonsRow>
                                <ReasonOne><ShoppingCart size={32} weight="fill" />Simple and secure purchase</ReasonOne>
                                <ReasonTwo><Package size ={32} weight="fill" />The packaging keeps the coffee intact</ReasonTwo>
                            </ReasonsRow>
                            <ReasonsRow>
                                <ReasonThree><Timer size={32} weight="fill" />Fast and tracked delivery</ReasonThree>
                                <ReasonFour><Coffee size={32} weight="fill" />The coffee arrives fresh</ReasonFour>
                            </ReasonsRow>
                            </tbody>
                        </table>
                    </IntroContainerText>
                    <img src={coffeeDelivery} alt="" />
                </IntroContainer>
            </IntroContainerBackground>

            <CoffeeCardContainer>
                <CoffeeCardCatalog />
                <CoffeeCardCatalog />
                <CoffeeCardCatalog />
                <CoffeeCardCatalog />
            </CoffeeCardContainer>
        </HomeContainer>
        
    )
}