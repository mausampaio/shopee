import { render } from "../../test-utils";
import "jest-styled-components";

import { Loading } from "./index";

it("should match snapshot", () => {
  const { asFragment } = render(<Loading />);
  expect(asFragment()).toMatchSnapshot();
});
