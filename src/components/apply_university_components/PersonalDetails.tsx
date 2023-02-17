import React from "react";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import TextBoxComponent from "../TextBoxComponent";
import {userStateType} from "../../redux/reducers/UserReducer";
import {programStateType} from "../../redux/reducers/ProgramsReducer";

const PersonalDetails = ({history, setStep, setState, data}: any) => {
    const submit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStep('confirmation');
    }

    return (
        <>
            <h3 className={'font-weight--bold'}>University Details</h3>
            <p>We just need a few details so we can help you at every step of your application, and check for scholarships you won't find on university websites.</p>
            <form action="#" onSubmit={submit}>
                <h4>Your details</h4>
                <div className={'ps-0 mt-25'}>
                    <div className="row">
                        <div className="mb-3 col-lg-6 col-md-6 col-sm-12">
                            <TextBoxComponent setState={setState} label={'Full Name'} value={data.name} field={'name'}/>
                        </div>
                        <div className="mb-3 col-lg-6 col-md-6 col-sm-12">
                            <TextBoxComponent setState={setState} label={'Username'} value={data.username} field={'username'}/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="mb-3 col-lg-6 col-md-6 col-sm-12">
                            <TextBoxComponent setState={setState} label={'Nationality'} value={data.nationality} field={'nationality'}/>
                        </div>
                        <div className="mb-3 col-lg-6 col-md-6 col-sm-12">
                            <TextBoxComponent setState={setState} label={'Phone Number'} value={data.phone} field={'phone'}/>
                        </div>
                    </div>
                    <div className="mb-3">
                        <TextBoxComponent setState={setState} label={'Email address'} value={data.email} field={'email'}/>
                    </div>
                </div>

                <h4>Eligibility</h4>
                <div className="row mt-25">
                    <div className="row">
                        <div className="mb-3 col-lg-6 col-md-6 col-sm-12">
                            <label htmlFor="email" className="form-label">Do you have a valid study permit/visa?</label>
                            <select className="form-select form-select-sm" value={data.permit} onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setState('permit', e.target.value)}>
                                <option selected>Please select</option>
                                <option value="yes">Yes</option>
                                <option value="No">No</option>
                            </select>
                        </div>
                        <div className="mb-3 col-lg-6 col-md-6 col-sm-12">
                            <label htmlFor="email" className="form-label">Education country</label>
                            <select className="form-select form-select-sm"  value={data.education_country} onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setState('education_country', e.target.value)}>
                                <option selected>Please select</option>
                                <option value="Australia">Australia</option>
                                <option value="Japan">Japan</option>
                                <option value="United States">United States</option>
                            </select>
                        </div>
                        <div className="mb-3 col-lg-6 col-md-6 col-sm-12">
                            <label htmlFor="email" className="form-label">Education level</label>
                            <select className="form-select form-select-sm" value={data.education_level} onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setState('education_level', e.target.value)}>
                                <option selected>Please select</option>
                                <option value="3 years bachelor degree">3 years bachelor degree</option>
                                <option value="4 years bachelor degree">4 years bachelor degree</option>
                                <option value="2 years bachelor degree">2 years bachelor degree</option>
                            </select>
                        </div>
                        <div className="mb-3 col-lg-6 col-md-6 col-sm-12">
                            <label htmlFor="email" className="form-label">Grading Scheme</label>
                            <select className="form-select form-select-sm" value={data.grading_scheme} onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setState('grading_scheme', e.target.value)}>
                                <option selected>Please select</option>
                                <option value="Relative">Relative</option>
                                <option value="Absolute">Absolute</option>
                            </select>
                        </div>

                        <div className="mb-3 col-lg-12 col-md-12 col-sm-12">
                            <label htmlFor="email" className="form-label">English Exam type</label>
                            <select className="form-select form-select-sm" value={data.english_exam_type} onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setState('english_exam_type', e.target.value)}>
                                <option selected>Please select</option>
                                <option value="TOFEL">TOFEL</option>
                                <option value="IELTS">IELTS</option>
                            </select>
                        </div>
                    </div>

                    <div className="row">
                        <div className="mb-3 col-lg-3 col-md-3 col-sm-3">
                            <TextBoxComponent setState={setState} label={'Reading'} value={data.english_reading} field={'english_reading'}/>
                        </div>
                        <div className="mb-3 col-lg-3 col-md-3 col-sm-3">
                            <TextBoxComponent setState={setState} label={'Listening'} value={data.english_listening} field={'english_listening'}/>
                        </div>
                        <div className="mb-3 col-lg-3 col-md-3 col-sm-3">
                            <TextBoxComponent setState={setState} label={'Writing'} value={data.english_writing} field={'english_writing'}/>
                        </div>
                        <div className="mb-3 col-lg-3 col-md-3 col-sm-3">
                            <TextBoxComponent setState={setState} label={'Speaking'} value={data.english_speaking} field={'english_speaking'}/>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-lg-5 col-md-5 col-sm-12" style={{marginRight: 'auto'}}>
                            <h4>GMAT Exam Score</h4>
                            <div className="row mt-25">
                                <div className="mb-3 col-lg-6 col-md-6 col-sm-6">
                                    <TextBoxComponent setState={setState} label={'Verbal'} value={data.gmat_verbal_score} field={'gmat_verbal_score'} placeholder={'Score'}/>
                                </div>
                                <div className="mb-3 col-lg-6 col-md-6 col-sm-6">
                                    <TextBoxComponent setState={setState} label={'&nbsp;'} value={data.gmat_verbal_rank} field={'gmat_verbal_rank'} placeholder={'Rank %'}/>
                                </div>

                                <div className="mb-3 col-lg-6 col-md-6 col-sm-6">
                                    <TextBoxComponent setState={setState} label={'Quantitative'} value={data.gmat_quantitative_score} field={'gmat_quantitative_score'} placeholder={'Score'}/>
                                </div>
                                <div className="mb-3 col-lg-6 col-md-6 col-sm-6">
                                    <TextBoxComponent setState={setState} label={'&nbsp;'} value={data.gmat_quantitative_rank} field={'gmat_quantitative_rank'} placeholder={'Rank %'}/>
                                </div>

                                <div className="mb-3 col-lg-6 col-md-6 col-sm-6">
                                    <TextBoxComponent setState={setState} label={'Writing'} value={data.gmat_writing_score} field={'gmat_writing_score'} placeholder={'Score'}/>
                                </div>
                                <div className="mb-3 col-lg-6 col-md-6 col-sm-6">
                                    <TextBoxComponent setState={setState} label={'&nbsp;'} value={data.gmat_writing_rank} field={'gmat_writing_rank'} placeholder={'Rank %'}/>
                                </div>

                                <div className="mb-3 col-lg-6 col-md-6 col-sm-6">
                                    <TextBoxComponent setState={setState} label={'Total'} value={data.gmat_total_score} field={'gmat_total_score'} placeholder={'Score'}/>
                                </div>
                                <div className="mb-3 col-lg-6 col-md-6 col-sm-6">
                                    <TextBoxComponent setState={setState} label={'&nbsp;'} value={data.gmat_total_rank} field={'gmat_total_rank'} placeholder={'Rank %'}/>
                                </div>

                            </div>
                        </div>
                        <div className="col-lg-5 col-md-5 col-sm-12">
                            <h4>GRE Exam Score</h4>
                            <div className="row mt-25">
                                <div className="mb-3 col-lg-6 col-md-6 col-sm-6">
                                    <TextBoxComponent setState={setState} label={'Verbal'} value={data.gre_verbal_score} field={'gre_verbal_score'} placeholder={'Score'}/>
                                </div>
                                <div className="mb-3 col-lg-6 col-md-6 col-sm-6">
                                    <TextBoxComponent setState={setState} label={'&nbsp;'} value={data.gre_verbal_rank} field={'gre_verbal_rank'} placeholder={'Rank %'}/>
                                </div>

                                <div className="mb-3 col-lg-6 col-md-6 col-sm-6">
                                    <TextBoxComponent setState={setState} label={'Quantitative'} value={data.gre_quantitative_score} field={'gre_quantitative_score'} placeholder={'Score'}/>
                                </div>
                                <div className="mb-3 col-lg-6 col-md-6 col-sm-6">
                                    <TextBoxComponent setState={setState} label={'&nbsp;'} value={data.gre_quantitative_rank} field={'gre_quantitative_rank'} placeholder={'Rank %'}/>
                                </div>

                                <div className="mb-3 col-lg-6 col-md-6 col-sm-6">
                                    <TextBoxComponent setState={setState} label={'Writing'} value={data.gre_writing_score} field={'gre_writing_score'} placeholder={'Score'}/>
                                </div>
                                <div className="mb-3 col-lg-6 col-md-6 col-sm-6">
                                    <TextBoxComponent setState={setState} label={'&nbsp;'} value={data.gre_writing_rank} field={'gre_writing_rank'} placeholder={'Rank %'}/>
                                </div>

                            </div>
                        </div>
                    </div>

                </div>
                <div className={'col-lg-8 form--btn-wrapper mt-40'}>
                    <button className={'btn btn-default  btn-medium btn-large'} onClick={(e: React.MouseEvent<HTMLButtonElement>) => history.goBack() }>Back</button>
                    <button type='submit' className={'btn btn-primary  btn-medium btn-large'}>Submit</button>
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

const mapStateToProps = ({users, programs} : {users: userStateType, programs: programStateType}) => ({
    user: users.user,
    programs: programs.programs,
    loading: programs.loading,
    isLoggedIn: users.isLoggedIn,
    error: programs.error
})

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(PersonalDetails));
