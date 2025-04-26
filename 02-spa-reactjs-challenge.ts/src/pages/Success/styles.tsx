import styled from 'styled-components';

export const SuccessWrapper = styled.div`
    display: grid;
    grid-template-columns: 32.875rem 1fr;
    gap: 6.375rem;
    margin: 5.25rem auto;
    max-width: 80rem;
`

export const SuccessContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2.5rem;
`


export const ConfirmationMessageContainer = styled.div`
   //Need to change typography component to use the correct colors
   
`
export const ConfirmationDetailsContainer = styled.div`
    padding: 2.5rem;
    border-radius: 6px 36px 6px 36px;
    position: relative;
    background-color: ${props => props.theme.colors['background']};


    div::after{
        content: '';
        box-sizing: content-box;
        padding: 2px;
        position: absolute;
        top: -2px;
        right: -1px;
        bottom: -1px;
        left: -2px;
        height: 100%;
        width: 100%;
        border-radius: 6px 36px 6px 36px;
        background-image: linear-gradient(
            to bottom right, 
            ${props => props.theme.colors['yellow']}, 
            ${props => props.theme.colors['purple']}
        );
        z-index: -1;
    }
`


export const AddressDetails = styled.div`

`

export const DeliveryDetails = styled.div`

`

export const PaymentDetails = styled.div`

`

export const IllustrationContainer = styled.div`
   
`