import React, {useState} from "react";
import {withRouter} from "react-router-dom";
import {connect} from "react-redux";
import {getUserPaidPrograms} from "../../redux/selectors/ProgramSelector";
import RequirementsComponent from "./RequirementsComponent";
import {userStateType} from "../../redux/reducers/UserReducer";
import {programStateType} from "../../redux/reducers/ProgramsReducer";
import {userProgramType} from "../../assets/data/user_programs";

const PaidApplications = ({user_programs}: any) => {
    const [program, setProgram] = useState<userProgramType>({} as userProgramType);

    return (
        <>
            <h5 className={'font-weight-bold mb-30'}>Paid Applications</h5>
            <table className={'table'}>
                <thead className="table-light">
                <tr>
                    <th>App #</th>
                    <th>Program</th>
                    <th>School</th>
                    <th>ESL Start Date</th>
                    <th>Start Date</th>
                    <th>Requirements</th>
                    <th>Status</th>
                </tr>
                </thead>
                <tbody>
                {
                    user_programs.map((p: any) => {
                        return (
                            <tr key={p.id}>
                                <td>#{p.id}</td>
                                <td>{p.title}</td>
                                <td>{p.university}</td>
                                <td>{p.estart_date}</td>
                                <td>{p.start_date}</td>
                                <td><a href={'#'} onClick={() => setProgram(p)} data-bs-toggle="modal" data-bs-target="#exampleModal"> View Requirements</a></td>
                                <td><span className={'text-success'}>{p.status}</span></td>
                            </tr>
                        )
                    })
                }
                </tbody>
            </table>
            <RequirementsComponent program={program}/>
        </>
    )
}

const mapDispatchToProps = (dispatch: React.Dispatch<any>) => {
    return {
        //load: (payload = undefined) => dispatch(loadPrograms(payload)),
    }
}

const mapStateToProps = ({users, programs}: {users: userStateType, programs: programStateType}) => ({
    user: users.user,
    programs: programs.programs,
    user_programs: getUserPaidPrograms(programs.user_programs),
    loading: programs.loading,
    isLoggedIn: users.isLoggedIn,
    error: programs.error
})

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(PaidApplications));
