import Details from ".";
import { Store } from "../../context";
import { mockContext, mockProduct, render } from "../../test-utils";

// mock a param with value 'id = 1'
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useParams: () => ({ id: 1 }),
}));

const ContextProvider = ({ children }) => (
  <Store.Provider value={{ ...mockContext, products: [mockProduct] }}>
    {children}
  </Store.Provider>
);

test("should render a product detail using id=1 on params", () => {
  const { getByText } = render(<Details />, {
    wrapper: ContextProvider,
  });
  expect(getByText(mockProduct.name)).toBeInTheDocument();
});
