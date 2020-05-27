import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

import Reducers from './reducers';

let Store = createStore(Reducers, applyMiddleware(thunk));

export function getAccessToken(){
    return Store.getState().baseReducer.token;
}

export default Store;