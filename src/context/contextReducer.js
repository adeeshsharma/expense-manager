// Reducer => a function that takes in the old state, and an action and that action specifies how we want to change that state

const contextReducer = (state, action) => {
    const { type, payload } = action
    let transactions

    switch (type) {
        case 'DELETE_TRANSACTION':
            transactions = state.filter(
                transaction => transaction.id !== payload
            )
            return transactions

        case 'ADD_TRANSACTION':
            transactions = [payload, ...state]
            return transactions

        default:
            return state
    }
}

export default contextReducer
