import { Trash } from 'phosphor-react'
import coffee from '../../../../assets/Coffee.svg'
import { Text } from '../../../../styles/Text'
import { CoffeeCardCartActions, CoffeeCardCartContainer, CoffeeCardCartWrapper } from './styles'
import { PlusAndMinusCounter } from '../../../../components/PlusAndMinusCounter'

export function CoffeeCardCart() {
    return (
        <CoffeeCardCartWrapper>
            <CoffeeCardCartContainer>
                <img src={coffee} alt="" />
                <div>
                    <Text variant="textM">Traditional Espresso</Text>
                    <CoffeeCardCartActions>
                        <PlusAndMinusCounter />
                        <button> <Trash size={16} />REMOVE</button>
                    </CoffeeCardCartActions>
                </div>
            </CoffeeCardCartContainer>
            <Text variant="textM">9,00€</Text>
        </CoffeeCardCartWrapper>
    )
}