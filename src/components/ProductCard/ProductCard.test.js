import { generateString, render } from "../../test-utils";
import { ProductCard } from "./index";

const mockedProduct = {
  id: 1,
  image: generateString(),
  name: generateString(),
  price: 1.0,
};

test("should render with props", () => {
  const { getByText } = render(<ProductCard productDetails={mockedProduct} />);
  expect(getByText(mockedProduct.name)).toBeInTheDocument();
});

test("should render without props", () => {
  const { getByText } = render(<ProductCard productDetails={undefined} />);

  expect(getByText("Nome do produto padrão")).toBeInTheDocument();
});

test("should matcht snapshot", () => {
  const { asFragment } = render(<ProductCard productDetails={undefined} />);
  expect(asFragment()).toMatchSnapshot();
});
