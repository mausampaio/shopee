import { BrowserRouter, Route } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import Header from "./components/Header";
import { Provider } from "./context";
import { routes } from "./routes";
import GlobalStyles from "./styles/GlobalStyles";
import 'react-toastify/dist/ReactToastify.min.css';

function App() {
  return (
    <Provider>
      <BrowserRouter>
        <ToastContainer />
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
