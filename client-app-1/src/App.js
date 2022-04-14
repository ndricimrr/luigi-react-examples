import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Orders from './views/Orders.js';
import ProductDetail from './views/ProductDetail.js';
import ProductPage from './views/ProductPage.js';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch> 
        <Route exact path="/products" component={ProductPage} />
          <Route exact path="/products/:productName" component={ProductDetail} />
          <Route path="/" component={Orders} />
        </Switch>
         
          

        </BrowserRouter>
    );
  }
}

export default App;
