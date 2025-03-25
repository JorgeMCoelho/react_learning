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