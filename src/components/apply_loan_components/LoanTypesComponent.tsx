import React from "react";
import {connect} from "react-redux";
import {Link, withRouter} from "react-router-dom";
import LoanTypeComponent from "./components/LoanTypeComponent";
import {educationalLoanTypes, personalLoanTypes} from "../../redux/selectors/LoanSelector";
import {loanStateType} from "../../redux/reducers/LoanReducer";

const LoanTypesComponent = ({setTab, types, setState, loan}: any) => {
    return (
        <div className="container-fluid mWidth95percent bg-white">
            <div className="container pt-5 pb-5">
                <div className="row program--wrapper">
                    <div className="row">
                      <h3 className={'d-inline-block float-start header--title text-end'}>APPLY FOR A LOAN</h3>
                        <Link to={'/loans?tab=draft'} className={'d-inline-block header--title--btn font-weight--bold float-end text-end'}>Exit</Link>
                    </div>
                    <div className="row mt-40">
                        <h2 className={'mt-40'}>Loans</h2>
                        <h3 className={'mt-40'}>Educational Loans</h3>
                    </div>
                    <div className="row mt-30">
                        {
                            educationalLoanTypes(types).map(t => {
                                return (<LoanTypeComponent id={t.id} title={t.title} description={t.detail} selected={t.id === loan.type} setState={setState} key={t.id} setTab={setTab}/>)
                            })
                        }
                    </div>

                    <div className="row mt-40">
                        <h3 className={'mt-40'}>Personal and Home Loans</h3>
                    </div>
                    <div className="row mt-30">
                        {
                            personalLoanTypes(types).map(t => {
                                return (<LoanTypeComponent id={t.id} title={t.title} description={t.detail} selected={t.id === loan.type} setState={setState} key={t.id} setTab={setTab}/>)
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

const mapDispatchToProps = (dispatch: React.Dispatch<any>) => {
    return {}
}

const mapStateToProps = ({loans}: {loans: loanStateType}) => ({
    types: loans.loan_types
})

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(LoanTypesComponent));
