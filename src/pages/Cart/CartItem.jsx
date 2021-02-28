import React from "react";
import { Link } from "react-router-dom";
import BuyButton from "../../components/BuyButton";
import { PriceTag } from "../../styles/GlobalStyles";
import { localePriceFormater } from "../../utils/localePriceFormater";
import { Controls, Item, Property } from "./styles";

export function CartItem({ product, lineBreak, onIncrement, onDecrement }) {
  const { id, name, price, quantity } = product;

  return (
    <Item lineBreak={lineBreak}>
      <h2>
        <Link to={`/products/${id}`} style={{ textDecoration: "none" }}>
          {name}
        </Link>
      </h2>
      <Controls>
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
      </Controls>
    </Item>
  );
}
