import React, {ChangeEvent} from "react";
import {connect} from "react-redux";
import {Link, withRouter} from "react-router-dom";
import SidebarComponent from "./components/SidebarComponent";
import LoanInfoSidebarComponent from "./components/LoanInfoSidebarComponent";
import {userStateType} from "../../redux/reducers/UserReducer";

const EducationComponent = ({setTab, setState, loan, tab}: any) => {
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
                        <div className="col-lg-6 col-md-8 col-sm-12">
                            <h3 className="hh3">Next, let's talk about your education.</h3>
                            <div className="col-lg-12 col-md-12 col-sm-12 simple3">
                                <label>What's the highest degree you've completed?</label>
                            </div>
                            <div className="row loan--type">
                                <button className={"btn btn4 btn4--override col-lg-2 col-md-4 col-sm-6 "+(loan.degree === 'Undergraduate' ? 'selected': '')} onClick={(e: React.MouseEvent<HTMLButtonElement>) => setState('degree', 'Undergraduate')}>Undergraduate
                                    <span>
                                        <i className="icofont-check-circled soon"></i>
                                    </span>
                                </button>
                                <button className={"btn btn4 btn4--override col-lg-2 col-md-4 col-sm-6 "+(loan.degree === 'Graduate' ? 'selected': '')} onClick={(e: React.MouseEvent<HTMLButtonElement>) => setState('degree', 'Graduate')}>Graduate
                                    <span>
                                        <i className="icofont-check-circled soon"></i>
                                    </span>
                                </button>
                                <button className={"btn btn4 btn4--override col-lg-2 col-md-4 col-sm-6 "+(loan.degree === 'still working on it' ? 'selected': '')} onClick={(e: React.MouseEvent<HTMLButtonElement>) => setState('degree', 'still working on it')}>I'm still working on it.
                                    <span>
                                        <i className="icofont-check-circled soon"></i>
                                    </span>
                                </button>
                            </div>

                            <div className="col-lg-12 col-md-12 col-sm-12 simple">
                                <label>What are the details of your graduate degree?</label>
                            </div>
                            <div className="row">
                                <input type="text" value={loan.graduate_school} onChange={(e: ChangeEvent<HTMLInputElement>) => setState('graduate_school', e.target.value)} className="form-control col-lg-4 col-md-6 col-sm-12 address5" placeholder="Graduate school"/>
                                <input type="text" value={loan.graduate_program} onChange={(e: ChangeEvent<HTMLInputElement>) => setState('graduate_program', e.target.value)} className="form-control col-lg-4 col-md-6 col-sm-12 address1" placeholder="Graduate program"/>
                                <input type="text" value={loan.graduate_date} onChange={(e: ChangeEvent<HTMLInputElement>) => setState('graduate_date', e.target.value)} className="form-control col-lg-4 col-md-6 col-sm-12 address2" placeholder="Graduation date"/>
                            </div>

                            <div className="col-lg-12 col-md-12 col-sm-12 simple">
                                <label>What are the details of your undergraduate degree?</label>
                            </div>
                            <div className="row">
                                <input type="text" value={loan.undergraduate_school} onChange={(e: ChangeEvent<HTMLInputElement>) => setState('undergraduate_school', e.target.value)} className="form-control col-lg-4 col-md-6 col-sm-12 address5" placeholder="Undergraduate school"/>
                                <input type="text" value={loan.undergraduate_program} onChange={(e: ChangeEvent<HTMLInputElement>) => setState('undergraduate_program', e.target.value)} className="form-control col-lg-4 col-md-6 col-sm-12 address1" placeholder="Undergraduate program"/>
                                <input type="text" value={loan.undergraduate_date} onChange={(e: ChangeEvent<HTMLInputElement>) => setState('undergraduate_date', e.target.value)} className="form-control col-lg-4 col-md-6 col-sm-12 address2" placeholder="Graduation date"/>
                            </div>
                            <div className={'col-lg-12 col-md-12 col-sm-12 form--btn-wrapper mt-40 simple2'}>
                                <a className={'float-start'} onClick={(e: React.MouseEvent<HTMLAnchorElement>) => setTab('residence') }><i className="icofont-curved-left"></i>Back</a>
                                <button type='button' className={'btn btn-primary  btn-medium btn-large float-end btn--mobile'} onClick={(e: React.MouseEvent<HTMLButtonElement>) => setTab('employment')}>Next</button>
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

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(EducationComponent));
