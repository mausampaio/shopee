import { useContext, useEffect } from "react";
import { ProductCard } from "../../components/ProductCard";
import { ListContent } from "./styles";
import { Container } from "../../styles/GlobalStyles";
import { Store } from "../../context";
import { useQuery } from "../../hooks/useQuery";
import { Loading } from "../../components/Lodaing";

const List = () => {
  const context = useContext(Store);
  const query = useQuery();
  const searchValue = query.get("search");

  useEffect(() => {
    console.log("no useEffetc do List");
    searchValue
      ? context.getSearchedProduct(searchValue)
      : context.getProducts();
  }, [searchValue]);

  return context.loading ? (
    <Loading />
  ) : (
    <Container>
      <h1>Bem-vindo!</h1>
      <ListContent>
        {context.products.length ? (
          context.products.map((product) => (
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
