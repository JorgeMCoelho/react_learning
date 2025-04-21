import styled from 'styled-components';

export const CheckoutWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 28rem;
    max-width: 80rem;
    margin: 2.5rem auto;
    gap: 2rem;
`

export const CheckoutCompleteOrderContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 1rem;
    gap:0.9375rem;
`
export const CheckoutContainers = styled.div`
    background-color: ${props => props.theme.colors['base-card']};
    padding: 2.5rem;
    border-radius: 6px;

        header {    
            display: flex;
            flex-direction: row;
            gap: 0.5rem;
            margin-bottom: 2rem;
        }
`

export const AdressInfoContainer = styled(CheckoutContainers)`
    svg {
        color: ${props => props.theme.colors['yellow-dark']};
    }

`

export const PaymentInfoContainer = styled(CheckoutContainers)`
    svg {
        color: ${props => props.theme.colors['purple']};
    }      
`

export const AddressForm = styled.form`
    display: grid;
    grid-template-columns: 1fr 3fr 5rem;
    gap: 1rem 0.75rem;
`
export const AdressInput = styled.input`
    padding: 0.75rem;

    background-color: ${props => props.theme.colors['base-input']};
    border: 1px solid ${props => props.theme.colors['base-button']};

    &:focus {
        border: 1px solid ${props => props.theme.colors['yellow-dark']};
        outline: none;
        box-shadow: none;
    }
`

export const AdressInputZipCode = styled(AdressInput)`
    grid-column: 1/2;
    grid-row: 1;
`
export const AdressInputStreet = styled(AdressInput)`
    grid-column: 1/4;
    grid-row: 2;
`

export const AdressInputNumber = styled(AdressInput)`
    grid-column: 1/2;
    grid-row: 3;
`
export const AdressInputAditionalInfo = styled(AdressInput)`
    grid-column: 2/4;
    grid-row: 3;
`

export const AdressInputNeighborhood = styled(AdressInput)`
    grid-column: 1/2;
    grid-row: 4;
`
export const AdressInputCity = styled(AdressInput)`
    grid-column: 2/3;
    grid-row: 4;
`
export const AdressInputState = styled(AdressInput)`
    grid-column: 3/4;
    grid-row: 4;
`
export const Temp = styled.div`
    display: flex;
    gap: 0.75rem;
    width: 100%;
`

export const PaymentMethodForm = styled.form`
    display: flex;
    gap: 0.75rem;
    margin-top: 2rem;
    flex-direction: row;

    input[type="radio"] {  
        display: none;  
    }       
`
export const BasePaymentMethodFormLabel = styled.label`
    display: flex;
    align-items: center;
    justify-content: center;

    width: 100%;
    height: 3.1875rem;
    padding: 1rem auto;
    gap: 0.5rem;        
        
    border: 1px solid transparent;
    border-radius: 6px;
    cursor: pointer;
    transition: 0.2s all;

    &:hover{
        background-color: ${props => props.theme.colors['base-hover']};
    }

    span{
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 0.75rem;
    }
`

export const PaymentMethodFormNonSelected = styled(BasePaymentMethodFormLabel)`
    background-color: ${props => props.theme.colors['base-button']};
`
export const PaymentMethodFormSelected = styled(BasePaymentMethodFormLabel)`
    background-color: ${props => props.theme.colors['purple-light']};
    border: 1px solid ${props => props.theme.colors['purple']};
`

export const SelectedCoffeesContainer = styled.div`
    background-color: ${props => props.theme.colors['base-card']};
    padding: 2.5rem;
    margin-top: 1rem;
    border-radius: 6px 44px 6px 44px;

    display: flex;
    flex-direction: column;
    gap: 0.75rem;    
`

export const SelectedCoffeesTotals = styled.div`
    display: flex;
    justify-content: space-between;
`

export const SubmitOrderButton = styled.button`
    background-color: ${props => props.theme.colors['yellow']};
    color: ${props => props.theme.colors['white']};

    border: none;
    border-radius: 6px;
    padding: 0.75rem 0.5rem;
    cursor: pointer;

    &:hover{
        background-color: ${props => props.theme.colors['yellow-dark']};
    }

`