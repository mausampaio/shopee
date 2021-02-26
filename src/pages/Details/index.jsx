import React, { useContext, useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { DetailsContent } from "./styles";
import { Container, Button } from "../../styles/GlobalStyles";
import { ProductCardDetails } from "../../components/ProductCard";
import { Store } from "../../context";
import { Loading } from "../../components/Lodaing";

function Details(props) {
  const context = useContext(Store);
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    console.log("Saporra funciona?", context.products);
    if (context.products.length !== 0) {
      const selectedProd = context.products.find((prod) => prod.id === +id);
      setProduct(selectedProd);
      console.log("Saporra funciona?", selectedProd);
    }
  }, [context.products, id]);

  const history = useHistory();

  const handleGoBack = () => {
    history.goBack();
  };

  return (
    <Container>
      {context.loading ? (
        <Loading />
      ) : (
        <>
          <h1>{product?.name || "Carregando"}</h1>
          <DetailsContent>
            {product && <ProductCardDetails product={product} />}
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
        </>
      )}
    </Container>
  );
}

export default Details;
