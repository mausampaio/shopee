import { BrowserRouter, Route } from "react-router-dom";

import GlobalStyles from "./styles/GlobalStyles";

import Header from "./components/Header";
import List from "./pages/List";
import Details from "./pages/Details";
import Cart from "./pages/Cart";

const Routes = () => {
  return (
    <BrowserRouter>
      <Header />
      <Route path="/" exact component={List} />
      <Route path="/products" exact component={List} />
      <Route path="/products/:id" component={Details} />
      <Route path="/cart" component={Cart} />
      <GlobalStyles />
    </BrowserRouter>
  );
};

export default Routes;
