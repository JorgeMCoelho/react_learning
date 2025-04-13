import { AdressInfoContainer, CheckoutCompleteOrderContainer, CheckoutWrapper, PaymentInfoContainer, SelectedCoffeesContainer } from "./styles";

import { Bank, CreditCard, CurrencyEur, MapPinLine, Money } from "phosphor-react"


export function Checkout(){
    return(
        <CheckoutWrapper>
            <div>
                <h1>Complete your Order</h1>
                <CheckoutCompleteOrderContainer>

                    <AdressInfoContainer>
                        <h1><MapPinLine size={22} /> Delivery Address</h1>
                        <h3>Enter the address where you want to receive your order</h3>
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
                        <h1><CurrencyEur size={22} />Payment</h1>
                        <h3>Payment is made upon delivery. Choose the payment method you prefer</h3>
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
                 <h1>Selected Coffees</h1>
                 <SelectedCoffeesContainer>
                    <h1>Coffee Card here</h1>
                    <div>
                        <h3>Subtotal</h3>
                        <h3>29,00€</h3>
                    </div>
                    <div>
                        <h3>Delivery fee</h3>
                        <h3>3,00€</h3>
                    </div>
                    <div>
                        <h3>Order Total</h3>
                        <h3>32,00€</h3>
                        <button>Submit Order</button>
                    </div>
                 </SelectedCoffeesContainer>
            </div>
        </CheckoutWrapper>
    )
}