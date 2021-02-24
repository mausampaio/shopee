import { useEffect, useState } from "react";
import { ProductCard } from "../../components/ProductCard";
import { fetchProducts } from "../../services/api";
import { ListContent, Loading } from "./styles";
import { Container } from "../../styles/GlobalStyles";

const List = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchProducts().then((response) => {
      setProducts(response);
      setIsLoading(false);
    });
  }, []);

  return isLoading 
    ? (
      <Loading />
    )
    : (
    <Container>
      <h1>Bem-vindo!</h1>
      <ListContent>
        {products.length
          ? products.map((product) => <ProductCard productDetails={product} />)
          : ( <h2>Não existem produtos</h2> )}
      </ListContent>
    </Container>
  );
};

export default List;
