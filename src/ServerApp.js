import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';

// Custom compnents
// import ProductPage from './components/Pages/ProductPage' 
import CounterPage from './components/pages/CounterPage' 



class App extends Component { 
  render() {
    return (
      <React.Fragment>
        <AppLayout />
        <Switch>
            <Route path='/counter' component={CounterPage} />
        </Switch> 
      </React.Fragment>  
    );
  } 
}

App.contextTypes = {
  data: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.string
  ])
}

export default App;