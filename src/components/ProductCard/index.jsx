import React from "react";
import { Link } from "react-router-dom";
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
  const { url, image, name, price } = productDetails;

  return (
    <CardWrapper>
      <Link to={url}>
        <ImageContainer>
          <img src={image} alt={name} />
        </ImageContainer>
      </Link>
      <TitleWithLink to="/">{name}</TitleWithLink>
      <PriceTag>{price}</PriceTag>
      <Installments>ou 10x de 24,90</Installments>
      <BuyButton />
    </CardWrapper>
  );
};

export const ProductCardDetails = ({ productDetails = {} }) => {
  const { description, image, name, price } = productDetails;

  return (
    <CardWrapper row>
      <ImageContainer row>
        <img src={image} alt={name} />
      </ImageContainer>
      <Description>
        <p>{description}</p>
        <div>
          <PriceTag>{price}</PriceTag>
          <Installments>ou 10x de 24,90</Installments>
        </div>
        <BuyButton />
      </Description>
    </CardWrapper>
  );
};
