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

    form {
        display: flex;
        gap: 0.75rem;
        margin-top: 2rem;
    } 

    label {

        width: 100%;
        padding: 1rem auto;
        gap: 0.5rem;        

        background-color: ${props => props.theme.colors['base-button']};

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
    }

    input[type="radio"] {  
        display: none;  

    }     
`

export const SelectedCoffeesContainer = styled.div`
    background-color: ${props => props.theme.colors['base-card']};
    padding: 2.5rem;
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