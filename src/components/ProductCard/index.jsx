import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { truncateString } from "../../utils/truncateString";
import { localePriceFormater } from "../../utils/localePriceFormater";
import BuyButton from "../BuyButton";
import {
  CardWrapper,
  Description,
  ImageContainer,
  Installments,
  PriceTag,
  TitleWithLink,
} from "./styles";
import { Store } from "../../context";
import { priceFormatter } from "../../utils/priceFormatter";

export const ProductCard = ({ productDetails = {} }) => {
  const [quantity, setQuantity] = useState(0);
  const { id, image, name, price } = productDetails;
  const context = useContext(Store);

  useEffect(() => {
    const foundItem = context.cart.find((product) => product.id === id);
    if (foundItem) {
      setQuantity(foundItem.quantity);
    } else {
      setQuantity(0);
    }
  }, [id, context, quantity]);

  return (
    <CardWrapper>
      <Link
        to={{ pathname: `/products/${id}`, state: productDetails }}
        onClick={() => context.setSearchValue("")}
      >
        <ImageContainer>
          <img src={image} alt={name} />
        </ImageContainer>
      </Link>
      <TitleWithLink
        to={{ pathname: `/products/${id}`, state: productDetails }}
        onClick={() => context.setSearchValue("")}
      >
        {truncateString(name, 40)}
      </TitleWithLink>
      <PriceTag>{priceFormatter({ price: price, formatCents: true })}</PriceTag>
      <Installments>{`ou 10x de ${localePriceFormater(
        price / 10
      )}`}</Installments>
      <BuyButton
        productCartNumber={quantity}
        onIncrement={() => context.addProduct(id)}
        onDecrement={() => context.removeProduct(id)}
      />
    </CardWrapper>
  );
};

export const ProductCardDetails = ({ product }) => {
  const [quantity, setQuantity] = React.useState(0);
  const { id, description, image, name, price } = product;
  const context = React.useContext(Store);

  React.useEffect(() => {
    const foundItem = context.cart.find((pd) => pd.id === id);
    if (foundItem) {
      setQuantity(foundItem.quantity);
    } else {
      setQuantity(0);
    }
  }, [id, context, quantity]);

  return (
    <CardWrapper row>
      <ImageContainer row>
        <img src={image} alt={name} />
      </ImageContainer>
      <Description>
        <p>{description}</p>
        <div style={{ width: "100%" }}>
          <PriceTag>
            {priceFormatter({ price: price, formatCents: true })}
          </PriceTag>
          <Installments>{`ou 10x de ${localePriceFormater(
            price / 10
          )}`}</Installments>
        </div>
        <BuyButton
          productCartNumber={quantity}
          onIncrement={() => context.addProduct(id)}
          onDecrement={() => context.removeProduct(id)}
        />
      </Description>
    </CardWrapper>
  );
};
