import styled from 'styled-components'

export const HeaderWrapper = styled.div`
    max-width: 80rem;
    display: flex;
    justify-content: center;
    margin: 2rem auto;
    width: 100%;
`

export const HeaderContainer = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;

    nav{
    display: flex;
    gap: 0.75rem;
    }
`

export const BaseHeaderButton = styled.button`
padding: 0.5rem;
    border: 0px;
    border-radius: 8px;

    display: flex;
    align-items: center;
    justify-content: center;
`

export const LocationButton = styled(BaseHeaderButton)`
    background: ${(props) => props.theme.colors['purple-light']};
    color: ${(props) => props.theme.colors['purple-dark']};     
`

export const ShoppingCartButton = styled(BaseHeaderButton)`
    background: ${(props) => props.theme.colors['yellow-light']};
    color: ${(props) => props.theme.colors['yellow-dark']};
`