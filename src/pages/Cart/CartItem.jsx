import React from "react";
import BuyButton from "../../components/BuyButton";
import { PriceTag } from "../../styles/GlobalStyles";
import { localePriceFormater } from "../../utils/localePriceFormater";
import { Item, Property } from "./styles";

export function CartItem({ product, lineBreak }) {
  const { name, price, quantity } = product;

  return (
    <Item lineBreak={lineBreak}>
      <h2>{name}</h2>
      <Property>
        <PriceTag>{localePriceFormater(price)}</PriceTag>
      </Property>
      <Property>
        <BuyButton productCartNumber={quantity} />
      </Property>
      <Property>
        <PriceTag>{localePriceFormater(quantity * price)}</PriceTag>
      </Property>
    </Item>
  );
}
