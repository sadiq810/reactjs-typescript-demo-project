import {sortBy} from 'lodash';
import {universityType} from "../../assets/data/university";
import {programType} from "../../assets/data/programs";

import {userProgramType} from "../../assets/data/user_programs";

export const filterPrograms = (programs: programType[], title: string = '', location: string = '', sort: string = 'asc', applyFilter: boolean, filters: any) => {
    let p = [...programs];

    if (location)
        { // @ts-ignore
            p = p.filter(pr => pr.university.title.toLowerCase().includes(location.toLowerCase() || pr.university.location.toLowerCase().includes(location.toLowerCase())));
        }

    if (title)
        p = p.filter(pr => pr.title.toLowerCase().includes(title.toLowerCase()));

    p = sortBy(p, ['title'])

    if (sort === 'desc')
        p = p.reverse();

    if (applyFilter) {
        p = p.filter(pr => {
            return  pr.tuition_fee >= (filters.tuition_fee.from * 1000) && pr.tuition_fee <= (filters.tuition_fee.to * 1000)
                    && pr.application_fee >= (filters.application_fee.from * 1000) && pr.application_fee <= (filters.application_fee.to * 1000);
        });
    }

    return p;
}


export const getProgramById = (id: number, programs: programType[]): programType => {
    // @ts-ignore
    return programs.find(p => p.id === id);
};

export const getUserPaidPrograms = (programs: userProgramType[]): programType => {
    // @ts-ignore
    return programs.filter(p => p.status === 'approved')
};

export const getUserUnPaidPrograms = (programs: userProgramType[]) => {
    return programs.filter(p => p.status === 'unpaid')
};

export const getUniversity = (universities: universityType[]) => {
    return universities[0];
}
