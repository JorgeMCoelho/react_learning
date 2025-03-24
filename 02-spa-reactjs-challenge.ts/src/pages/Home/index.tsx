import { HomeContainer, IntroContainer } from "./styles"

import coffeeDelivery from '../../assets/coffeeDelivery.svg'

export function Home() {
    return(
        <HomeContainer>
            <IntroContainer>
                <div>
                    <h1>Find the perfect coffee for any time of the day.</h1>
                    <p>With Coffee Delivery, you receive your coffee wherever you are, at any time.</p>
                </div>
                <img src={coffeeDelivery} alt="" />
            </IntroContainer>
        </HomeContainer>
    )
}