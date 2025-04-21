import { Text } from "../../styles/Text";
import { CoffeeCardCart } from "./components/CoffeeCardCart";
import { AddressForm, AdressInfoContainer, AdressInputAditionalInfo, AdressInputCity, AdressInputNeighborhood, AdressInputNumber, AdressInputState, AdressInputStreet, AdressInputZipCode, CheckoutCompleteOrderContainer, CheckoutWrapper, PaymentInfoContainer, PaymentMethodForm, PaymentMethodFormNonSelected, PaymentMethodFormSelected, SelectedCoffeesContainer, SelectedCoffeesTotals, SubmitOrderButton, Temp } from "./styles";

import { Bank, CreditCard, CurrencyEur, MapPinLine, Money } from "phosphor-react"


export function Checkout(){

    interface PaymentMethod {
        name: string;
        icon: React.ReactNode;
        isSelected: boolean;
    }

    const paymentMethods: PaymentMethod[] = [
        {
            name: 'Credit Card',
            icon: <CreditCard size={16} />,
            isSelected: false,
        },
        {
            name: 'Debit Card',
            icon: <Bank size={16} />,
            isSelected: false,
        },
        {
            name: 'Money',
            icon: <Money size={16} />,
            isSelected: true,
        }
    ]

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

                        <AddressForm>
                                <AdressInputZipCode type="text" placeholder="Zip Code" />
                                <AdressInputStreet type="text" placeholder="Street" />
                                <AdressInputNumber type="text" placeholder="Number" />
                                <AdressInputAditionalInfo type="text" placeholder="Aditional Info" />
                                <AdressInputNeighborhood type="text" placeholder="Neighborhood" />
                                <AdressInputCity type="text" placeholder="City" />
                                <AdressInputState type="text" placeholder="State" />
                        </AddressForm>
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
                        
                       <PaymentMethodForm>
                            {paymentMethods.map(method => (
                                method.isSelected 
                                    ? (
                                        <PaymentMethodFormSelected key={method.name}>
                                                <input type="radio" name="paymentMethod" value={method.name} />
                                                <span>{method.icon} {method.name}</span>
                                        </PaymentMethodFormSelected>
                                    ) : (
                                        <PaymentMethodFormNonSelected key={method.name}>
                                            <label>
                                                <input type="radio" name="paymentMethod" value={method.name} />
                                                <span>{method.icon} {method.name}</span>
                                            </label>
                                        </PaymentMethodFormNonSelected>
                                    )
                            ))}
                            </PaymentMethodForm>
                        
  
                    </PaymentInfoContainer>
                </CheckoutCompleteOrderContainer>
            </div>
            <div>
                 <Text variant="titleXs">Selected Coffees</Text>
                 <SelectedCoffeesContainer>
                    <CoffeeCardCart />
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