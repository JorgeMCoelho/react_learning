import { CoffeeActions, CoffeeBuyContainer, CoffeeCardWrapper, CoffeeCategory, CoffeeCategoryWrapper, CoffeeDescription, CoffeePrice } from './styles'
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
    category: string[];
};

export function CoffeeCardCatalog({ image, title, description, price, category }: CoffeeCardCatalogType) {
    return (
        <CoffeeCardWrapper>
            <img src={image} alt="" />

            <CoffeeCategoryWrapper>
                {category.map(category => {
                    return (            
                        <CoffeeCategory>
                        <Text variant='tag' >{category}</Text>
                        </CoffeeCategory>
                    )
                })}
            </CoffeeCategoryWrapper>

            <Title variant="sBold">{title}</Title>

            <CoffeeDescription>
                <Text variant='sRegular'>{description}</Text>
            </CoffeeDescription>

            <CoffeeBuyContainer>
                <CoffeePrice>
                    <Title variant="mExtraBold" >{price.toFixed(2)}</Title>
                    <Text variant="sRegular"> €</Text>
                </CoffeePrice>
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