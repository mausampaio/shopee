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

test("should render products on the cart", () => {
  const MockedCart = () => (
    <Store.Provider value={{ ...mockContext, cart: [mockCart] }}>
      <Cart />
    </Store.Provider>
  );
  const { getByText } = render(<MockedCart />);
  expect(getByText("Produto de teste")).toBeInTheDocument();
});

test("should match snapshot", () => {
  const { asFragment } = render(<Cart />, { wrapper: ContextProvider });
  expect(asFragment()).toMatchSnapshot();
});
