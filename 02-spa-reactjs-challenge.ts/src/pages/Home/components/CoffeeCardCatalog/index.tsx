import { CoffeeActions, CoffeeBuyContainer, CoffeeCardWrapper, CoffeeCategory, CoffeeDescription } from './styles'
import { Text } from "../../../../styles/Text"
import { ShoppingCart } from "phosphor-react"
import { PlusAndMinusCounter } from '../../../../components/PlusAndMinusCounter'

export interface CoffeeCardCatalogType{
    id: number;
    image: string;
    title: string;
    description: string;
    price: number;
    category: string
}

export function CoffeeCardCatalog({ image, title, description, price, category }: CoffeeCardCatalogType) {
    return (
        <CoffeeCardWrapper>
            <img src={image} alt="" />

            <CoffeeCategory>
                <Text variant="tag">{category}</Text>
            </CoffeeCategory>

            <Text variant="titleS">{title}</Text>

            <CoffeeDescription>
                <Text variant="textS">{description}</Text>
            </CoffeeDescription>

            <CoffeeBuyContainer>
               <Text variant="titleM"> {price.toFixed(2)}</Text><Text variant="textS"> €</Text>
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