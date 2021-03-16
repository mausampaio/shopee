import { render, fireEvent } from "../../test-utils";

import { Button } from "./index";

test("should match snapshot", () => {
  const { asFragment } = render(<Button>text</Button>);
  expect(asFragment()).toMatchSnapshot();
});

test("should call an onClick event when pressed", () => {
  const handleClick = jest.fn();
  const { getByRole } = render(<Button onClick={handleClick}>text</Button>);
  fireEvent.click(getByRole("button"));
  expect(handleClick).toBeCalledTimes(1);
});
