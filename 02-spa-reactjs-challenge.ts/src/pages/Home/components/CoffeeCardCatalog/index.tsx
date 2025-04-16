import coffee from '../../../../assets/Coffee.svg'
import { CoffeActionsPlusAndMinus, CoffeeActions, CoffeeBuyContainer, CoffeeCardWrapper, CoffeeCategory, CoffeeDescription } from './styles'
import { Text } from "../../../../styles/Text"
import { Minus, Plus, ShoppingCart } from "phosphor-react"
import { PlusAndMinusCounter } from '../../../../components/PlusAndMinusCounter'

export function CoffeeCardCatalog() {
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
               <Text variant="titleM"> 2.00</Text><Text variant="textS"> €</Text>
                <CoffeeActions>
                <PlusAndMinusCounter />
                    <button>
                        <ShoppingCart size={22} weight="fill" />
                    </button>
                    
                </CoffeeActions>
            </CoffeeBuyContainer>

        </CoffeeCardWrapper>
    )
}