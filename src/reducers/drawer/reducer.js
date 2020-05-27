import { createReducer }    from '../../utils/reducer';

const initState = {
    show : false,
    pattern : null,
    data: null,
    functions: null
};

const actionHandlers = {
    SET_DRAWER: ( state, action ) => {
        let result = {...state};
        result.show = action.payload.show;
        result.pattern = action.payload.pattern;
        result.data = action.payload.data;
        result.functions = action.payload.functions;
        return result;
    }
};

export default createReducer( initState, actionHandlers );  