import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';


import StaticPage from './components/pages/StaticPage';
import ProductPage from './components/pages/ProductPage';
import ProductListPage from './components/pages/ProductList';
import CounterPage from './components/pages/CounterPage';


class App extends Component {

  render() {
    
    return (
      <>
        <StaticPage />
        <Switch>
          <Route path={["/p/:product","/pg/:product", "/:countryName/p/:product"]} component={ProductPage} />          
          <Route path='/path' component={ProductListPage} />          
          <Route path='/counter' component={CounterPage} />
        </Switch>
      </>
    );
  }
}


export default App;
