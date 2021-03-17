import { Store } from "../../context";
import { mockContext, mockProduct, render } from "../../test-utils";
import { ProductCard } from "./index";

const ContextProvider = ({ children }) => (
  <Store.Provider value={mockContext}>{children}</Store.Provider>
);

test("should render with props", () => {
  const { getByText } = render(<ProductCard productDetails={mockProduct} />, {
    wrapper: ContextProvider,
  });
  expect(getByText(mockProduct.name)).toBeInTheDocument();
});

test("should render without props", () => {
  const { getByText } = render(<ProductCard productDetails={undefined} />, {
    wrapper: ContextProvider,
  });
  expect(getByText(/produto padr/i)).toBeInTheDocument();
});

test("should match snapshot", () => {
  const { asFragment } = render(<ProductCard productDetails={undefined} />, {
    wrapper: ContextProvider,
  });
  expect(asFragment()).toMatchSnapshot();
});
