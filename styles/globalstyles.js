import { createGlobalStyle } from "styled-components";
import { Reset } from "./reset";

export const GlobalStyles = createGlobalStyle`

${Reset}

 html, body{
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: black;
    color: white;
    font-size: 1rem;
    margin: 0;
 }
`;
