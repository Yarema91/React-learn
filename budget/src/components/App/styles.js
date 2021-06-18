import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

     padding: 0px;
     margin: 0px
     `;


export const Wrapper = styled.div`
     padding: 5px;
     background: ${props => props.theme.background}
     `;



     // ${props => props.theme.background}