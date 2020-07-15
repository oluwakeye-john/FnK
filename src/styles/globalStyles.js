import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    body{
        background-color: ${({ theme }) => theme.bg};
        margin: 0;
        padding: 0;
        font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";
        font-size: 16px;
        overflow-x: hidden;
        line-height: 1.3;
    }
    *, *::before, *::after{
        box-sizing: border-box;
    }

    body::-webkit-scrollbar {
        width: 0.25rem;
    }

    body::-webkit-scrollbar-track {
        background: #1e1e24;
    }

    body::-webkit-scrollbar-thumb {
        background: #6649b8;
    }
`;

export default GlobalStyles;
