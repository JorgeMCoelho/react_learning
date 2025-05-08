import { useState } from "react";
import { Text } from "../../components/Text";
import { Title } from "../../components/Title";
import { CoffeeCardCart } from "./components/CoffeeCardCart";
import { AddressForm, AdressInfoContainer, AdressInputAditionalInfo, AdressInputCity, AdressInputNeighborhood, AdressInputNumber, AdressInputState, AdressInputStreet, AdressInputZipCode, CheckoutCompleteOrderContainer, CheckoutWrapper, PaymentInfoContainer, PaymentMethodDiv, PaymentMethodNonSelectedButton, PaymentMethodSelectedButton, SelectedCoffeesContainer, SelectedCoffeesTotals, SubmitOrderButton } from "./styles";

import { Bank, CreditCard, CurrencyEur, MapPinLine, Money } from "phosphor-react"


export function Checkout(){

    const [paymentMethods, setPaymentMethods] = useState([
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
            isSelected: false,
        }
    ])

    function handleSelectPayment(paymentName: string){
        setPaymentMethods( prevState =>
            prevState.map(method => ({
                ...method,
                isSelected: method.name === paymentName,
            }))
        );
    }

    return(
        <CheckoutWrapper>
            <div>
                <Title variant="xsBold">Complete your Order</Title>
                <CheckoutCompleteOrderContainer>

                    <AdressInfoContainer>
                        <header>
                            <div>
                                <MapPinLine size={22} />
                            </div>
                            <div>
                                <Text variant="mRegular"> Delivery Address</Text>
                                <Text variant="sRegular">Enter the address where you want to receive your order</Text>
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
                                <Text variant="mRegular">Payment</Text>
                                <Text variant="sRegular">Payment is made upon delivery. Choose the payment method you prefer</Text>
                            </div>
                        </header>
                        
                       <PaymentMethodDiv>
                            {paymentMethods.map(method => (
                                method.isSelected 
                                    ? (
                                        <PaymentMethodSelectedButton key = {method.name}>
                                                <span>{method.icon} {method.name}</span>
                                        </PaymentMethodSelectedButton>
                                    ) : (
                                        <PaymentMethodNonSelectedButton key = {method.name} onClick= {() => handleSelectPayment(method.name)}>
                                                <span>{method.icon} {method.name}</span>
                                        </PaymentMethodNonSelectedButton>
                                    )
                            ))}
                        </PaymentMethodDiv>
                        
  
                    </PaymentInfoContainer>
                </CheckoutCompleteOrderContainer>
            </div>
            <div>
                 <Title variant="xsBold">Selected Coffees</Title>
                 <SelectedCoffeesContainer>
                    <CoffeeCardCart />
                    <CoffeeCardCart />
                    <SelectedCoffeesTotals>
                        <Text variant="sRegular">Subtotal</Text>
                        <Text variant="mRegular">29,00€</Text>
                    </SelectedCoffeesTotals>
                    <SelectedCoffeesTotals>
                        <Text variant="sRegular">Delivery fee</Text>
                        <Text variant="mRegular">3,00€</Text>
                    </SelectedCoffeesTotals>
                    <SelectedCoffeesTotals>
                        <Text variant="lBold">Order Total</Text>
                        <Text variant="lBold">32,00€</Text>
                    </SelectedCoffeesTotals>
                    <SubmitOrderButton>Submit Order</SubmitOrderButton> 
                 </SelectedCoffeesContainer>
            </div>
        </CheckoutWrapper>
    )
}