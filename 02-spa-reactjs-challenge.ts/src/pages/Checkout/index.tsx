import { Text } from "../../styles/Text";
import { CoffeeCardCart } from "./components/CoffeeCardCart";
import { AdressInfoContainer, CheckoutCompleteOrderContainer, CheckoutWrapper, PaymentInfoContainer, SelectedCoffeesContainer, SelectedCoffeesTotals, SubmitOrderButton } from "./styles";

import { Bank, CreditCard, CurrencyEur, MapPinLine, Money } from "phosphor-react"


export function Checkout(){
    return(
        <CheckoutWrapper>
            <div>
                <Text variant="titleXs">Complete your Order</Text>
                <CheckoutCompleteOrderContainer>

                    <AdressInfoContainer>
                        <header>
                            <div>
                                <MapPinLine size={22} />
                            </div>
                            <div>
                                <Text variant="textM"> Delivery Address</Text>
                                <Text variant="textS">Enter the address where you want to receive your order</Text>
                            </div>
                        </header>

                        <form action="">
                            <input type="text" placeholder="Zip Code" />
                            <input type="text" placeholder="Street" />
                            <input type="text" placeholder="Number" />
                            <input type="text" placeholder="Aditional Info" /> 
                            <input type="text" placeholder="Neighborhood" />
                            <input type="text" placeholder="City" />
                            <input type="text" placeholder="State" />
                        </form>
                    </AdressInfoContainer>
                    <PaymentInfoContainer>
                        <header>
                            <div>
                                <CurrencyEur size={22} />
                            </div>
                            <div>
                                <Text variant="textM">Payment</Text>
                                <Text variant="textS">Payment is made upon delivery. Choose the payment method you prefer</Text>
                            </div>
                        </header>
                        
                        <form action="">
                            <label>
                                <input type="radio" name="paymentMethod" value="credit" />
                                <span><CreditCard size={16} /> Credit Card</span>
                            </label>
                            <label>
                                <input type="radio" name="paymentMethod" value="debit" />
                                <span><Bank size={16} />Debit Card</span>
                            </label>
                            <label>
                                <input type="radio" name="paymentMethod" value="money" />
                                <span><Money size={16} />Money</span>
                            </label>
                        </form>
                    </PaymentInfoContainer>
                </CheckoutCompleteOrderContainer>
            </div>
            <div>
                 <Text variant="titleXs">Selected Coffees</Text>
                 <SelectedCoffeesContainer>
                    <CoffeeCardCart />
                    <SelectedCoffeesTotals>
                        <Text variant="textS">Subtotal</Text>
                        <Text variant="textM">29,00€</Text>
                    </SelectedCoffeesTotals>
                    <SelectedCoffeesTotals>
                        <Text variant="textS">Delivery fee</Text>
                        <Text variant="textM">3,00€</Text>
                    </SelectedCoffeesTotals>
                    <SelectedCoffeesTotals>
                        <Text variant="textL">Order Total</Text>
                        <Text variant="textL">32,00€</Text>
                    </SelectedCoffeesTotals>
                    <SubmitOrderButton>Submit Order</SubmitOrderButton>
                 </SelectedCoffeesContainer>
            </div>
        </CheckoutWrapper>
    )
}