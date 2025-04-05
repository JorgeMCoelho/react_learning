import styled from "styled-components"

export const CoffeeCardWrapper = styled.div`
    width: 19.375rem;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    background-color: ${props => props.theme.colors['base-card']};

    border-radius: 6px 36px 6px 36px;
    img {
        margin-top: -20px;
    }
`

export const CoffeeCategory = styled.div`
    margin: 0.75rem 0 1rem 0;
    padding: 0.25rem 0.5rem;
    border-radius: 100px;

    color: ${props => props.theme.colors['yellow-dark']};
    background-color: ${props => props.theme.colors['yellow-light']};

`

export const CoffeeDescription = styled.div`
    margin: 0.5rem 1.25rem 2rem 1.25rem;
`

export const CoffeeBuyContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

`

export const CoffeeActions = styled.div`
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: row;   
        gap: 0.5rem;

    svg {
        color: ${props => props.theme.colors['purple']};
    }

    button {
        background-color: ${props => props.theme.colors['purple-dark']};
        padding: 0.5rem;

        height: 2.375rem;
        width: 2.375rem;
        border-radius: 6px;

        display: flex;
        align-items: center;
        justify-content: center;

        svg{
            color: ${props => props.theme.colors['base-card']};
        }
    }
`
export const CoffeActionsPlusAndMinus = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    padding: 0.5rem;
    background-color: ${props => props.theme.colors['base-button']};
    gap: 0.25rem;

    border-radius: 6px;
    
` 