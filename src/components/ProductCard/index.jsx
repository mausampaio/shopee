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

export const ProductCard = () => {
  return (
    <CardWrapper>
      <Link to="/">
        <ImageContainer>
          <img src="https://via.placeholder.com/226" alt="Placeholder" />
        </ImageContainer>
      </Link>
      <TitleWithLink to="/">Parafusadeira Automática Bri-tania</TitleWithLink>
      <PriceTag>
        259,<span>99</span>
      </PriceTag>
      <Installments>ou 10x de 24,90</Installments>
      <BuyButton />
    </CardWrapper>
  );
};

export const ProductCardDetails = () => {
  return (
    <CardWrapper row>
      <ImageContainer row>
        <img src="https://via.placeholder.com/226" alt="Placeholder" />
      </ImageContainer>
      <Description>
        <p>Lorem Ipsum Dollor Emmet Elem Ipsum Seryun Meskver</p>
        <div>
          <PriceTag>249,00</PriceTag>
          <Installments>ou 10x de 24,90</Installments>
        </div>
        <BuyButton />
      </Description>
    </CardWrapper>
  );
};
