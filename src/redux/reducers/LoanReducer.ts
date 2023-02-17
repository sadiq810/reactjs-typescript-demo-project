import {types, loanType} from "../../assets/data/loan_details";
export type loanStateType = {
    applications: any[],
    draft_applications: any[],
    isLoading: boolean,
    fetched: boolean,
    isLoadingDraft: boolean,
    draftFetched: boolean,
    loan_types: loanType[]
}

type loanActionType = {
    type:
        | 'LOADING_LOANS_APPLICATIONS'
        | 'LOANS_APPLICATIONS_LOADED'
        | 'LOADING_LOANS_DRAFT_APPLICATIONS'
        | 'LOANS_DRAFT_APPLICATIONS_LOADED'
        | 'LOAN_APPLICATION_SUBMITTED',
    payload?: any
}

const PaymentReducer = (state: loanStateType = {
    applications: [],
    draft_applications: [],
    isLoading: false,
    fetched: false,
    isLoadingDraft: false,
    draftFetched: false,
    loan_types: types
},
                        action: loanActionType) => {
    switch (action.type) {
        case 'LOADING_LOANS_APPLICATIONS':
            return {...state, isLoading: true};
        case 'LOANS_APPLICATIONS_LOADED':
            return {...state, isLoading: false, applications: action.payload, fetched: true};
        case 'LOADING_LOANS_DRAFT_APPLICATIONS':
            return {...state, isLoadingDraft: true};
        case 'LOANS_DRAFT_APPLICATIONS_LOADED':
            return {...state, isLoadingDraft: false, draftFetched: true, draft_applications: action.payload};
        case 'LOAN_APPLICATION_SUBMITTED':
            return {...state, applications: [...state.applications, {...action.payload}]};
        default:
            return state;
    }
};

export default PaymentReducer;
