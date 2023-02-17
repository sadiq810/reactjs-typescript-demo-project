import React from "react";
import {connect} from "react-redux";
import {Link, withRouter} from "react-router-dom";
import SidebarComponent from "./components/SidebarComponent";
import LoanInfoSidebarComponent from "./components/LoanInfoSidebarComponent";
import {getLoanTypeById} from "../../redux/selectors/LoanSelector";
import {loanGoals, loans_refinancing} from "../../assets/data/loan_details";
import {loanStateType} from "../../redux/reducers/LoanReducer";

const LoanInfoComponent = ({setTab, loan, types, setState, tab}: any) => {
    let selectedLoan = getLoanTypeById(loan.type, types);

    return (
        <div className="container-fluid mWidth95percent bg-white">
            <div className="container pt-5 pb-5">
                <div className="row program--wrapper">
                    <div className="row">
                        <Link to={'/loans?tab=draft'} className={'d-inline-block font-weight--bold float-end text-end'}>Save & Exit</Link>
                    </div>
                    <div className="row mt-40">
                        <div className="col-lg-3 col-md-3">
                            <SidebarComponent tab={tab}/>
                        </div>
                        <div className="simple2 col-lg-6 col-md-9 col-sm-12">
                            <label>Select which loan would<br/> you like to apply for</label>
                            <div className="row loan--type">
                                {
                                    selectedLoan.sub_types.map((t: string, k: number) => {
                                        return (
                                            <button className={"btn btn1 btn4--override col-lg-4 col-md-6 col-sm-12 "+(loan.sub_type === t ? 'selected': '')} key={k} onClick={(e: React.MouseEvent<HTMLButtonElement>) => setState('sub_type', t)}>{t}
                                                <span>
                                                    <i className="icofont-check-circled soon"></i>
                                                </span>
                                            </button>
                                        )
                                    })
                                }
                            </div>

                            <div className="col-lg-12 col-md-12 col-sm-12 simple">
                                <label>What is your primary goal when it comes to your students loans?</label>
                                <div className="row loan--type">
                                    {
                                        loanGoals.map((lg, idx) => {
                                            return (
                                                <button className={"btn btn1 btn4--override col-lg-4 col-md-6 col-sm-12 "+(loan.goal === lg ? 'selected': '')} key={idx} onClick={(e: React.MouseEvent<HTMLButtonElement>) => setState('goal', lg)}>{lg}
                                                    <span>
                                                        <i className="icofont-check-circled soon"></i>
                                                    </span>
                                                </button>
                                            )
                                        })
                                    }
                                </div>
                            </div>

                            <div className="col-lg-12 col-md-12 col-sm-12 simple">
                                <label>What type of student loans are you refinancing?</label>
                                <p className="para">
                                    We want to make sure your are caught up to the recent government changes to Federal
                                    student loans and doing whats best for you
                                </p>
                            </div>

                            <div className="row loan--type">
                                {
                                    loans_refinancing.map((l, index) => {
                                        return (
                                            <button key={index} className={"btn btn2 btn4--override col-lg-3 col-md-6 col-sm-12 "+(loan.loan_refinancing === l ? 'selected': '')} onClick={(e: React.MouseEvent<HTMLButtonElement>) => setState('loan_refinancing', l)}>
                                                {l}
                                                <span>
                                                    <i className="icofont-check-circled soon"></i>
                                                </span>
                                            </button>
                                        )
                                    })
                                }
                            </div>

                            <div className="col-lg-12 col-md-12 col-sm-12 simple">
                                <label>How would you like to check your rate today?</label>
                                <p className="para">
                                    We want to make sure your are caught up to the recent government changes to Federal
                                    student loans and doing whats best for you
                                </p>
                            </div>
                            <div className="row loan--type">
                                <div className={"btn3 btn4--override col-lg-3 col-md-6 col-sm-12 "+(loan.rate_checking_today === 'link_current_loan' ? 'selected': '')} onClick={(e: React.MouseEvent<HTMLDivElement>) => setState('rate_checking_today', 'link_current_loan')}>
                                    Link my current loans
                                    <article>Speed up the process and make sure nothing is missed.</article>
                                </div>
                                <div className={"btn3 btn4--override col-lg-3  col-md-6 col-sm-12 "+(loan.rate_checking_today === 'enter_information_manually' ? 'selected': '')} onClick={(e: React.MouseEvent<HTMLDivElement>) => setState('rate_checking_today', 'enter_information_manually')}>
                                    <span className="span1">Enter my information manually</span>
                                    <article>Speed uo the process and make sure nothing is missed.</article>
                                </div>
                            </div>

                            <div className="col-lg-12 col-md-12 col-sm-12 simple">
                                <label>What's the student loan amount you'd like to refinance?</label>
                                <p className="para">
                                    The amount you are refinancing must be greater than or equal to $500.
                                </p>
                                <div className="mb-3">
                                    <input type="email" className="form-control" placeholder="Enter Amount" value={loan.amount} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setState('amount', e.target.value)}/>
                                </div>
                            </div>
                            <div className={'col-lg-12 col-md-12 col-sm-12 form--btn-wrapper mt-40 simple2 '}>
                                <a className={'float-start'} onClick={(e: React.MouseEvent<HTMLAnchorElement>) => setTab('types') }><i className="icofont-curved-left"></i>Back</a>
                                <button type='button' className={'btn btn-primary  btn-medium btn-large float-end btn--mobile'} onClick={(e: React.MouseEvent<HTMLButtonElement>) => setTab('about_you')}>Next</button>
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

const mapStateToProps = ({loans}: {loans: loanStateType}) => ({
    types: loans.loan_types
})

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(LoanInfoComponent));
