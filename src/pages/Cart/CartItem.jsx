import React from "react";
import { Link } from "react-router-dom";
import BuyButton from "../../components/BuyButton";
import { PriceTag } from "../../styles/GlobalStyles";
import { Controls, Item, Property } from "./styles";
import { priceFormatter } from "../../utils/priceFormatter";

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
          <PriceTag>
            {priceFormatter({ price: price, formatCents: true })}
          </PriceTag>
        </Property>
        <Property>
          <BuyButton
            productCartNumber={quantity}
            onIncrement={() => onIncrement(id)}
            onDecrement={() => onDecrement(id)}
          />
        </Property>
        <Property>
          <PriceTag>
            {priceFormatter({ price: quantity * price, formatCents: true })}
          </PriceTag>
        </Property>
      </Controls>
    </Item>
  );
}
