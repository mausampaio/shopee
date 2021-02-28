import React from "react";
import { Store } from "../../context";
import { Button, Container } from "../../styles/GlobalStyles";
import { localePriceFormater } from "../../utils/localePriceFormater";
import { CartItem } from "./CartItem";
import { Content, Header, Footer, TotalPrice } from "./styles";

const formatter = (price) => {
  const formatPrice = localePriceFormater(price);
  let splitedPrice = formatPrice.split("");
  console.log(splitedPrice);
  const reais = splitedPrice[0] + splitedPrice[1];
  let value = "";
  for (let i = 2; i < splitedPrice.length; i++) {
    value += splitedPrice[i];
  }
  return (
    <>
      <span
        style={{
          fontSize: "24px",
          lineHeight: "24px",
          fontWeight: "500",
          paddingTop: "10%",
        }}
      >
        {reais}
      </span>
      <span style={{ fontSize: "48px", lineHeight: "24px", fontWeight: "500" }}>
        {value}
      </span>
    </>
  );
};

const Cart = () => {
  const context = React.useContext(Store);
  const {
    cart,
    setCart,
    addProduct,
    removeProduct,
    getCartTotal,
    removeCartFromLocalStorage,
  } = context;

  const checkout = () => {
    setCart([]);
    removeCartFromLocalStorage();
    alert("A compra foi processada com sucesso, Obrigado!");
  };

  return (
    <Container>
      <h1 style={{ margin: "32px 0 36px" }}>Carrinho</h1>
      {cart.length === 0 ? (
        <h2 style={{ display: "flex", justifyContent: "center" }}>
          Não existem produtos
        </h2>
      ) : (
        <div>
          <Header>
            <div></div>
            <span>Preço UN.</span>
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
              <TotalPrice>{formatter(getCartTotal())}</TotalPrice>
            </div>
            <div style={{ width: "226px" }}>
              <Button onClick={checkout}>Finalizar Compra</Button>
            </div>
          </Footer>
        </div>
      )}
    </Container>
  );
};

export default Cart;
