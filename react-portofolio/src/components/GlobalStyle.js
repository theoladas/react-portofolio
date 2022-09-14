import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body {
        font-family: 'Inter', sans-serif;
        background: #1b1b1b;
    }
    button {
        font-family: 'Inter', sans-serif;
        font-weight: bold;
        font-size: 1.1rem;
        padding: 1rem 2rem;
        border: 3px solid #23d997;
        background: transparent;
        color: white;
        cursor: pointer;
        transition: all .5s ease;
        &:hover {
            background-color: #23d997;
            color: white;
        }
    }
    h2 {
        font-weight: lighter;
        font-size: 4rem;
    }
    h3 {
        color: white;
    }
    h4 {
        font-weight: bold;
    }
    p {
        font-size: 1.4rem;
        line-height: 150%;
        padding: 3rem 0rem;
        color: #ccc;
    }
    span {
        font-weight: bold;
        color: #23d997;
    }
    a {
        font-size: 1.1rem;
    }
`;

export default GlobalStyle;
