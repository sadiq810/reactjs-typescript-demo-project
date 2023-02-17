import React, {useEffect} from "react";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import {loadLoansApplications} from "../../redux/actions";
import {userStateType} from "../../redux/reducers/UserReducer";
import {loanStateType} from "../../redux/reducers/LoanReducer";

const LoanApplicationsComponent = ({loans = [], fetched, load}: any) => {
    useEffect(() => {
        if (!fetched)
            load();
    });

    return (
        <>
            <div className="container-fluid mWidth95percent bg-white">
                <div className="container pt-5 pb-5">
                    <div className="col-lg-12 col-md-12 col-sm-12 program--main-box">
                        <div className="row program--wrapper">
                            <h5 className={'font-weight-bold mb-30'}>Applications</h5>
                            <table className={'table'}>
                                <thead className="table-light">
                                <tr>
                                    <th>App #</th>
                                    <th>Loan name</th>
                                    <th>Amount</th>
                                    <th>Interest Rate</th>
                                    <th>Status</th>
                                    <th>Action</th>
                                </tr>
                                </thead>
                                <tbody>
                                {
                                    loans.map((p: any) => {
                                        return (
                                            <tr key={p.id}>
                                                <td>#{p.id}</td>
                                                <td>{p.title}</td>
                                                <td>${parseInt(p.amount).toFixed(2).toLocaleString()}</td>
                                                <td>{p.interest_rate}%</td>
                                                <td style={{color: p.status === 'Approved' ? 'green': 'yellow'}}>{p.status}</td>
                                                <td><a href={'#'}>View Application</a></td>
                                            </tr>
                                        )
                                    })
                                }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

const mapDispatchToProps = (dispatch: React.Dispatch<any>) => {
    return {
        load: () => dispatch(loadLoansApplications({})),
    }
}

const mapStateToProps = ({users, loans}:{users: userStateType, loans: loanStateType}) => ({
    user: users.user,
    loans: loans.applications,
    fetched: loans.fetched
})

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(LoanApplicationsComponent));
