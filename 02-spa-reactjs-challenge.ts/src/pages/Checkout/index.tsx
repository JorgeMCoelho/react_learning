export function Checkout(){
    return(
        <div>
            
            <div>
                <h1>Complete your Order</h1>
                <div>
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
                </div>
            </div>
            <div>
                 <h1>Selected Coffees</h1>
            </div>
        </div>

    )
}