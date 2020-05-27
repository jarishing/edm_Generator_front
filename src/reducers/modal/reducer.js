import { createReducer }    from '../../utils/reducer';

const initState = {
    modal   : false,
    pattern : null,
    data: null,
    functions: null
};

const actionHandlers = {
    SET_MODAL: ( state, action ) => {
        let result = {...state};
        result.modal = action.payload.show;
        result.pattern = action.payload.pattern;
        result.data = action.payload.data;
        result.functions = action.payload.functions;
        return result;
    }
};

export default createReducer( initState, actionHandlers );