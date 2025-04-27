import { InfoDetails, ConfirmationDetailsContainer, ConfirmationMessageContainer, IllustrationContainer, SuccessContainer, SuccessWrapper, TextContainer, LocalIcon, TimeIcon, PaymentIcon } from "./styles";
import { Text } from "../../styles/Text";
import deliverIllustration from '../../assets/DeliverIllustration.svg'
import { CurrencyDollar, MapPin, Timer } from "phosphor-react";

export function Success() {
    return (
        <SuccessWrapper>
            <SuccessContainer>
                <ConfirmationMessageContainer>
                    <Text variant="titleL"> YEA! Order is Confirmed</Text>
                    <Text variant="textM">Now just sit back and wait,  your coffee’s on its way! </Text>
                </ConfirmationMessageContainer>
                <ConfirmationDetailsContainer>
                    <InfoDetails>
                        <LocalIcon>
                            <MapPin size={16} weight="fill"/>
                        </LocalIcon>
                        <TextContainer>
                            <Text variant="textM">Deliver at <strong>2607 Clair Street</strong></Text>
                            <Text variant="textM">New Cambria, Kansas</Text>
                        </TextContainer>
                    </InfoDetails>
                    <InfoDetails>
                        <TimeIcon>
                            <Timer size={16} weight="fill"/>
                        </TimeIcon>
                        <TextContainer>
                            <Text variant="textM">Estimated Delivery Time</Text>
                            <Text variant="textM"><strong>20 mins - 30 mins</strong></Text>
                        </TextContainer>
                    </InfoDetails>
                    <InfoDetails>
                        <PaymentIcon>
                            <CurrencyDollar size={16} weight="fill" />
                        </PaymentIcon>
                        <TextContainer>
                            <Text variant="textM">Payment on delivery</Text>
                            <Text variant="textM"><strong>Credit Card</strong></Text>
                        </TextContainer>
                    </InfoDetails>
                </ConfirmationDetailsContainer>
            </SuccessContainer>
            <IllustrationContainer>
                
                <img src={deliverIllustration} alt="Delivery Image" />

            </IllustrationContainer>
        </SuccessWrapper>

    )
}