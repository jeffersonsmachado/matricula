const reducer = (state, action) => {
    switch (action.type) {
        case 'add':
            return [
                ...state,
                {
                    ...action.payload.student,
                    classId: action.payload.classId
                }
            ]
        case 'remove':
            return state.filter( item => {
                return item.id !== action.payload.id && item.classId !== action.payload.classId
            } )
        default:
            return state
    }
}

export default reducer;