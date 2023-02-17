import {loanType} from "../../assets/data/loan_details";

export const personalLoanTypes = (types: loanType[]) => {
    return types.filter(l => l.type === 'personal');
}

export const educationalLoanTypes = (types: loanType[]) => {
    return types.filter(l => l.type === 'educational');
}

export const getLoanTypeById = (id: number, types: loanType[]): loanType => {
    if (!id) return {} as loanType;

    let type = types.find(l => l.id === id);

    if (type)
        return type;
    else
        return {} as loanType;
}
