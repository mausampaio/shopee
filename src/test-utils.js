import crypto from "crypto";
import { createContext } from "react";
import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

export const generateString = () => {
  return crypto.randomBytes(4).toString("hex");
};

const Store = createContext();

const mockProduct = {
  id: 1,
  name: generateString(),
  price: 1.0,
  description: generateString(),
  url: generateString(),
  image: generateString(),
};

const mockContext = {
  cart: [
    {
      id: mockProduct.id,
      name: mockProduct.name,
      price: mockProduct.price,
      quantity: 10,
    },
  ],
  products: [mockProduct],
  product: mockProduct,
  loading: false,
};

const AllTheProviders = ({ children }) => {
  return (
    <Store.Provider value={mockContext}>
      <BrowserRouter>{children}</BrowserRouter>;
    </Store.Provider>
  );
};

const customRender = (ui, options) =>
  render(<AllTheProviders>{ui}</AllTheProviders>, { ...options });

export * from "@testing-library/react";

export { customRender as render };
