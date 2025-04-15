import styled from "styled-components";

export const CoffeeCardCartWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    
    img {
        width: 4rem;
        margin: 0.5rem 0rem 0.5rem 0.25rem;
        }
`
export const CoffeeCardCartContainer = styled.div`
    display: flex;
    gap: 1.25rem;
    align-items: center;
`

export const CoffeeCardCartActions = styled.div`
    display: flex;

    button{
        background-color: ${props => props.theme.colors['base-button']};
        
        padding: 0.5rem;
        border-radius: 6px;
        border: 3px solid transparent;
        gap: 1.5px;

        display: flex;
        align-items: center;
        justify-content: center;

        svg{
            color: ${props => props.theme.colors['purple']};
        }
            
        &:hover {
            background-color: ${props => props.theme.colors['base-hover']};
                svg{
                    color: ${props => props.theme.colors['purple-dark']};
                }
        }
    }
`
