import { render } from "../../test-utils";
import { Container } from ".";

test("should match snapshot", () => {
  const { asFragment } = render(<Container />);
  expect(asFragment()).toMatchSnapshot();
});
