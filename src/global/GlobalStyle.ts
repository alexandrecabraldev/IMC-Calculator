import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

    *{
        margin:0;
        padding: 0;
        box-sizing: border-box;
    }

    body{
        background-color: ${props=>props.theme.background};

        min-height: 100vh;

        display: flex;
        justify-content: center;
        align-items: center;
    }

    h1{
        color: ${props=>props.theme.title};
    }

    input{
        background-color: ${props=>props.theme.inputBackground};
    }

    label{
        color: ${props=>props.theme.label};
    }

    button{
        background-color: ${props=>props.theme.buttonBackground};
    }
`;