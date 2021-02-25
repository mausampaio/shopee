import List from "./pages/List";
import Details from "./pages/Details";
import Cart from "./pages/Cart";

export const routes = [
  { path: "/", component: List, exact: true },
  { path: "/products", component: List, exact: true },
  { path: "/products/:id", component: Details, exact: false },
  { path: "/cart", component: Cart, exact: false },
];
