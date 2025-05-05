import { CoffeeCardContainer, HomeContainer, IntroContainer, IntroContainerBackground, IntroContainerText, ReasonFour, ReasonOne, ReasonThree, ReasonTwo, ReasonsRow } from "./styles"

import coffee from '../../assets/Coffee.svg'
import coffeeAmerican from '../../assets/CoffeeAmericano.png'
import coffeeCreamy from '../../assets/CoffeeCreamy.png'
import coffeeIced from '../../assets/CoffeeIced.png'
import coffeeMilk from '../../assets/CoffeeMilk.png'
import latte from '../../assets/Latte.png'
import capuccino from '../../assets/Capuccino.png'
import macchiato from '../../assets/Macchiato.png'
import mocaccino from '../../assets/Mocaccino.png'
import hotChocolate from '../../assets/HotChocolate.png'
import coffeeCuban from '../../assets/CoffeeCuban.png'
import coffeeHawaiian from '../../assets/CoffeeHawaiian.png'
import coffeeArabian from '../../assets/CoffeeArabian.png'
import coffeeIrish from '../../assets/CoffeeIrish.png'

import coffeeDelivery from '../../assets/coffeeDelivery.svg'
import { Text } from "../../styles/Text"
import { Coffee, Package, ShoppingCart, Timer } from "phosphor-react"
import { CoffeeCardCatalog, CoffeeCardCatalogType } from "./components/CoffeeCardCatalog"

export function Home() {

    const coffeeCatalog: CoffeeCardCatalogType[] = [
        {
            id: 1,
            image: coffee, 
            title: 'Traditional Espresso',
            description: 'The traditional coffee made with hot water and ground beans.',
            price: 1.50,
            category: 'Traditional',
        },
        {
            id: 2,
            image: coffeeAmerican,
            title: 'American Coffee',
            description: 'Diluted espresso, less intense than the traditional one.',
            price: 1.50,
            category:'Traditional',
        },
        {
            id: 3,
            image: coffeeCreamy,
            title: 'Creamy Coffee',
            description: 'Traditional espresso with creamy foam.',
            price: 1.50,
            category:'Traditional',
        },
        {
            id: 4,
            image: coffeeIced,
            title: 'Iced Coffee',
            description: 'A drink made with espresso and ice cubes.',
            price: 1.50,
            category: 'Traditional',
        },
        {
            id: 5,
            image: coffeeMilk,
            title: 'Coffee with Milk',
            description: 'Half and half of traditional espresso with steamed milk.',
            price: 1.50,
            category: 'Traditional',
        },
        {
            id: 6,
            image: latte,
            title: 'Latte',
            description: 'A shot of espresso with double the milk and creamy foam.',
            price: 1.50,
            category: 'Traditional',
        },
        {
            id: 7,
            image: capuccino,
            title: 'Cappuccino',
            description: 'A cinnamon drink made with equal parts coffee, milk, and foam.',
            price: 1.50,
            category: 'Traditional',
        },
        {
            id: 8,
            image: macchiato,
            title: 'Macchiato',
            description: 'Espresso mixed with a little hot milk and foam.',
            price: 1.50,
            category: 'Traditional',
        },
        {
            id: 9,
            image: mocaccino,
            title: 'Mocaccino',
            description: 'Espresso with chocolate syrup, a little milk, and foam.',
            price: 1.50,
            category: 'Traditional',
        },
        {
            id: 10,
            image: hotChocolate,
            title: 'Hot Chocolate',
            description: 'A drink made with chocolate dissolved in hot milk and coffee.',
            price: 1.50,
            category: 'Traditional',
        },
        {
            id: 11,
            image: coffeeCuban,
            title: 'Cuban Coffee',
            description: 'Iced espresso drink with rum, cream, and mint.',
            price: 1.50,
            category: 'Traditional',
        },
        {
            id: 12,
            image: coffeeHawaiian,
            title: 'Hawaiian Coffee',
            description: 'Sweetened drink made with coffee and coconut milk.',
            price: 1.50,
            category: 'Traditional',
        },
        {
            id: 13,
            image: coffeeArabian,
            title: 'Arabian Coffee',
            description: 'Drink made with Arabica coffee beans and spices.',
            price: 1.50,
            category: 'Traditional',
        },
        {
            id: 14,
            image: coffeeIrish,
            title: 'Irish Coffee',
            description: 'Coffee-based drink with Irish whiskey, sugar, and whipped cream.',
            price: 1.50,
            category: 'Traditional',
        }
    ];

    return(
        <HomeContainer>
            <IntroContainerBackground>
                <IntroContainer>
                    <IntroContainerText>
                        <Text variant="titleXl">Find the perfect coffee for any time of the day.</Text>
                        <Text variant="textL">With Coffee Delivery, you receive your coffee wherever you are, at any time.</Text>
                        <table>
                            <tbody>
                            <ReasonsRow>
                                <ReasonOne><ShoppingCart size={32} weight="fill" />Simple and secure purchase</ReasonOne>
                                <ReasonTwo><Package size ={32} weight="fill" />The packaging keeps the coffee intact</ReasonTwo>
                            </ReasonsRow>
                            <ReasonsRow>
                                <ReasonThree><Timer size={32} weight="fill" />Fast and tracked delivery</ReasonThree>
                                <ReasonFour><Coffee size={32} weight="fill" />The coffee arrives fresh</ReasonFour>
                            </ReasonsRow>
                            </tbody>
                        </table>
                    </IntroContainerText>
                    <img src={coffeeDelivery} alt="" />
                </IntroContainer>
            </IntroContainerBackground>

            <CoffeeCardContainer>
                {coffeeCatalog.map(coffee => {
                        return (
                            <CoffeeCardCatalog 
                                key={coffee.id}
                                id={coffee.id}
                                image={coffee.image}
                                title={coffee.title}
                                price={coffee.price}
                                description={coffee.description}
                                category={coffee.category}
                            />
                        )
                    })}
            </CoffeeCardContainer>
        </HomeContainer>
        
    )
}