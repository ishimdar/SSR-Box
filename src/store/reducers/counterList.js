import { STORE_PRODUCT_COUNTER } from '../actions/actionTypes';

// Validations
import isEmpty from '../../validations/isEmpty';

const initialState = {
    counter: null
}

const CounterReducer = (state = initialState, action ) => {    
    switch(action.type) {
        case STORE_PRODUCT_COUNTER:            
            return{
                ...state,                
                counter: action.counter
            }

        default:
            return state;
    }
}


export default CounterReducer;