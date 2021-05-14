import React from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import OrderDetails from './views/OrderDetails.js';

class App extends React.Component {
  
  render() {
    return (
      <BrowserRouter>
          <Route exact path={"/:orderId"} component={OrderDetails} />
        </BrowserRouter>
    );
  }
}

export default App;
