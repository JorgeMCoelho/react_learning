import styled from 'styled-components'

export const HeaderContainer = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;

    nav{
    display: flex;
    gap: 0.75rem;
    }
`

/* Refactor repetitive css*/

export const LocationButton = styled.button`
    background: ${(props) => props.theme['purple-light']};
    color: ${(props) => props.theme['purple-dark']};
    
    padding: 0.5rem;
    border: 0px;
    border-radius: 8px;

    display: flex;
    align-items: center;
    justify-content: center;
    
`

export const ShoppingCartButton = styled.button`
    background: ${(props) => props.theme['yellow-light']};
    color: ${(props) => props.theme['yellow-dark']};
    
    padding: 0.5rem;
    border: 0px;
    border-radius: 8px;

    display: flex;
    align-items: center;
    justify-content: center;
`