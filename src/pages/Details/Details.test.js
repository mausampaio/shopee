import Details from ".";
import { Store } from "../../context";
import { mockContext, render } from "../../test-utils";

const ContextProvider = ({ children }) => (
  <Store.Provider value={mockContext}>{children}</Store.Provider>
);

test("should render 'Produto não encontrado!' if no product is on cart", () => {
  const { getByText } = render(<Details />, {
    wrapper: ContextProvider,
  });
  expect(getByText("Produto não encontrado!")).toBeInTheDocument();
});
