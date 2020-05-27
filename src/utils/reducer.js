function createReducer ( initState, actionHandler ) {
    return function reducer ( state = initState, action ) {
        if (actionHandler.hasOwnProperty(action.type))
            return actionHandler[action.type](state, action)
        else
            return state;
    }
}

module.exports = {
    createReducer
}