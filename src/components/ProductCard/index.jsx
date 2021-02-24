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

export const ProductCard = ({ productDetails = {} }) => {
  const { id, image, name, price } = productDetails;

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
      <BuyButton />
    </CardWrapper>
  );
};

export const ProductCardDetails = ({ product }) => {
  const { image, name, description, price } = product;
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
        <BuyButton />
      </Description>
    </CardWrapper>
  );
};
