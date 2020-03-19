import { STORE_PRODUCT_LIST} from '../actions/actionTypes';

// Validations
import isEmpty from '../../validations/isEmpty';

import axios from 'axios';

export const setProductList = (productList) => dispatch => {
    return dispatch({
      type: STORE_PRODUCT_LIST,
      productList
    });
}


export const fetchProductList = () => dispatch => {
    
    return new Promise((resolve, reject) => {
        axios.get(`https://m.floweraura.com/api/v1/product-list/Zmxvd2Vycy9vY2Nhc2lvbi9iaXJ0aGRheQ==`)
        .then((res) => {            
            dispatch(setProductList(res.data));
            resolve();
        })
        .catch((e) => {
            // console.log(e);
            reject()
        });    
        
      });
}