import styled from "styled-components";
import backgroundHeroSection from '../../assets/BackgroundHeroSection.svg';

export const HomeContainer = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: 9.8125rem;
    `
export const IntroContainerBackground = styled.div`

    background: url(${backgroundHeroSection}) no-repeat center center;
    background-size: cover;
    width: 100%;
    height: 35rem;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
`   
    
export const IntroContainer= styled.div`
    display: flex;
    gap: 3.75rem;
    max-width: 80rem;
    align-items: center;

    table{
        margin-top: 4.125rem;
    }
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
    width: 100%;
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

export const CoffeeCardContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);

    max-width: 80rem;
    gap: 2rem;
`
