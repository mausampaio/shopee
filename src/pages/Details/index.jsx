import React from "react";

import { DetailsContent } from "./styles";
import { Container } from "../../styles/GlobalStyles";
import { ProductCardDetails } from "../../components/ProductCard";

function Details(props) {
  const product = props.location.state;
  return (
    <>
      <Container>
        <h1>{product.name}</h1>
        <DetailsContent>
          <ProductCardDetails product={product} />
        </DetailsContent>
      </Container>
    </>
  );
}

export default Details;
