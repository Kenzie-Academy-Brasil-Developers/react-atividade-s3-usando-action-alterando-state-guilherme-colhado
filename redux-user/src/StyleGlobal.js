import styled, { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    body, div, input, button, p{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
`

export const StyledComponent = styled.div`
    display: flex;
    background-color: #eef6fb;
    min-height: 100vh;
    align-items: center;
    justify-content: center;
`