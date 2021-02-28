import React from "react";
import { toast } from 'react-toastify';
import { Loading } from "../../components/Loading";
import { Store } from "../../context";
import { Button, Container } from "../../styles/GlobalStyles";
import { priceFormatter } from "../../utils/priceFormatter";
import { CartItem } from "./CartItem";
import { Content, Header, Footer, TotalPrice } from "./styles";

const Cart = () => {
  const showAlert = () => new Promise(resolve => {
    const sucess = () => {
      toast.success("A compra foi processada com sucesso, Obrigado!", { position: "bottom-center", });
      resolve();
    };
    setTimeout(sucess, 2500);
  });
  const context = React.useContext(Store);
  const {
    cart,
    setCart,
    loading,
    setLoading,
    addProduct,
    removeProduct,
    getCartTotal,
    removeCartFromLocalStorage,
  } = context;

  const checkout = async () => {
    setLoading(true);
    setCart([]);
    removeCartFromLocalStorage();
    await showAlert();
    setLoading(false);
  };

  if (loading) {
    return (
      <Loading />
    );
  } else {
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
                <TotalPrice>
                  {priceFormatter({ price: getCartTotal(), formatCents: false })}
                </TotalPrice>
              </div>
              <div style={{ width: "226px" }}>
                <Button onClick={checkout}>Finalizar Compra</Button>
              </div>
            </Footer>
          </div>
        )}
      </Container>
    );
  }

};

export default Cart;
