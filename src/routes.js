import { BrowserRouter, Route } from "react-router-dom";

import Header from "./components/Header";
import GlobalStyles from "./styles/GlobalStyles";
import List from "./pages/List";

const Routes = () => {
  return (
    <BrowserRouter>
      <Header />
      <Route path="/" exact component={List} />
      <GlobalStyles />
    </BrowserRouter>
  );
};

export default Routes;
