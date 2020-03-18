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


export const fetchProductList = (name) => dispatch => {

    axios.get(`https://m.floweraura.com/api/v1/product-list/Zmxvd2Vycy9vY2Nhc2lvbi9iaXJ0aGRheQ==`)
        .then((res) => {
            // console.log('res', res);
            return dispatch(setProductList(res.data));
        })
        .catch((e) => {
            console.log(e);
        });    
}