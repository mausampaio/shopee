import React, { useEffect, useState, createContext } from "react";
import { fetchProducts } from "./services/api";

const Store = createContext();
const { Provider: ContextProvider, Consumer } = Store;

const INITIAL_CART = [
  {
    id: 43900,
    name: "Duracell - AAA Batteries (4-Pack)",
    price: 5.49,
    quantity: 1,
  },
  {
    name: "Duracell - AAA Batteries (4-Pack)",
    id: 43900,
    price: 5.49,
    quantity: 5,
  },
];

function Provider({ children }) {
  const [cart, setCart] = useState(INITIAL_CART);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProducts().then((response) => {
      setProducts(response);
      setLoading(false);
    });
    return () => {
      setProducts([]);
    };
  }, []);

  return (
    <ContextProvider value={{ cart, products, loading }}>
      {children}
    </ContextProvider>
  );
}

export { Provider, Consumer, Store };
