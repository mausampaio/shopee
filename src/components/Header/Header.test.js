import { Store } from "../../context";
import { mockCart, mockContext, render, fireEvent } from "../../test-utils";

import Header from "./index";

test("should show item quantity on cart if any item is added", () => {
  const MockedHeader = () => (
    <Store.Provider value={{ ...mockContext, cart: [mockCart] }}>
      <Header />
    </Store.Provider>
  );
  const { getByTestId } = render(<MockedHeader />);
  expect(getByTestId("qty-badge").innerHTML).toBe("1");
});
