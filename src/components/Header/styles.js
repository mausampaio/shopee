import styled, { css } from "styled-components";
import { MdSearch, MdShoppingCart } from "react-icons/md";
import { Link } from "react-router-dom";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  background: var(--primary);
  height: 70px;
  width: 100%;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.14);
`;

export const ShopeeLink = styled(Link)`
  padding-left: 4.5%;
  cursor: pointer;
  outline: 0;
`;

export const SearchForm = styled.form`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 44px;
  width: 29.5%;
  background: var(--search);
  left: 35.28%;
  right: 35.28%;
  top: 1.37%;
  bottom: 94.34%;
  border-radius: 54px;
  margin-left: 17.5%;

  input {
    font-family: "Roboto", sans-serif;
    font-size: 18px;
    font-weight: 400;
    color: #3a3a3a;
    padding-left: 7.55%;
    height: 100%;
    width: 100%;
    outline: 0;
  }
  input:-ms-input-placeholder {
    font-family: "Roboto", sans-serif;
    color: #9e9e9e;
    font-size: 18px;
    font-weight: 400;
    align-self: center;
  }

  input::-webkit-input-placeholder {
    font-family: "Roboto", sans-serif;
    color: #9e9e9e;
    font-size: 18px;
    font-weight: 400;
    align-self: center;
  }

  input:-moz-placeholder {
    font-family: "Roboto", sans-serif;
    color: #9e9e9e;
    font-size: 18px;
    font-weight: 400;
    align-self: center;
  }
`;

export const iconCss = css`
  width: 27px;
  height: 27px;
  fill: var(--secondary);
  flex-shrink: 0;
`;

export const SearchButton = styled.button`
  align-items: center;
  text-align: center;
  height: 52px;
  width: 52px;
  cursor: pointer;
  outline: 0;
  padding-right: 7.55%;
`;

export const SearchIcon = styled(MdSearch)`
  ${iconCss}
`;

export const CartButton = styled.button`
  height: 52px;
  width: 52px;
  border-radius: 50px;
  background: var(--cart-shadow);
  align-items: center;
  cursor: pointer;
  outline: 0;
  margin-left: 27.2%;
  display: flex;
  flex-direction: row;
  position: relative;
`;

export const ShoppingCart = styled(MdShoppingCart)`
  ${iconCss}
  position: absolute;
  margin-left: 23%;
`;

export const ItemsNumber = styled.div`
  display: flex;
  flex-direction: row;
  height: 20px;
  width: 20px;
  margin-bottom: 57.14%;
  margin-right: 4.44%;
  background: var(--emphasis);
  border-radius: 50px;
  align-items: center;
  text-align: center;
  color: var(--primary);
  position: absolute;
  margin-left: 61.53%;
  margin-top: 14.28%;

  span {
    color: var(--primary);
    font-size: 14px;
    width: 100%;
    font-weight: 700;
    align-items: center;
    text-align: center;
  }
`;
