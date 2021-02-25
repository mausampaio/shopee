import React from "react";
import BuyButton from "../../components/BuyButton";
import { PriceTag } from "../../styles/GlobalStyles";
import { localePriceFormater } from "../../utils/localePriceFormater";
import { Item } from "./styles";

export function CartItem({ product, lineBreak }) {
  const { name, price, quantity } = product;

  return (
    <Item lineBreak={lineBreak}>
      <h2>{name}</h2>
      <div>
        <PriceTag>{localePriceFormater(price)}</PriceTag>
      </div>
      <div>
        <BuyButton productCartNumber={quantity} />
      </div>
      <div>
        <PriceTag>{localePriceFormater(quantity * price)}</PriceTag>
      </div>
    </Item>
  );
}
