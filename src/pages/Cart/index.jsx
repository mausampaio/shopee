import React from "react";
import { Store } from "../../context";
import { Button, Container } from "../../styles/GlobalStyles";
import { localePriceFormater } from "../../utils/localePriceFormater";
import { CartItem } from "./CartItem";
import { Content, Header, Footer, TotalPrice } from "./styles";

const Cart = () => {
  const state = React.useContext(Store);
  const { cart } = state;

  return (
    <Container>
      <h1>Titulo da Pagina</h1>
      <div>
        <Header>
          <div></div>
          <span>Preco Un</span>
          <span>Quantidade</span>
          <span>Subtotal</span>
        </Header>
        <Content>
          {cart?.map((product, index) => (
            <CartItem
              key={product.id}
              product={product}
              lineBreak={cart.length !== index + 1}
            />
          ))}
        </Content>
        <Footer>
          <div>
            <TotalPrice>{localePriceFormater(590.0)}</TotalPrice>
          </div>
          <div style={{ width: "226px" }}>
            <Button>Finalizar Compra</Button>
          </div>
        </Footer>
      </div>
    </Container>
  );
};

export default Cart;
