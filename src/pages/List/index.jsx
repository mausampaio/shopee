import { useContext, useEffect } from "react";
import { ProductCard } from "../../components/ProductCard";
import { ListContent } from "./styles";
import { Container } from "../../styles/GlobalStyles";
import { Store } from "../../context";
import { useQuery } from "../../hooks/useQuery";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import { Loading } from "../../components/Lodaing";
import SearchForm from "../../components/SearchForm";

const List = () => {
  const context = useContext(Store);
  const query = useQuery();
  const { width } = useWindowDimensions();
  const searchValue = query.get("search")?.trim();

  useEffect(() => {
    searchValue
      ? context.getSearchedProduct(searchValue)
      : context.getProducts();
  }, [searchValue]);

  return context.loading ? (
    <Loading />
  ) : (
    <Container>
      {searchValue ? (
        <h1>Resultados para "{searchValue}"</h1>
      ) : (
        <h1>Bem-vindo!</h1>
      )}
      {width <= 375 ? <SearchForm /> : null}
      <ListContent>
        {context.products.length ? (
          context.products.map((product) => (
            <ProductCard productDetails={product} />
          ))
        ) : (
          <h2>Nenhum resultado encontrado para esta busca</h2>
        )}
      </ListContent>
    </Container>
  );
};

export default List;
