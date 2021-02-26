import React, { useContext, useState } from "react";
import { useHistory } from "react-router-dom";

import { Store } from "../../context";
import Shopee from "../../assets/images/Shopee.png";

import {
  Container,
  ShopeeLink,
  SearchForm,
  SearchButton,
  SearchIcon,
  CartButton,
  ShoppingCart,
  ItemsNumber,
} from "./styles";

function Header() {
  const context = useContext(Store);
  const itemsInCart = context.cart.length;

  const [searchValue, setSearchValue] = useState("");

  const history = useHistory();

  const handleGoToCart = () => {
    history.push("/cart");
  };

  const handleSearch = (e) => {
    e.preventDefault();

    history.push(`/products?search=${searchValue}`);
  };

  return (
    <Container>
      <ShopeeLink to="/" onClick={() => setSearchValue("")}>
        <img src={Shopee} alt={"Shoppe"} />
      </ShopeeLink>
      <SearchForm>
        <input
          type="text"
          placeholder="Buscar...."
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
        <SearchButton onClick={(e) => handleSearch(e)}>
          <SearchIcon />
        </SearchButton>
      </SearchForm>
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
