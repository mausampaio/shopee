import { Store } from "../../context";
import { mockCart, mockContext, render } from "../../test-utils";
import Cart from "./";

const ContextProvider = ({ children }) => (
  <Store.Provider value={mockContext}>{children}</Store.Provider>
);

test('should render "Não existem produtos" when cart is empty', () => {
  const { getByText } = render(<Cart />, { wrapper: ContextProvider });
  expect(getByText("Não existem produtos")).toBeInTheDocument();
});

test("should render a product on the cart", () => {
  const MockedCart = () => (
    <Store.Provider value={{ ...mockContext, cart: [mockCart] }}>
      <Cart />
    </Store.Provider>
  );
  const { getByText } = render(<MockedCart />);
  expect(getByText("Produto de teste")).toBeInTheDocument();
});

test("should render two products on the cart", () => {
  const mockCartB = {
    id: 2,
    name: "Produto de teste 2",
    price: 1.0,
    quantity: 2,
  };

  const MockedCart = () => (
    <Store.Provider value={{ ...mockContext, cart: [mockCart, mockCartB] }}>
      <Cart />
    </Store.Provider>
  );
  const { getByText } = render(<MockedCart />);
  expect(getByText("Produto de teste")).toBeInTheDocument();
  expect(getByText("Produto de teste 2")).toBeInTheDocument();
});

test("should match snapshot", () => {
  const { asFragment } = render(<Cart />, { wrapper: ContextProvider });
  expect(asFragment()).toMatchSnapshot();
});
