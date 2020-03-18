import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

// import rootReducer from './reducers';
import rootReducer from './reducers';

let preloadedState = {} ;

if (typeof window === 'object') {
    preloadedState = window.__PRELOADED_STATE__ ;
    // Allow the passed state to be garbage-collected
    delete window.__PRELOADED_STATE__ ;
}



// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const composeEnhancers = compose;
const store = createStore(
    rootReducer, 
    preloadedState,
    composeEnhancers(applyMiddleware(thunk))
);

export default store;
