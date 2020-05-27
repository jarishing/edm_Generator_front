import { combineReducers } from 'redux';

import modalReducer from './modal/reducer';
import drawerReducer from './drawer/reducer';

const reducers = combineReducers({
    modalReducer,
    drawerReducer
});

export default reducers;