import React, {ChangeEvent} from "react";
import {connect} from "react-redux";
import {Link, withRouter} from "react-router-dom";
import SidebarComponent from "./components/SidebarComponent";
import LoanInfoSidebarComponent from "./components/LoanInfoSidebarComponent";
import {userStateType} from "../../redux/reducers/UserReducer";

type propType = {
    tab: string,
    loan: any,
    setState: (type: string, value: string) => void,
    setTab: (tabName: string) => void
}

const AboutYouComponent = ({setTab, loan, setState, tab}: any) => {
    return (
        <div className="container-fluid mWidth95percent bg-white">
            <div className="container pt-5 pb-5">
                <div className="row program--wrapper">
                    <div className="row">
                        <Link to={'/loans?tab=draft'} className={'d-inline-block font-weight--bold float-end text-end'}>Save & Exit</Link>
                    </div>
                    <div className="row mt-40">
                        <div className="col-lg-3 col-md-4">
                            <SidebarComponent tab={tab}/>
                        </div>
                        <div className="col-lg-6 col-md-8 col-sm-12">
                            <h3 className="hh3">Now, let's learn more about you.</h3>
                            <p className="label3">What is your date of birth?</p>
                            <div className="mb-3">
                                <input type="text" value={loan.dob} onChange={(e:ChangeEvent<HTMLInputElement>) => setState('dob', e.target.value)} className="form-control" placeholder="Date of birth........."/>
                            </div>

                            <div>
                                <p className="label4">What is your mobile number?</p>
                                <p className="para">
                                    We'll only reach out if we have questions about this loan application.
                                </p>
                                <div className="mb-3">
                                    <input type="text" value={loan.phone} onChange={(e:ChangeEvent<HTMLInputElement>) => setState('phone', e.target.value)} className="form-control" placeholder="Mobile Phone Number..."/>
                                </div>
                            </div>

                            <div className={'col-lg-12 form--btn-wrapper mt-40 simple2'}>
                                <a className={'float-start'} onClick={(e: React.MouseEvent<HTMLAnchorElement>) => setTab('loan_info') }><i className="icofont-curved-left"></i>Back</a>
                                <button type='button' className={'btn btn-primary  btn-medium btn-large float-end btn--mobile'} onClick={(e: React.MouseEvent<HTMLButtonElement>) => setTab('residence')}>Next</button>
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

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(AboutYouComponent));
