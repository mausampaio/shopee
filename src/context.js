import React, { useEffect, useState, createContext } from "react";
import { fetchProducts, queryProducts } from "./services/api";

const Store = createContext();
const { Provider: ContextProvider, Consumer } = Store;

function Provider({ children }) {
  const [cart, setCart] = useState([]);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [product, setProduct] = useState({});
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    getProducts();
    getCartFromLocalStorage();
  }, []);

  useEffect(() => {
    setCartToLocalStorage();
  }, [cart]);

  const getProducts = async () => {
    setLoading(true);
    const result = await fetchProducts();
    setLoading(false);
    setProducts(result);
  };

  const getSearchedProduct = async (searchValue) => {
    setLoading(true);
    const result = await queryProducts(searchValue);
    setLoading(false);
    setProducts(result);
  };

  const getProductById = (id) => {
    setLoading(true);
    const selectedProduct = products.find((product) => product.id === id);
    setProduct(selectedProduct);
    setLoading(false);
  };

  const addProduct = (productId) => {
    const foundProd = cart.find((prod) => prod.id === productId);
    if (foundProd) {
      foundProd.quantity += 1;
      const newCart = cart.map((prod) =>
        prod.id === foundProd.id ? foundProd : prod
      );
      setCart(newCart);
    } else {
      const { name, id, price } = products.find(
        (prod) => prod.id === productId
      );
      const newProd = {
        id,
        name,
        price,
        quantity: 1,
      };
      setCart([...cart, newProd]);
    }
  };

  const removeProduct = (productId) => {
    const foundProd = cart.find((prod) => prod.id === productId);
    if (foundProd.quantity === 1) {
      const newCart = cart.filter((prod) => prod.id !== foundProd.id);
      setCart(newCart);
    } else {
      foundProd.quantity -= 1;
      const newCart = cart.map((prod) =>
        prod.id === foundProd.id ? foundProd : prod
      );
      setCart(newCart);
    }
    localStorage.setItem("shopee-cart", JSON.stringify(cart));
  };

  const getCartFromLocalStorage = () => {
    const localCart = localStorage.getItem("shopee-cart");
    if (localCart) {
      setCart(JSON.parse(localCart));
    }
  };

  const setCartToLocalStorage = () => {
    if (cart.length >= 0) {
      localStorage.setItem("shopee-cart", JSON.stringify(cart));
    }
  };

  const removeCartFromLocalStorage = () => {
    localStorage.removeItem("shopee-cart");
  };

  const getCartTotal = () => {
    const total = cart.reduce(
      (sum, item) => (sum += item.price * item.quantity),
      0
    );

    return total;
  };

  const cartContext = {
    cart,
    products,
    product,
    loading,
    searchValue,
    setCart,
    setSearchValue,
    addProduct,
    removeProduct,
    getCartFromLocalStorage,
    setCartToLocalStorage,
    removeCartFromLocalStorage,
    getCartTotal,
    getProducts,
    getSearchedProduct,
    getProductById,
  };

  return <ContextProvider value={cartContext}>{children}</ContextProvider>;
}

export { Provider, Consumer, Store };
