import { STORE_PRODUCT_COUNTER } from '../actions/actionTypes';

// Validations
import isEmpty from '../../validations/isEmpty';

import axios from 'axios';

export const setCounterList = (counter) => dispatch => {    
    return dispatch({
      type: STORE_PRODUCT_COUNTER,
      counter
    });
}


export const fetchCounterList = (name) => dispatch => {
    let counter = {'name': 'ishimdar'};
    return new Promise((resolve, reject) => {
      dispatch(setCounterList(counter));
      resolve();  
    });
}