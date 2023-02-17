import React from "react";
import {getUserUnPaidPrograms} from "../../redux/selectors/ProgramSelector";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import {userProgramType} from "../../assets/data/user_programs";
import {userStateType} from "../../redux/reducers/UserReducer";
import {programStateType} from "../../redux/reducers/ProgramsReducer";

const UnpaidApplications = ({user_programs, history}: any) => {
    return (
        <>
            <h5 className={'font-weight-bold mb-30'}>Unpaid Applications</h5>
            <table className={'table'}>
                <thead className="table-light">
                <tr>
                    <th>App #</th>
                    <th>Program</th>
                    <th>School</th>
                    <th>ESL Start Date</th>
                    <th>Start Date</th>
                    <th>Fees</th>
                    <th>Status</th>
                </tr>
                </thead>
                <tbody>
                {
                    user_programs.map((p: userProgramType) => {
                        return (
                            <tr key={p.id}>
                                <td>#{p.id}</td>
                                <td>{p.title}</td>
                                <td>{p.university}</td>
                                <td>{p.estart_date}</td>
                                <td>{p.start_date}</td>
                                <td>${p.fee.toLocaleString()}</td>
                                <td><button onClick={(e: React.MouseEvent<HTMLButtonElement>) => history.push('/payment-options/'+p.id)} className={'btn btn-primary btn-sm'}>Pay</button></td>
                            </tr>
                        )
                    })
                }
                </tbody>
            </table>
        </>
    )
}

const mapDispatchToProps = (dispatch: React.Dispatch<any>) => {
    return {
        //load: (payload = undefined) => dispatch(loadPrograms(payload)),
    }
}

type propType = {
    users: userStateType,
    programs: programStateType
}

const mapStateToProps = ({users, programs}: propType) => ({
    user: users.user,
    programs: programs.programs,
    user_programs: getUserUnPaidPrograms(programs.user_programs),
    loading: programs.loading,
    isLoggedIn: users.isLoggedIn,
    error: programs.error
})

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(UnpaidApplications));
