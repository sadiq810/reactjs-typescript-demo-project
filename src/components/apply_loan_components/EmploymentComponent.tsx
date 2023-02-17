import React from "react";
import {connect} from "react-redux";
import {Link, withRouter} from "react-router-dom";
import SidebarComponent from "./components/SidebarComponent";
import LoanInfoSidebarComponent from "./components/LoanInfoSidebarComponent";
import {employment_statuses} from "../../assets/data/loan_details";
import {userStateType} from "../../redux/reducers/UserReducer";

const EmploymentComponent = ({setTab, loan, setState, tab}: any) => {
    return (
        <div className="container-fluid mWidth95percent bg-white">
            <div className="container pt-5 pb-5">
                <div className="row program--wrapper">
                    <div className="row">
                        <Link to={'/loans?tab=draft'} className={'d-inline-block font-weight--bold float-end text-end'}> Save & Exit</Link>
                    </div>
                    <div className="row mt-40">
                        <div className="col-lg-3 col-md-4 col-sm-12">
                            <SidebarComponent tab={tab}/>
                        </div>

                        <div className="col-lg-6 col-md-8 col-sm-12 emp--status">
                            <h3 className="hh3">Now, let's discuss about your employment status.</h3>
                            <div className="col-lg-12 col-md-12 col-sm-12 simple3">
                                <label>What is your current employment status?</label>
                                <p className="para">
                                    This type of employment determines the documents we'll need to verify your income later.
                                </p>
                            </div>
                            <div className="row">
                                {
                                    employment_statuses.map(emp => {
                                        return (
                                            <div key={emp.id} className={"btn3 col-lg-2 col-md-4 col-sm-12 "+(loan.employment_status === emp.title ? 'selected': '')} onClick={(e: React.MouseEvent<HTMLDivElement>) => setState('employment_status', emp.title)}>
                                                {emp.title}
                                                <article>{emp.description}</article>
                                            </div>
                                        )
                                    })
                                }
                            </div>

                            <div className="col-lg-12 col-md-12 col-sm-12 simple3">
                                <label>Is there any income you'd like to consider?</label>
                            </div>
                            <button className={"btn btn7 col-lg-2 col-md-4 col-sm-12 "+(loan.is_other_income === 'yes' ? 'selected': '')} onClick={(e: React.MouseEvent<HTMLButtonElement>) => setState('is_other_income', 'yes')}>
                                <p>Yes</p>
                            </button>
                            <button className={"btn btn7 col-lg-2 col-md-4 col-sm-12 "+(loan.is_other_income === 'no' ? 'selected': '')} onClick={(e: React.MouseEvent<HTMLButtonElement>) => setState('is_other_income', 'no')}>
                                <p>No</p>
                            </button>


                            <div className="col-lg-12 col-md-12 col-sm-12 simple3">
                                <label>What's your individual annual income?</label>
                                <p className="para">
                                    This information will be subject to verification.
                                </p>
                                <input type="address" className="form-control col-lg-4 col-md-6 col-sm-12 address5" value={loan.annual_income} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setState('annual_income', e.target.value)} placeholder="Annual income....."/>
                                <p className="para">
                                    Alimony, child support, or separate maintenance income doesn't need to be revealed if you don't wish to have it considered as a basis for repaying this obligation.
                                </p>
                            </div>
                            <div className={'col-lg-12 col-md-12 col-sm-12 form--btn-wrapper mt-40 simple2'}>
                                <a className={'float-start'} onClick={(e: React.MouseEvent<HTMLAnchorElement>) => setTab('education') }><i className="icofont-curved-left"></i>Back</a>
                                <button type='button' className={'btn btn-primary  btn-medium btn-large float-end btn--mobile'} onClick={(e: React.MouseEvent<HTMLButtonElement>) => setTab('your_rate')}>Next</button>
                            </div>
                        </div>
                        <LoanInfoSidebarComponent />
                    </div>
                </div>
            </div>
        </div>
    )
}

const mapDispatchToProps = (dispatch: React.Dispatch<any>) => {
    return {

    }
}

const mapStateToProps = ({users}: {users: userStateType}) => ({
    user: users.user,
    isLoggedIn: users.isLoggedIn,
    error: users.error
})

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(EmploymentComponent));
