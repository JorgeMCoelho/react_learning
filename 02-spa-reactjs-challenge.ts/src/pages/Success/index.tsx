import { AddressDetails, ConfirmationDetailsContainer, ConfirmationMessageContainer, DeliveryDetails, IllustrationContainer, PaymentDetails, SuccessContainer, SuccessWrapper } from "./styles";
import { Text } from "../../styles/Text";
import deliverIllustration from '../../assets/DeliverIllustration.svg'

export function Success() {
    return (
        <SuccessWrapper>
            <SuccessContainer>
                <ConfirmationMessageContainer>
                    <Text variant="titleL"> YEA! Order is Confirmed</Text>
                    <Text variant="textM">Now just sit back and wait,  your coffee’s on its way! </Text>
                </ConfirmationMessageContainer>
                <ConfirmationDetailsContainer>
                    <AddressDetails>
                        Hello 1
                        hello 2
                    </AddressDetails>
                    <DeliveryDetails>
                        Hello 3
                        hello 4
                    </DeliveryDetails>
                    <PaymentDetails>
                        Hello 5
                        hello 6
                    </PaymentDetails>
                </ConfirmationDetailsContainer>
            </SuccessContainer>
            <IllustrationContainer>
                
                <img src={deliverIllustration} alt="Delivery Image" />

            </IllustrationContainer>
        </SuccessWrapper>

    )
}