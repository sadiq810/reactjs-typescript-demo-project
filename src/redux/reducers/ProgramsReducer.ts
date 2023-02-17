import programs, {programType} from '../../assets/data/programs';
import user_programs, {userProgramType} from "../../assets/data/user_programs";
import university, {universityType} from '../../assets/data/university';

type actionType = {
    type:
        | 'LOADING_PROGRAMS'
        | 'LOADING_PROGRAMS_ERROR'
        | 'PROGRAMS_LOADED'
        | 'APPLIED_FOR_PROGRAM'
        | 'PAYMENT_FOR_PROGRAM_DONE'
        | 'approved',
    payload?: any
}

export type programStateType = {
    programs: programType[],
    user_programs: userProgramType[],
    universities: universityType[],
    loading: boolean,
    error: string
}

const ProgramsReducer = (state: programStateType = {programs, user_programs, universities : university, error: '', loading: false}, action: actionType) => {
    switch (action.type) {
        case 'LOADING_PROGRAMS':
            return { ...state, loading: true, error: '' };
        case 'LOADING_PROGRAMS_ERROR':
            return { ...state, loading: false, error: action.payload };
        case 'PROGRAMS_LOADED':
            return { ...state, programs: action.payload, loading: false, error: '' };
        case 'APPLIED_FOR_PROGRAM':
            return {...state, user_programs: [...state.user_programs, action.payload]};
        case 'PAYMENT_FOR_PROGRAM_DONE':
            let p = state.user_programs.find(p => p.id === action.payload);

            if (p) {
                p.status = 'approved'
                return {...state, user_programs: [...state.user_programs.filter(ps => ps.id !== (p && p.id)), {...p}]}
            } else
                return state;
        default:
            return state;
    }
};

export default ProgramsReducer;
