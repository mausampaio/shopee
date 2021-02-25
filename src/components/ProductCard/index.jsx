import React from "react";
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

export const ProductCard = ({ productDetails = {} }) => {
  const [quantity, setQuantity] = React.useState(0);
  const { id, image, name, price } = productDetails;
  const state = React.useContext(Store);

  React.useEffect(() => {
    const foundItem = state.cart.find((product) => product.id === id);
    if (foundItem) {
      setQuantity(foundItem.quantity);
    }
  }, [id, state, quantity]);

  return (
    <CardWrapper>
      <Link to={{ pathname: `/products/${id}`, state: productDetails }}>
        <ImageContainer>
          <img src={image} alt={name} />
        </ImageContainer>
      </Link>
      <TitleWithLink
        to={{ pathname: `/products/${id}`, state: productDetails }}
      >
        {truncateString(name, 40)}
      </TitleWithLink>
      <PriceTag>{localePriceFormater(price)}</PriceTag>
      <Installments>{`ou 10x de ${localePriceFormater(
        price / 10
      )}`}</Installments>
      <BuyButton productCartNumber={quantity} />
    </CardWrapper>
  );
};

export const ProductCardDetails = ({ product }) => {
  const [quantity, setQuantity] = React.useState(0);
  const { id, description, image, name, price } = product;
  const state = React.useContext(Store);

  React.useEffect(() => {
    const foundItem = state.cart.find((pd) => pd.id === id);
    if (foundItem) {
      setQuantity(foundItem.quantity);
    }
  }, [id, state, quantity]);

  return (
    <CardWrapper row>
      <ImageContainer row>
        <img src={image} alt={name} />
      </ImageContainer>
      <Description>
        <p>{description}</p>
        <div>
          <PriceTag>{localePriceFormater(price)}</PriceTag>
          <Installments>{`ou 10x de ${localePriceFormater(
            price / 10
          )}`}</Installments>
        </div>
        <BuyButton productCartNumber={quantity} />
      </Description>
    </CardWrapper>
  );
};
