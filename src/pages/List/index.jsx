import { useContext } from "react";
import { ProductCard } from "../../components/ProductCard";
import { ListContent, Loading } from "./styles";
import { Container } from "../../styles/GlobalStyles";
import { Store } from "../../context";

const List = () => {
  const state = useContext(Store);

  return state.loading ? (
    <Loading />
  ) : (
    <Container>
      <h1>Bem-vindo!</h1>
      <ListContent>
        {state.products.length ? (
          state.products.map((product) => (
            <ProductCard productDetails={product} />
          ))
        ) : (
          <h2>Não existem produtos</h2>
        )}
      </ListContent>
    </Container>
  );
};

export default List;
