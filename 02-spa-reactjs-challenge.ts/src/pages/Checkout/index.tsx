import { AdressInfoContainer, CheckoutCompleteOrderContainer, CheckoutContainer } from "./styles";


export function Checkout(){
    return(
        <CheckoutContainer>
            <CheckoutCompleteOrderContainer>
                <h1>Complete your Order</h1>
                <AdressInfoContainer>
                    <h1>Delivery Address</h1>
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
                    <div>
                        <h1>Payment</h1>
                        <h3>Payment is made upon delivery. Choose the payment method you prefer</h3>
                        <form action="">
                            <label>
                                <input type="radio" name="paymentMethod" value="credit" />
                                <span>Credit Card</span>
                            </label>
                            <label>
                                <input type="radio" name="paymentMethod" value="debit" />
                                <span>Debit Card</span>
                            </label>
                            <label>
                                <input type="radio" name="paymentMethod" value="money" />
                                <span>Money</span>
                            </label>
                        </form>
                    </div>
                </AdressInfoContainer>
            </CheckoutCompleteOrderContainer>
            <div>
                 <h1>Selected Coffees</h1>
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
            </div>
        </CheckoutContainer>
    )
}