import styled from "styled-components";

export const HomeContainer = styled.main`
    height: 100%;
    flex: 1;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    form{
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 3.5rem;
    }
    `

export const IntroContainer = styled.div`
    display: flex;
    gap: 3.75rem;

    margin-top: 5.75rem;
`

export const IntroContainerText = styled.div`
    display: flex;
    gap: 1rem;

    flex-direction: column;
`

export const Reasons = styled.td`
    display: flex;
    align-items: center;
    height: 2rem;
    gap: 8px;

     svg {
        color: ${(props) => props.theme.colors['white']};
        border-radius: 1000px;
        padding: 8px;
     }


`

export const ReasonOne = styled(Reasons)`
    svg {
        background-color: ${props => props.theme.colors['yellow-dark']};
    }
    `
export const ReasonTwo = styled(Reasons)`
    svg {
        background-color: ${props => props.theme.colors['base-text']};
    }
`

export const ReasonThree = styled(Reasons)`
    svg {
        background-color: ${props => props.theme.colors['yellow']};
    }
`
export const ReasonFour = styled(Reasons)`
    svg {
        background-color: ${props => props.theme.colors['purple']};
    }
`
