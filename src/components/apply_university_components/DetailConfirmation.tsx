import React from "react";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import {userStateType} from "../../redux/reducers/UserReducer";
import {programStateType} from "../../redux/reducers/ProgramsReducer";

const DetailConfirmation = ({history, setStep, data}: any) => {
    return (
        <>
            <h3 className={'font-weight--bold'}>Almost there! Please have a look at all your information to confirm you are submitting the right information</h3>
            <form>
                <h4>What level of program are you interested in?</h4>
                <div style={{marginTop: '25px', marginLeft: '30px'}}>
                    <div className="single-trams">
                        <div className="title">
                            <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option2" defaultChecked={true}/>
                            <label className="form-check-label" htmlFor="inlineRadio2">{ data.graduate.split('_').join(' ')}</label>
                        </div>
                    </div>
                </div>

                <h4>What is the earliest date you can start?</h4>
                <div className="col-lg-8 mt-4" style={{marginTop: '25px', marginLeft: '30px'}}>
                    <table className={'table'}>
                        <thead>
                        <tr>
                            <th>Starting Dates:</th>
                            <th>Submission deadlines:</th>
                            <th>Status</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>
                                <div className="single-trams">
                                    <div className="title">
                                        <input className="form-check-input" type="radio" name="inlineRadioOptions3" id="inlineRadio3" value="option3" defaultChecked={true}/>
                                        <label className="form-check-label" htmlFor="inlineRadio3">{ data.start_date.split(',')[0]}</label>
                                    </div>
                                </div>
                            </td>
                            <td>{ data.start_date.split(',')[1]}</td>
                            <td><span className={'color-success'}>Open Now</span></td>
                        </tr>
                        </tbody>
                    </table>
                </div>

                <h4 className={'font-weight--bold pt-5'}>University Details</h4>
                <p className={'pt-4'}>We just need a few details so we can help you at every step of your application, and check for scholarships you won't find on university websites.</p>

                <h4>Your details</h4>
                <div className={'ps-0 mt-25'}>
                    <div className="row">
                        <div className="mb-3 col-lg-6 col-md-6 col-sm-12">
                            <p>Full Name</p>
                            <p className={'font-weight--bold'}>{data.name}</p>
                        </div>
                        <div className="mb-3 col-lg-6 col-md-6 col-sm-12">
                            <p>Username</p>
                            <p className={'font-weight--bold'}>{data.username}</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="mb-3 col-lg-6 col-md-6 col-sm-12">
                            <p>Nationality</p>
                            <p className={'font-weight--bold'}>{data.nationality}</p>
                        </div>
                        <div className="mb-3 col-lg-6 col-md-6 col-sm-12">
                            <p>Phone Number</p>
                            <p className={'font-weight--bold'}>{data.phone}</p>
                        </div>
                    </div>
                    <div className="mb-3">
                        <p>Email address</p>
                        <p className={'font-weight--bold'}>{data.email}</p>
                    </div>
                </div>

                <h4 className={'mt-25'}>Eligibility</h4>
                <div className="row mt-25">
                    <div className="row">
                        <div className="mb-3 col-lg-6 col-md-6 col-sm-12">
                            <p>Do you have a valid study permit/visa?</p>
                            <p className={'font-weight--bold'}>{data.permit}</p>
                        </div>
                        <div className="mb-3 col-lg-6 col-md-6 col-sm-12">
                            <p>Education country</p>
                            <p className={'font-weight--bold'}>{data.education_country}</p>
                        </div>
                        <div className="mb-3 col-lg-6 col-md-6 col-sm-12">
                            <p>Education level</p>
                            <p className={'font-weight--bold'}>{data.education_level}</p>
                        </div>
                        <div className="mb-3 col-lg-6 col-md-6 col-sm-12">
                            <p>Grading Scheme</p>
                            <p className={'font-weight--bold'}>{data.grading_scheme}</p>
                        </div>

                        <div className="mb-3 col-lg-12 col-md-12 col-sm-12">
                            <p>English Exam type</p>
                            <p className={'font-weight--bold'}>{data.english_exam_type}</p>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-lg-5 col-md-5 col-sm-12" style={{marginRight: 'auto'}}>
                            <h4>GMAT Exam Score</h4>
                            <div className="row mt-25">
                                <p>Verbal</p>
                                <div className="mb-3 col-lg-6 col-md-6 col-sm-6">
                                    <p>Score: <span className={'font-weight--bold'}>{data.gmat_verbal_score}</span></p>
                                </div>
                                <div className="mb-3 col-lg-6 col-md-6 col-sm-6">
                                    <p>Rank: <span className={'font-weight--bold'}>{data.gmat_verbal_rank}%</span></p>
                                </div>

                                <p>Quantitative</p>
                                <div className="mb-3 col-lg-6 col-md-6 col-sm-6">
                                    <p>Score: <span className={'font-weight--bold'}>{data.gmat_quantitative_score}</span></p>
                                </div>
                                <div className="mb-3 col-lg-6 col-md-6 col-sm-6">
                                    <p>Rank: <span className={'font-weight--bold'}>{data.gmat_quantitative_score}%</span></p>
                                </div>

                                <p>Writing</p>
                                <div className="mb-3 col-lg-6 col-md-6 col-sm-6">
                                    <p>Score: <span className={'font-weight--bold'}>{data.gmat_writing_score}</span></p>
                                </div>
                                <div className="mb-3 col-lg-6 col-md-6 col-sm-6">
                                    <p>Rank: <span className={'font-weight--bold'}>{data.gmat_writing_score}%</span></p>
                                </div>

                                <p>Total</p>
                                <div className="mb-3 col-lg-6 col-md-6 col-sm-6">
                                    <p>Score: <span className={'font-weight--bold'}>{data.gmat_total_score}</span></p>
                                </div>
                                <div className="mb-3 col-lg-6 col-md-6 col-sm-6">
                                    <p>Rank: <span className={'font-weight--bold'}>{data.gmat_total_score}%</span></p>
                                </div>

                            </div>
                        </div>
                        <div className="col-lg-5 col-md-5 col-sm-12">
                            <h4>GRE Exam Score</h4>
                            <div className="row mt-25">
                                <p>Verbal</p>
                                <div className="mb-3 col-lg-6 col-md-6 col-sm-6">
                                    <p>Score: <span className={'font-weight--bold'}>{data.gre_verbal_score}</span></p>
                                </div>
                                <div className="mb-3 col-lg-6 col-md-6 col-sm-6">
                                    <p>Rank: <span className={'font-weight--bold'}>{data.gre_verbal_score}%</span></p>
                                </div>

                                <p>Quantitative</p>
                                <div className="mb-3 col-lg-6 col-md-6 col-sm-6">
                                    <p>Score: <span className={'font-weight--bold'}>{data.gre_quantitative_score}</span></p>
                                </div>
                                <div className="mb-3 col-lg-6 col-md-6 col-sm-6">
                                    <p>Rank: <span className={'font-weight--bold'}>{data.gre_quantitative_score}%</span></p>
                                </div>

                                <p>Writing</p>
                                <div className="mb-3 col-lg-6 col-md-6 col-sm-6">
                                    <p>Score: <span className={'font-weight--bold'}>{data.gre_writing_score}</span></p>
                                </div>
                                <div className="mb-3 col-lg-6 col-md-6 col-sm-6">
                                    <p>Rank: <span className={'font-weight--bold'}>{data.gre_writing_score}%</span></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={'col-lg-8 form--btn-wrapper mt-40'}>
                    <button className={'btn btn-default  btn-medium btn-large'} onClick={(e: React.MouseEvent<HTMLButtonElement>) => history.goBack() }>Back</button>
                    <button type='button' className={'btn btn-primary  btn-medium btn-large'} onClick={(e: React.MouseEvent<HTMLButtonElement>) => setStep('done')}>Submit</button>
                </div>
            </form>
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
    loading: programs.loading,
    isLoggedIn: users.isLoggedIn,
    error: programs.error
})

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(DetailConfirmation));
