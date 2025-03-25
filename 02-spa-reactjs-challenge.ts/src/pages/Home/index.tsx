import { HomeContainer, IntroContainer } from "./styles"

import coffeeDelivery from '../../assets/coffeeDelivery.svg'
import { Text } from "../../styles/Text"

export function Home() {
    return(
        <HomeContainer>
            <IntroContainer>
                <div>
                    <Text variant="titleXl">Find the perfect coffee for any time of the day.</Text>
                    <Text variant="textL">With Coffee Delivery, you receive your coffee wherever you are, at any time.</Text>
                </div>
                <img src={coffeeDelivery} alt="" />
            </IntroContainer>
        </HomeContainer>
    )
}