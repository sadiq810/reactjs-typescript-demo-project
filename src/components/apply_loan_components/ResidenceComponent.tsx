import React from "react";
import {connect} from "react-redux";
import {Link, withRouter} from "react-router-dom";
import SidebarComponent from "./components/SidebarComponent";
import LoanInfoSidebarComponent from "./components/LoanInfoSidebarComponent";
import {userStateType} from "../../redux/reducers/UserReducer";

const ResidenceComponent = ({setTab, setState, loan, tab}: any) => {
    return (
        <div className="container-fluid mWidth95percent bg-white">
            <div className="container pt-5 pb-5">
                <div className="row program--wrapper">
                    <div className="row">
                        <Link to={'/loans?tab=draft'} className={'d-inline-block font-weight--bold float-end text-end'}>Residence Save & Exit</Link>
                    </div>
                    <div className="row mt-40">
                        <div className="col-lg-3 col-md-4 col-sm-12">
                            <SidebarComponent tab={tab}/>
                        </div>
                        <div className="col-lg-6 col-md-8 col-sm-12">
                            <h3 className="hh3">Now, tell us about residence.</h3>
                            <div className="col-lg-12 col-md-12 col-sm-12 simple3">
                                <label>What is your current living arrangement?</label>
                                <p className="para">
                                    This help us find a loan that accounts for other monthly expenses
                                </p>
                            </div>
                            <div className="row loan--type">
                                <button className={"btn btn4 btn4--override col-lg-2 col-md-6 col-sm-12 "+(loan.living_status === 'own home' ? 'selected': '')} onClick={(e: React.MouseEvent<HTMLButtonElement>) => setState('living_status', 'own home')}>I own a home
                                    <span>
                                        <i className="icofont-check-circled soon"></i>
                                    </span>
                                </button>
                                <button className={"btn btn4 btn4--override col-lg-2 col-md-6 col-sm-12 "+(loan.living_status === 'on rent' ? 'selected': '')} onClick={(e: React.MouseEvent<HTMLButtonElement>) => setState('living_status', 'on rent')}>I rent
                                    <span>
                                        <i className="icofont-check-circled soon"></i>
                                    </span>
                                </button>
                                <button className={"btn btn4 btn4--override col-lg-2 col-md-6 col-sm-12 "+(loan.living_status === 'live with family or friends' ? 'selected': '')} onClick={(e: React.MouseEvent<HTMLButtonElement>) => setState('living_status', 'live with family or friends')}>I live with family or friends
                                    <span>
                                        <i className="icofont-check-circled soon"></i>
                                    </span>
                                </button>
                            </div>

                            <div className="col-lg-12 col-md-12 col-sm-12 simple">
                                <label>What's your contact information?</label>
                                <p className="para">
                                    We'll only reach out to you if we have questions about your loan.
                                </p>
                            </div>
                            <div className="row">
                                <input type="text" value={loan.street} onChange={(e:React.ChangeEvent<HTMLInputElement>) => setState('street', e.target.value)} className="form-control col-lg-4 col-md-6 col-sm-12 address1" placeholder="Street Address..."/>
                                <input type="text" value={loan.apartment} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setState('apartment', e.target.value)} className="form-control col-lg-4 col-md-6 col-sm-12 address2" placeholder="Apartment, unit , floor"/>
                                <input type="text" value={loan.city} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setState('city', e.target.value)} className="form-control col-lg-4 col-md-6 col-sm-12 address1" placeholder="City..."/>
                                <input type="text" value={loan.state} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setState('state', e.target.value)} className="form-control col-lg-4 col-md-6 col-sm-12 address2" placeholder="State..."/>
                                <input type="text" value={loan.zipcode} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setState('zipcode', e.target.value)} className="form-control col-lg-4 col-md-6 col-sm-12 address1" placeholder="ZipCode"/>
                            </div>

                            <div className={'col-lg-12 form--btn-wrapper mt-40 simple2'}>
                                <a className={'float-start'} onClick={(e: React.MouseEvent<HTMLAnchorElement>) => setTab('about_you') }><i className="icofont-curved-left"></i>Back</a>
                                <button type='button' className={'btn btn-primary  btn-medium btn-large float-end btn--mobile'} onClick={(e: React.MouseEvent<HTMLButtonElement>) => setTab('education')}>Next</button>
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

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(ResidenceComponent));
