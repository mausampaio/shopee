import React from "react";
import { useHistory } from "react-router-dom";
import { DetailsContent } from "./styles";
import { Container, Button } from "../../styles/GlobalStyles";
import { ProductCardDetails } from "../../components/ProductCard";

function Details(props) {
  const product = props.location.state;

  const history = useHistory();

  const handleGoBack = () => {
    history.goBack();
  };

  return (
    <Container>
      <h1>{product.name}</h1>
      <DetailsContent>
        <ProductCardDetails product={product} />
      </DetailsContent>
      <div
        style={{
          paddingTop: "32px",
          width: "100%",
          display: "flex",
          flexDirection: "row-reverse",
        }}
      >
        <div style={{ width: "226px" }}>
          <Button onClick={handleGoBack}>Voltar</Button>
        </div>
      </div>
    </Container>
  );
}

export default Details;
