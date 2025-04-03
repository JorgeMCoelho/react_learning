import styled from "styled-components";
import backgroundHeroSection from '../../assets/BackgroundHeroSection.svg';

export const HomeContainer = styled.main`
    height: 100%;
    flex: 1;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    background: url(${backgroundHeroSection}) no-repeat center center;
    background-size: cover;

    table{
        margin-top: 4.125rem;
    }
    `
    
export const IntroContainer= styled.div`
    display: flex;
    gap: 3.75rem;
    padding-top: 5.75rem;
    max-width: 80rem;

  }
`

export const IntroContainerText = styled.div`
    display: flex;
    gap: 1rem;

    flex-direction: column;
`

export const ReasonsRow = styled.tr`
    display: flex;
    flex-direction: row;
    margin-bottom: 1.25rem;
`

export const ReasonsCell = styled.td`
    display: flex;
    align-items: center;
    height: 2rem;
    width: 19rem;
    gap: 8px;
    justify-content: left;

     svg {
        color: ${(props) => props.theme.colors['white']};
        border-radius: 1000px;
        padding: 8px;
     }
`

export const ReasonOne = styled(ReasonsCell)`
    svg {
        background-color: ${props => props.theme.colors['yellow-dark']};
    }
    `
export const ReasonTwo = styled(ReasonsCell)`
    svg {
        background-color: ${props => props.theme.colors['base-text']};
    }
`

export const ReasonThree = styled(ReasonsCell)`
    svg {
        background-color: ${props => props.theme.colors['yellow']};
    }
`
export const ReasonFour = styled(ReasonsCell)`
    svg {
        background-color: ${props => props.theme.colors['purple']};
    }
`
