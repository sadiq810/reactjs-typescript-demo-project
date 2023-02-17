import React from "react";
import {connect} from "react-redux";
import {Link, withRouter} from "react-router-dom";
import SidebarComponent from "./components/SidebarComponent";
import LoanInfoSidebarComponent from "./components/LoanInfoSidebarComponent";
import {userStateType} from "../../redux/reducers/UserReducer";

const YourRateComponent = ({setTab, setState, loan, tab, submit}: any) => {
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
                            <h3 className="hh3">Almost there! Your rate is just a click away.</h3>
                            <p className="para">
                                No commitments. No dings on your credit score.
                            </p>
                            <div className="col-lg-12 col-md-12 col-sm-12">
                                <label className="last1">Information regarding rates, costs and fees associated with your Kyalo Edu Finance laon application are detailed below</label>
                                <p className="para8">
                                    Simply put, a paragraph is a collection of sentences all related to a central topic, idea, or theme. Paragraphs act as structural tools for writers to organize their thoughts into an ideal progression, and they also help readers process those thoughts effortlessly. Imagine how much harder reading and writing would be if everything was just one long block of text.
                                    There’s a lot of flexibility when it comes to writing paragraphs, but if there’s one steadfast rule, it’s this: Paragraphs should relate to one main topic or point. The paragraph itself often contains multiple points spanning several sentences, but they should all revolve around one core theme. Just as sentences build upon each other to communicate the paragraph’s core theme, paragraphs work together to communicate the core theme of the writing as a whole.
                                    That’s the basic idea, but in practice there’s more to it. Let’s look at the four main types of paragraphs to learn how and when to use them.
                                </p>
                                <p>
                                    Essays, academic papers, and journalistic articles mainly use expository paragraphs to thoroughly explain an individual point. These paragraphs rely on data, statistics, or citations from other sources to present facts and build up to an irrefutable conclusion.
                                </p>
                                <div className="form-check last2">
                                    <input className="form-check-input" type="radio" name="flexRadioDefault" onClick={(e: React.MouseEvent<HTMLInputElement>) => setState('rate_checking', 'kyaloOnly')} defaultChecked={loan.rate_checking === 'kyaloOnly'}/>
                                    <label className="form-check-label" htmlFor="flexRadioDefault1">
                                        Check my rate with Kyalo Edu Finance only
                                    </label>
                                </div>
                                <div className="form-check last2">
                                    <input className="form-check-input" type="radio" name="flexRadioDefault"  onClick={(e: React.MouseEvent<HTMLInputElement>) => setState('rate_checking', 'kyaloAndLantern')} defaultChecked={loan.rate_checking === 'kyaloAndLantern'}/>
                                    <label className="form-check-label" htmlFor="flexRadioDefault1">
                                        Check my rate with Kyalo Edu Finance and  Lantern
                                    </label>
                                </div>
                                <p>Essays, academic papers, and journalistic articles mainly use expository paragraphs to thoroughly explain an individual point. These paragraphs rely on data, statistics, </p>
                            </div>
                            <div className={'col-lg-12 col-md-12 col-sm-12 form--btn-wrapper mt-40 simple2'}>
                                <a className={'float-start'} onClick={(e: React.MouseEvent<HTMLAnchorElement>) => setTab('employment') }><i className="icofont-curved-left"></i>Back</a>
                                <button type='button' className={'btn btn-primary  btn-medium btn-large float-end btn--mobile'} onClick={(e: React.MouseEvent<HTMLButtonElement>) => {submit();setTab('done')}}>Submit</button>
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

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(YourRateComponent));
