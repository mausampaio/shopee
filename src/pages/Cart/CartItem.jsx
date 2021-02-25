import React from "react";
import BuyButton from "../../components/BuyButton";
import { PriceTag } from "../../styles/GlobalStyles";
import { localePriceFormater } from "../../utils/localePriceFormater";
import { Item } from "./styles";

export function CartItem({ lineBreak }) {
  return (
    <Item lineBreak={lineBreak}>
      <h2>Parafusadeira Automática Bri-tania</h2>
      <div>
        <PriceTag>{localePriceFormater(590.0)}</PriceTag>
      </div>
      <div>
        <BuyButton />
      </div>
      <div>
        <PriceTag>{localePriceFormater(590.0)}</PriceTag>
      </div>
    </Item>
  );
}
