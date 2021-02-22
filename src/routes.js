import { BrowserRouter, Route } from 'react-router-dom';

import List from './pages/List';

const Routes = () => {
  return (
    <BrowserRouter>
      <Route path="/" exact component={List} />
    </BrowserRouter>
  );
};

export default Routes;
