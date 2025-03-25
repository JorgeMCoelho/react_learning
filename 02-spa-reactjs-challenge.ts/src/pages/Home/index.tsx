import { HomeContainer, IntroContainer, IntroContainerText } from "./styles"

import coffeeDelivery from '../../assets/coffeeDelivery.svg'
import { Text } from "../../styles/Text"

export function Home() {
    return(
        <HomeContainer>
            <IntroContainer>
                <IntroContainerText>
                    <Text variant="titleXl">Find the perfect coffee for any time of the day.</Text>
                    <Text variant="textL">With Coffee Delivery, you receive your coffee wherever you are, at any time.</Text>
                </IntroContainerText>
                <img src={coffeeDelivery} alt="" />
            </IntroContainer>
        </HomeContainer>
    )
}