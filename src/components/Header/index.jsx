import React, { useContext } from "react";
import { useHistory } from "react-router-dom";

import { Store } from "../../context";
import Shopee from "../../assets/images/Shopee.png";

import {
  Container,
  ShopeeLink,
  CartButton,
  ShoppingCart,
  ItemsNumber,
} from "./styles";
import SearchForm from "../SearchForm";
import useWindowDimensions from "../../hooks/useWindowDimensions";

function Header() {
  const context = useContext(Store);
  const itemsInCart = context.cart.length;
  const { width } = useWindowDimensions();

  const history = useHistory();

  const handleGoToCart = () => {
    context.setSearchValue("");
    history.push("/cart");
  };

  return (
    <Container>
      <ShopeeLink to="/" onClick={() => context.setSearchValue("")}>
        <img src={Shopee} alt={"Shoppe"} />
      </ShopeeLink>
      {width > 575 && <SearchForm />}
      <CartButton onClick={handleGoToCart}>
        <ShoppingCart />
        {itemsInCart >= 1 && (
          <ItemsNumber>
            <span>{itemsInCart}</span>
          </ItemsNumber>
        )}
      </CartButton>
    </Container>
  );
}

export default Header;
