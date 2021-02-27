import { BrowserRouter, Route } from "react-router-dom";
import Header from "./components/Header";
import { Provider } from "./context";
import { routes } from "./routes";
import GlobalStyles from "./styles/GlobalStyles";

function App() {
  return (
    <Provider>
      <BrowserRouter>
        <Header />
        {routes.map((route, index) => (
          <Route
            key={index}
            path={route.path}
            exact={route.exact}
            component={route.component}
          />
        ))}
        <GlobalStyles />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
