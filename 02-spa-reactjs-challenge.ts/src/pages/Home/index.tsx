import { CoffeeCardContainer, HomeContainer, IntroContainer, IntroContainerBackground, IntroContainerText, ReasonFour, ReasonOne, ReasonThree, ReasonTwo, ReasonsRow } from "./styles"

import coffeeDelivery from '../../assets/coffeeDelivery.svg'
import { Coffee, Package, ShoppingCart, Timer } from "phosphor-react"
import { CoffeeCardCatalog } from "./components/CoffeeCardCatalog"
import { Text } from "../../components/Text"
import { Title } from "../../components/Title"

export function Home() {

    return(
        <HomeContainer>
            <IntroContainerBackground>
                <IntroContainer>
                    <IntroContainerText>
                        <Title variant="xlExtraBold" >Find the perfect coffee for any time of the day.</Title>
                        <Text variant="lRegular">With Coffee Delivery, you receive your coffee wherever you are, at any time.</Text>
                        <table>
                            <tbody>
                            <ReasonsRow>
                                <ReasonOne><ShoppingCart size={32} weight="fill" /><Text variant="mRegular">Simple and secure purchase</Text></ReasonOne>
                                <ReasonTwo><Package size={32} weight="fill" /><Text variant="mRegular">The packaging keeps the coffee intact</Text></ReasonTwo>
                            </ReasonsRow>
                            <ReasonsRow>
                                <ReasonThree><Timer size={32} weight="fill" /><Text variant="mRegular">Fast and tracked delivery</Text></ReasonThree>
                                <ReasonFour><Coffee size={32} weight="fill" /><Text variant="mRegular">The coffee arrives fresh</Text></ReasonFour>
                            </ReasonsRow>
                            </tbody>
                        </table>
                    </IntroContainerText>
                    <img src={coffeeDelivery} alt="" />
                </IntroContainer>
            </IntroContainerBackground>

            <CoffeeCardContainer>
                <CoffeeCardCatalog />                                    
            </CoffeeCardContainer>
        </HomeContainer>
        
    )
}