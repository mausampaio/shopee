import React from "react";
import { Store } from "../../context";
import { Button, Container } from "../../styles/GlobalStyles";
import { localePriceFormater } from "../../utils/localePriceFormater";
import { CartItem } from "./CartItem";
import { Content, Header, Footer, TotalPrice } from "./styles";

const Cart = () => {
  const context = React.useContext(Store);
  const { cart, addProduct, removeProduct, getCartTotal } = context;

  return (
    <Container>
      <h1>Carrinho</h1>
      {cart.length === 0 ? (
        <h2 style={{ display: "flex", justifyContent: "center" }}>
          Não existem produtos
        </h2>
      ) : (
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
                onIncrement={addProduct}
                onDecrement={removeProduct}
              />
            ))}
          </Content>
          <Footer>
            <div>
              <TotalPrice>{localePriceFormater(getCartTotal())}</TotalPrice>
            </div>
            <div style={{ width: "226px" }}>
              <Button>Finalizar Compra</Button>
            </div>
          </Footer>
        </div>
      )}
    </Container>
  );
};

export default Cart;
