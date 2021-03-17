import Details from ".";
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

test("should render product from the context", () => {
  const { getByText } = render(<Details />, {
    wrapper: ContextProvider,
  });
  expect(getByText(mockProduct.name)).toBeInTheDocument();
});
