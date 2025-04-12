import styled from 'styled-components';

export const CheckoutContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 28rem;
    max-width: 80rem;
    margin: 2.5rem auto;
    gap: 2rem;
`

export const CheckoutCompleteOrderContainer = styled.div`
    display: flex;
    flex-direction: column;
`

export const AdressInfoContainer = styled.div`
    background-color: ${props => props.theme.colors['base-card']};
`