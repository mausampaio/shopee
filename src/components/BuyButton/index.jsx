import { Button } from "../../styles/GlobalStyles";
import { BuyButtonContainer, ProductDelete, ProductSpan, ProductUnitButtonContainer } from "./styles";


const BuyButton = props => {
  let { productCartNumber = 0, onIncrement, onDecrement } = props;

  return (
    <>
      {productCartNumber === 0 ? (
        <BuyButtonContainer>
          <Button onClick={onIncrement}>Comprar</Button>
        </BuyButtonContainer>
      ) : (
        <BuyButtonContainer>
          <ProductUnitButtonContainer>
            <Button onClick={onDecrement}>{productCartNumber === 1 ? (<ProductDelete />) : "-"}</Button>
          </ProductUnitButtonContainer>
          <ProductSpan>{productCartNumber}</ProductSpan>
          <ProductUnitButtonContainer>
            <Button onClick={onIncrement}>+</Button>
          </ProductUnitButtonContainer>
        </BuyButtonContainer>
      )}
    </>
  );
};

export default BuyButton;
