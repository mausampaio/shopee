import { useEffect, useState } from "react";
import { ProductCard, ProductCardDetails } from "../../components/ProductCard";
import { fetchProducts } from "../../services/api";
import { ListContainer, ListContent } from "./styles";

const List = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts().then((response) => setProducts(response));
  }, []);

  return (
    <ListContainer>
      <h1>Bem-vindo!</h1>
      <ListContent>
        {products.length
          ? products.map((product) => <ProductCard productDetails={product} />)
          : "Não existem produtos"}
      </ListContent>
    </ListContainer>
  );
};

export default List;
