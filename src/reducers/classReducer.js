const reducer = (state, action) => {
    switch (action.type) {
        case 'add':
            return [
                ...state,
                action.payload
            ]
        case 'remove':
            return state.filter( ({ id }) => id !== action.payload);
        default:
            return state;
    }
}

export default reducer;