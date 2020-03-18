import { STORE_PRODUCT_LIST} from '../actions/actionTypes';

// Validations
import isEmpty from '../../validations/isEmpty';

const initialState = {
    node:[],
    header: '',
    footer: ''
}

const ListReducer = (state = initialState, action ) => {
    // console.log('action', action);
    switch(action.type) {
        case STORE_PRODUCT_LIST:
            return{
                ...state,
                node: action.productList.nodes,
                header: action.productList.header,
                footer: action.productList.footer
            }

        default:
            return state;
    }
}


export default ListReducer;