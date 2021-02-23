import { ProductCard, ProductCardDetails } from "../../components/ProductCard";
import { ListContainer, ListContent } from "./styles";

const List = () => {
  return (
    <ListContainer>
      <h1>Bem-vindo!</h1>
      <ListContent>
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </ListContent>
    </ ListContainer>
  );
};

export default List;
