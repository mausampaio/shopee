import React, { useContext, useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { DetailsContent } from "./styles";
import { Container, Button } from "../../styles/GlobalStyles";
import { ProductCardDetails } from "../../components/ProductCard";
import { Store } from "../../context";

function Details(props) {
  const context = useContext(Store);
  console.log(context);
  const { id } = useParams();
  console.log("context.products: ", context.products);

  const [product, setProduct] = useState({});

  useEffect(() => {
    console.log("No useEffect");
    //setProduct(context.getProductById(id));
    //setProduct(props.location.state);
  }, []);

  console.log("product: ", product);

  const history = useHistory();

  const handleGoBack = () => {
    history.goBack();
  };

  return (
    <Container>
      <h1>{product?.name}</h1>
      <DetailsContent>
        <ProductCardDetails product={product && product} />
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
