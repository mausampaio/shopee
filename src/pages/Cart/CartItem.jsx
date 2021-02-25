import React from "react";
import BuyButton from "../../components/BuyButton";
import { PriceTag } from "../../styles/GlobalStyles";
import { localePriceFormater } from "../../utils/localePriceFormater";
import { Item, Property } from "./styles";

export function CartItem({ product, lineBreak, onIncrement, onDecrement }) {
  const { id, name, price, quantity  } = product;

  return (
    <Item lineBreak={lineBreak}>
      <h2>{name}</h2>
      <Property>
        <PriceTag>{localePriceFormater(price)}</PriceTag>
      </Property>
      <Property>
        <BuyButton 
          productCartNumber={quantity}
          onIncrement={() => onIncrement(id)}
          onDecrement={() => onDecrement(id)}
        />
      </Property>
      <Property>
        <PriceTag>{localePriceFormater(quantity * price)}</PriceTag>
      </Property>
    </Item>
  );
}
