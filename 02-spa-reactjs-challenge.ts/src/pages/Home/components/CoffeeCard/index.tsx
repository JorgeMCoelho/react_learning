import coffee from '../../../../assets/Coffee.svg'
import { CoffeeActions, CoffeeBuyContainer, CoffeeCardWrapper, CoffeeCategory, CoffeeDescription } from './styles'
import { Text } from "../../../../styles/Text"
import { Minus, Plus, ShoppingCart } from "phosphor-react"

export function CoffeeCard() {
    return (
        <CoffeeCardWrapper>
            <img src={coffee} alt="" />

            <CoffeeCategory>
                <Text variant="tag">TRADITIONAL</Text>
            </CoffeeCategory>

            <Text variant="titleS">Traditional Espresso</Text>

            <CoffeeDescription>
                <Text variant="textS">The traditional coffee made with hot water and ground beans.</Text>
            </CoffeeDescription>

            <CoffeeBuyContainer>
                2.00 €
                <CoffeeActions>
                    <Minus size={14} />
                    1
                    <Plus size={14} />
                    <button>
                        <ShoppingCart size={22} weight="fill" />
                    </button>
                    
                </CoffeeActions>
            </CoffeeBuyContainer>

        </CoffeeCardWrapper>
    )
}