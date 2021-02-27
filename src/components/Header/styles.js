import styled, { css } from "styled-components";
import { MdShoppingCart } from "react-icons/md";
import { Link } from "react-router-dom";

export const Container = styled.div`
  display: flex;
  align-items: center;
  padding: 0 5%;
  justify-content: space-between;
  background: var(--primary);
  height: 70px;
  width: 100%;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.14);

  @media screen and (max-width: 375px) {
    position: sticky;
    top: 0;
  }
`;

export const ShopeeLink = styled(Link)`
  cursor: pointer;
  outline: 0;
`;
export const iconCss = css`
  width: 27px;
  height: 27px;
  fill: var(--secondary);
  flex-shrink: 0;
`;

export const CartButton = styled.button`
  height: 52px;
  width: 52px;
  border-radius: 50px;
  background: var(--cart-shadow);
  align-items: center;
  cursor: pointer;
  outline: 0;
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
