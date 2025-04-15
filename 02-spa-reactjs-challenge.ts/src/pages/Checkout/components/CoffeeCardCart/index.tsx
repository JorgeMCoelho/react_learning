import { Minus, Plus, Trash } from 'phosphor-react'
import coffee from '../../../../assets/Coffee.svg'
import { Text } from '../../../../styles/Text'
import { CoffeeCardCartActions, CoffeeCardCartContainer, CoffeeCardCartWrapper } from './styles'

export function CoffeeCardCart() {
    return (
        <CoffeeCardCartWrapper>
            <CoffeeCardCartContainer>
                <img src={coffee} alt="" />
                <div>
                    <Text variant="textM">Traditional Espresso</Text>
                    <CoffeeCardCartActions>
                        <Minus size={14} />
                        <Text variant="textM">1</Text>
                        <Plus size={14} />
                        <button> <Trash size={16} />REMOVE</button>
                    </CoffeeCardCartActions>
                </div>
            </CoffeeCardCartContainer>
            <Text variant="textM">9,00€</Text>
        </CoffeeCardCartWrapper>
    )
}