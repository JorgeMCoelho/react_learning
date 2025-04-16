import styled from "styled-components"

export const CoffeActionsPlusAndMinus = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 4.5rem;

    padding: 0.5rem;
    background-color: ${props => props.theme.colors['base-button']};
    gap: 0.25rem;

    border-radius: 6px;

        svg {
            color: ${props => props.theme.colors['purple']};

                &:hover {
                    color: ${(props) => props.theme.colors['purple-dark']};
                }
        }
` 