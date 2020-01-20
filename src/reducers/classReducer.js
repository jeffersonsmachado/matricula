const reducer = (state, action) => {
    switch (action.type) {
        case 'add':
            return [
                ...state,
                action.payload
            ]
        case 'remove':
            return state.filter( ({ id }) => id !== action.payload);
        case 'reset':
            return [];
        default:
            return state;
    }
}

export default reducer;