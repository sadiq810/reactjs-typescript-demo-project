export const authenticateUser = (payload: any) => ({ type: 'AUTHENTICATING_USER', payload });
export const registerUser = (payload: any) => ({ type: 'REGISTERING_USER', payload });
export const updateUserProfile = (payload: any) => ({ type: 'UPDATE_USER_PROFILE', payload });
export const updateUserEducationHistory = (payload: any) => ({ type: 'UPDATE_USER_EDUCATION_HISTORY', payload });
export const deleteUserEducationFromHistory = (payload: any) => ({ type: 'DELETE_USER_EDUCATION_FROM_HISTORY', payload });
export const logoutUser = () => ({ type: 'LOGOUT_USER' });

export const loadPrograms = (payload: any) => ({ type: 'LOADING_PROGRAMS', payload });
export const applyForProgram = (payload: any) => ({ type: 'APPLY_FOR_PROGRAM', payload });

export const processPaymentForProgram = (payload: any) => ({ type: 'PROCESS_PAYMENT', payload });

export const loadTransactions = (payload: any) => ({type: 'LOAD_TRANSACTIONS', payload});
export const loadWalletPayments = (payload: any) => ({type: 'LOAD_WALLET_PAYMENTS', payload});


export const loadLoansApplications = (payload: any) => ({type: 'LOAD_LOANS_APPLICATIONS', payload});
export const loadLoansDraftApplications = (payload: any) => ({type: 'LOAD_LOANS_DRAFT_APPLICATIONS', payload});

export const submitLoanApplication = (payload: any) => ({type: 'SUBMIT_LOAN_APPLICATION', payload});
