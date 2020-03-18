import { combineReducers } from 'redux';

// Custom reducers
import product from './product';
import productList from './productList';
import counterList from './counterList';

const rootReducer = combineReducers({
    product,
    productList,
    counterList
  });
  
export default rootReducer;