import { BrowserRouter, Route } from "react-router-dom";
import Header from "./components/Header";
import { routes } from "./routes";
import GlobalStyles from "./styles/GlobalStyles";

function App() {
  return (
    <BrowserRouter>
      <Header />
      {routes.map((route) => (
        <Route
          path={route.path}
          exact={route.exact}
          component={route.component}
        />
      ))}
      <GlobalStyles />
    </BrowserRouter>
  );
}

export default App;
