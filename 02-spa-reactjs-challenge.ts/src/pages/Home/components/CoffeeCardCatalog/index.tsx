import { CoffeeActions, CoffeeBuyContainer, CoffeeCardWrapper, CoffeeCategory, CoffeeDescription } from './styles'
import { ShoppingCart } from "phosphor-react"
import { Text } from '../../../../components/Text'
import { Title } from '../../../../components/Title'
import { PlusAndMinusCounter } from '../../../../components/PlusAndMinusCounter'

export interface CoffeeCardCatalogType{
    id: number;
    image: string;
    title: string;
    description: string;
    price: number;
    category: string
};

export function CoffeeCardCatalog({ image, title, description, price, category }: CoffeeCardCatalogType) {
    return (
        <CoffeeCardWrapper>
            <img src={image} alt="" />

            <CoffeeCategory>
                <Text >{category}</Text>
            </CoffeeCategory>

            <Title size='s' weight='bold'>{title}</Title>

            <CoffeeDescription>
                <Text size='s' weight='normal'>{description}</Text>
            </CoffeeDescription>

            <CoffeeBuyContainer>
                <Title size="m" weight="bolder">{price.toFixed(2)}</Title><Text size="s" weight="normal"> €</Text>
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