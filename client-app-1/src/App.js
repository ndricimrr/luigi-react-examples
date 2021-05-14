import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Orders from './views/Orders.js';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
          <Route path="/" component={Orders} />
        </BrowserRouter>
    );
  }
}

export default App;
