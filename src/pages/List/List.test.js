import List from ".";
import { Store } from "../../context";
import { mockContext, mockProduct, render } from "../../test-utils";

const ContextProvider = ({ children }) => (
  <Store.Provider
    value={{
      ...mockContext,
      products: [mockProduct],
      getProducts: () => {
        return;
      },
    }}
  >
    {children}
  </Store.Provider>
);

test("should render products from the context", () => {
  const { getByText } = render(<List />, {
    wrapper: ContextProvider,
  });
  expect(getByText(mockProduct.name)).toBeInTheDocument();
});

test("should match snapshot", () => {
  const { asFragment } = render(<List />, {
    wrapper: ContextProvider,
  });
  expect(asFragment()).toMatchSnapshot();
});
