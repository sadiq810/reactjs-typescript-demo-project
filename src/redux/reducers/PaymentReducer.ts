export type paymentStateType = {
    payment_history: any[],
    transaction_history: any[],
    isLoading: boolean,
    fetched: boolean,
    paymentsFetched: boolean
}

type actionType = {
    type: 'TRANSACTIONS_LOADING' | 'TRANSACTIONS_LOADED',
    payload?: any
}
const PaymentReducer = (state: paymentStateType = {payment_history: [], transaction_history: [], isLoading: false, fetched: false, paymentsFetched: false}, action: actionType) => {
    switch (action.type) {
        case 'TRANSACTIONS_LOADING':
            return {...state, isLoading: true};
        case 'TRANSACTIONS_LOADED':
            return {...state, isLoading: false, transaction_history: action.payload, fetched: true};
     /*   case 'TRANSACTIONS_LOADED':
            return {...state, payment_history: action.payload, paymentsFetched: true}*/
        default:
            return state;
    }
};

export default PaymentReducer;
