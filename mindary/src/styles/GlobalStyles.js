import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    a{
        text-decoration: none;
        color: inherit;
    }
    html, body, div, span, h1, h2, h3, h4, h5, h6, p, 
    a, dl, dt, dd, ol, ul, li, form, label, table{
        margin: 0;
        padding: 0;
        border: 0;
        vertical-align: baseline;
    }
    body{
        font-family: 'Noto Sans KR', sans-serif;
        background-color: white;
    }
    ol, ul{
        list-style: none;
    }
    button {
        border: 0;
        background: transparent;
    }
`;

export default GlobalStyles;
