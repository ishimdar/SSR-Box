import { STORE_PRODUCT_INFORMATION} from '../actions/actionTypes';

// Validations
import isEmpty from '../../validations/isEmpty';

var axios = require("axios");

export const setProductInformation = productInfo => dispatch => {
    if (!isEmpty(productInfo.cities) && !isEmpty(productInfo.cities.all)) {
      // dispatch(setAllCitiesList(productInfo.cities.all));
    }
  
    return dispatch({
      type: STORE_PRODUCT_INFORMATION,
      productInfo
    });
  }


export const fetchProductInfo = (productAlias) => dispatch => new Promise((resolve, reject) => {
    return axios.get(`https://www.floweraura.com/api/product-info/${productAlias}`).then(response => {
      
      const { result } = response.data;
  
      if (!isEmpty(result)) {
        resolve(result);
        
        // dispatch(setProductInformation(result.product));
        // dispatch(setContactNumber(result.settings.contactNumber));
     
        // Set default attribute for select
        const { attributes } = result.product;
        Object.keys(attributes).map(async function (index) {
          if (+attributes[index].display === 1) {
            // const attributeId = attributes[index].attribute_id;
            // const attributeValue = +(Object.keys(attributes[index].options)[0]);
  
            // dispatch(onSetAttribute(attributeId, attributeValue, 1));
          }
  
          return '';
        });
      } else {
        reject('Product not found');
      }
    }).catch(err => { 
      reject(err);
    });
  });