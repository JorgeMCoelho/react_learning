import { Trash } from 'phosphor-react'
import coffee from '../../../../assets/Coffee.svg'
import { Text } from '../../../../components/Text'
import { CoffeeCardCartActions, CoffeeCardCartContainer, CoffeeCardCartWrapper } from './styles'
import { PlusAndMinusCounter } from '../../../../components/PlusAndMinusCounter'

export function CoffeeCardCart() {
    return (
        <CoffeeCardCartWrapper>
            <CoffeeCardCartContainer>
                <img src={coffee} alt="" />
                <div>
                    <Text variant="mRegular">Traditional Espresso</Text>
                    <CoffeeCardCartActions>
                        <PlusAndMinusCounter />
                        <button> <Trash size={16} />REMOVE</button>
                    </CoffeeCardCartActions>
                </div>
            </CoffeeCardCartContainer>
            <Text variant="mBold">9,00€</Text>
        </CoffeeCardCartWrapper>
    )
}