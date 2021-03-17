import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

export const mockProduct = {
  id: 1,
  name: "Produto de teste",
  price: 1.0,
  description: "Produto gerado para testes",
  url: "produto-de-teste",
  image: "./produto-teste.jpg",
};

export const mockCart = {
  id: mockProduct.id,
  name: mockProduct.name,
  price: mockProduct.price,
  quantity: 10,
};

export const mockContext = {
  cart: [],
  products: [],
  product: {},
  loading: false,
  getCartTotal: () => 0,
};

const RouterProvider = ({ children }) => {
  return <BrowserRouter>{children}</BrowserRouter>;
};

const customRender = (ui, options) => {
  return render(<RouterProvider>{ui}</RouterProvider>, { ...options });
};

export * from "@testing-library/react";

export { customRender as render };
