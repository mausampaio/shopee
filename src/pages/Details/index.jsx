import React, { useContext, useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { ButtonWrapper, ButtonContainer } from "./styles";
import { Container } from "../../components/Container";
import { ProductCardDetails } from "../../components/ProductCard";
import { Store } from "../../context";
import { Loading } from "../../components/Loading";
import SearchForm from "../../components/SearchForm";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import { Button } from "../../components/Button";

function Details(props) {
  const context = useContext(Store);
  const { id } = useParams();
  const { width } = useWindowDimensions();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    if (context.products.length !== 0) {
      const selectedProd = context.products.find((prod) => prod.id === +id);
      setProduct(selectedProd);
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
          <h1>{product?.name || "Produto não encontrado!"}</h1>
          {width <= 575 ? <SearchForm /> : null}
          <div>{product && <ProductCardDetails product={product} />}</div>
          <ButtonWrapper>
            <ButtonContainer>
              <Button onClick={handleGoBack}>Voltar</Button>
            </ButtonContainer>
          </ButtonWrapper>
        </>
      )}
    </Container>
  );
}

export default Details;
