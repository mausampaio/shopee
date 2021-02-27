import styled, { createGlobalStyle } from "styled-components";

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

  h1 {
    font-size:48px;
    font-weight: 500;
    margin: 32px 0 64px;
    /* line-height: 24px; */
  }

  @media screen and (max-width: 375px) {
    h1 {
    font-size:36px;
    font-weight: 500;
    margin: 32px 0 32px;
    text-align: center;
  }
  }

  h2 {
    font-size: 18px;
    line-height:24px;
    font-weight: 500;
    margin-bottom: 16px;
  }
`;

export const Button = styled.button`
  width: 100%;
  min-width: 44px;
  height: 44px;
  background-color: var(--secondary);
  border-radius: 4px;
  color: var(--primary);
  font-size: 18px;
  font-weight: 500;
  cursor: pointer;
`;

export const Container = styled.div`
  width: 80%;
  max-width: 1280px;
  margin: 0 auto;
  @media screen and (max-width: 768px) {
    width: 90%;
  }
`;

export const PriceTag = styled.span`
  font-size: 32px;
  line-height: 24px;
  font-weight: 500;
  margin-bottom: 8px;
  display: block;
`;
