import { BrowserRouter, Route } from "react-router-dom";

import Header from "./components/Header";
import GlobalStyles from "./styles/GlobalStyles";
import List from "./pages/List";
import Details from "./pages/Details";

const Routes = () => {
  return (
    <BrowserRouter>
      <Header />
      <Route path="/" exact component={List} />
      <Route path="/products" exact component={List} />
      <Route path="/products/:id" component={Details} />
      <GlobalStyles />
    </BrowserRouter>
  );
};

export default Routes;
