import { InfoDetails, ConfirmationDetailsContainer, ConfirmationMessageContainer, IllustrationContainer, SuccessContainer, SuccessWrapper, TextContainer, LocalIcon, TimeIcon, PaymentIcon } from "./styles";
import { Text } from "../../components/Text";
import { Title } from "../../components/Title";
import deliverIllustration from '../../assets/DeliverIllustration.svg'
import { CurrencyDollar, MapPin, Timer } from "phosphor-react";

export function Success() {
    return (
        <SuccessWrapper>
            <SuccessContainer>
                <ConfirmationMessageContainer>
                    <Title variant="lExtraBold">YEA! Order is Confirmed</Title>
                    <Text variant="lRegular">Now just sit back and wait,  your coffee’s on its way!</Text>
                </ConfirmationMessageContainer>
                <ConfirmationDetailsContainer>
                    <InfoDetails>
                        <LocalIcon>
                            <MapPin size={16} weight="fill"/>
                        </LocalIcon>
                        <TextContainer>
                            <Text variant="mRegular">Deliver at <strong>2607 Clair Street</strong></Text>
                            <Text variant="mRegular">New Cambria, Kansas</Text>
                        </TextContainer>
                    </InfoDetails>
                    <InfoDetails>
                        <TimeIcon>
                            <Timer size={16} weight="fill"/>
                        </TimeIcon>
                        <TextContainer>
                            <Text variant="mRegular">Estimated Delivery Time</Text>
                            <Text variant="mRegular"><strong>20 mins - 30 mins</strong></Text>
                        </TextContainer>
                    </InfoDetails>
                    <InfoDetails>
                        <PaymentIcon>
                            <CurrencyDollar size={16} weight="fill" />
                        </PaymentIcon>
                        <TextContainer>
                            <Text variant="mRegular">Payment on delivery</Text>
                            <Text variant="mRegular"><strong>Credit Card</strong></Text>
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