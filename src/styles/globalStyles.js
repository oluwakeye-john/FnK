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

    html::-webkit-scrollbar-thumb {
        background: ${({ theme }) => theme.primary};
        border-radius: 40px;
        box-shadow: inset 2px 2px 2px hsla(0,0%,100%,.25), inset -2px -2px 2px rgba(0,0,0,.25);
    }

    html::-webkit-scrollbar {
        width: 10px;
    }
`;

export default GlobalStyles;
