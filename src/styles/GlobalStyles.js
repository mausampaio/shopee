import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html{
    min-height: 100%;
    background-color: var(--background);
  }
  *, button, input {
    border: 0;
    background: none;
    font-family: "Roboto", sans-serif;
    color: var(--text);
  }
  ul{
    list-style: none;
  }
  :root {
    --primary: #FFFFFF;
    --secondary: #8000FF;
    --search: #F4F4F4;
    --cart-shadow: #ebd7ff;
    --emphasis: #FF0000;
    --text: #000000;
    --background: #F7F7F7;
  }
`;
