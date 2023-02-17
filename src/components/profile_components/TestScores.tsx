import React, {useState} from "react";
import {updateUserEducationHistory, updateUserProfile, deleteUserEducationFromHistory} from "../../redux/actions";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import TextBoxComponent from "../TextBoxComponent";
import { Toggle } from 'rsuite';
import {userStateType} from "../../redux/reducers/UserReducer";
import {userType} from "../../assets/data/users";

const TestScores = ({save, user}: any) => {
    const [info, setInfo] = useState<userType>({...user});
    const [gmat, setGmat] = useState<boolean>(user.english_exam_type && user.english_exam_type != '' ? true: false);
    const [gre, setGre] = useState<boolean>(user.english_exam_type && user.english_exam_type != '' ? true: false);

    const setState = (field: string, value: string) => {
        setInfo({...info, [field]: value});
    }

    const saveUserInfo = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        save(info);
    }

    return (
        <>
            <div className="container-fluid mWidth95percent bg-white">
                <div className="container pt-5 pb-5">
                    <div className="col-lg-12 col-md-12 col-sm-12 program--main-box">
                        <div className="row program--wrapper">
                            <h5 className={'font-weight-bold mb-2'}>Test Scores <span className={'font-weight--normal float-end profile--status'}>Not Complete <p className={'bg-success'}>&nbsp;</p></span></h5>
                            <form action="#" onSubmit={saveUserInfo}>
                            <div className="row mt-25">
                                <div className="row">
                                    <div className="mb-3 col-lg-4 col-md-4 col-sm-12">
                                        <TextBoxComponent setState={setState} label={'English Exam Type'} value={info.english_exam_type} field={'english_exam_type'} placeholder={"I don't have this"}/>
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <h4 className={'mt-25'}>Additional Qualifications</h4>
                                <div className="col-lg-5 col-md-5 col-sm-12 mt-40" style={{marginRight: 'auto'}}>
                                    <h6>GMAT Exam Score <Toggle size="sm" onChange={() => setGmat(!gmat)} defaultChecked={gmat}/></h6>
                                    <div className="row mt-25">
                                        <div className="mb-3 col-lg-6 col-md-6 col-sm-6">
                                            <TextBoxComponent isDisabled={!gmat} setState={setState} label={'Verbal'} value={info.gmat_verbal_score} field={'gmat_verbal_score'} placeholder={'Score'}/>
                                        </div>
                                        <div className="mb-3 col-lg-6 col-md-6 col-sm-6">
                                            <TextBoxComponent isDisabled={!gmat} setState={setState} label={'&nbsp;'} value={info.gmat_verbal_rank} field={'gmat_verbal_rank'} placeholder={'Rank %'}/>
                                        </div>

                                        <div className="mb-3 col-lg-6 col-md-6 col-sm-6">
                                            <TextBoxComponent isDisabled={!gmat} setState={setState} label={'Quantitative'} value={info.gmat_quantitative_score} field={'gmat_quantitative_score'} placeholder={'Score'}/>
                                        </div>
                                        <div className="mb-3 col-lg-6 col-md-6 col-sm-6">
                                            <TextBoxComponent isDisabled={!gmat} setState={setState} label={'&nbsp;'} value={info.gmat_quantitative_rank} field={'gmat_quantitative_rank'} placeholder={'Rank %'}/>
                                        </div>

                                        <div className="mb-3 col-lg-6 col-md-6 col-sm-6">
                                            <TextBoxComponent isDisabled={!gmat} setState={setState} label={'Writing'} value={info.gmat_writing_score} field={'gmat_writing_score'} placeholder={'Score'}/>
                                        </div>
                                        <div className="mb-3 col-lg-6 col-md-6 col-sm-6">
                                            <TextBoxComponent isDisabled={!gmat} setState={setState} label={'&nbsp;'} value={info.gmat_writing_rank} field={'gmat_writing_rank'} placeholder={'Rank %'}/>
                                        </div>

                                        <div className="mb-3 col-lg-6 col-md-6 col-sm-6">
                                            <TextBoxComponent isDisabled={!gmat} setState={setState} label={'Total'} value={info.gmat_total_score} field={'gmat_total_score'} placeholder={'Score'}/>
                                        </div>
                                        <div className="mb-3 col-lg-6 col-md-6 col-sm-6">
                                            <TextBoxComponent isDisabled={!gmat} setState={setState} label={'&nbsp;'} value={info.gmat_total_rank} field={'gmat_total_rank'} placeholder={'Rank %'}/>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-5 col-md-5 col-sm-12 mt-40">
                                    <h6>GRE Exam Score <Toggle size="sm" onChange={() => setGre(!gre)} defaultChecked={gre}/> </h6>
                                    <div className="row mt-25">
                                        <div className="mb-3 col-lg-6 col-md-6 col-sm-6">
                                            <TextBoxComponent isDisabled={!gre} setState={setState} label={'Verbal'} value={info.gre_verbal_score} field={'gre_verbal_score'} placeholder={'Score'}/>
                                        </div>
                                        <div className="mb-3 col-lg-6 col-md-6 col-sm-6">
                                            <TextBoxComponent isDisabled={!gre} setState={setState} label={'&nbsp;'} value={info.gre_verbal_rank} field={'gre_verbal_rank'} placeholder={'Rank %'}/>
                                        </div>

                                        <div className="mb-3 col-lg-6 col-md-6 col-sm-6">
                                            <TextBoxComponent isDisabled={!gre} setState={setState} label={'Quantitative'} value={info.gre_quantitative_score} field={'gre_quantitative_score'} placeholder={'Score'}/>
                                        </div>
                                        <div className="mb-3 col-lg-6 col-md-6 col-sm-6">
                                            <TextBoxComponent isDisabled={!gre} setState={setState} label={'&nbsp;'} value={info.gre_quantitative_rank} field={'gre_quantitative_rank'} placeholder={'Rank %'}/>
                                        </div>

                                        <div className="mb-3 col-lg-6 col-md-6 col-sm-6">
                                            <TextBoxComponent isDisabled={!gre} setState={setState} label={'Writing'} value={info.gre_writing_score} field={'gre_writing_score'} placeholder={'Score'}/>
                                        </div>
                                        <div className="mb-3 col-lg-6 col-md-6 col-sm-6">
                                            <TextBoxComponent isDisabled={!gre} setState={setState} label={'&nbsp;'} value={info.gre_writing_rank} field={'gre_writing_rank'} placeholder={'Rank %'}/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                                <div className="row mt-40">
                                    <button type={'submit'} className={'btn btn-primary btn-large btn-medium m-auto'}>Save</button>
                                </div>
                            </form>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}


const mapDispatchToProps = (dispatch: React.Dispatch<any>) => {
    return {
        save: (payload: {type: string, payload: any}) => dispatch(updateUserProfile(payload)),
    }
};

const mapStateToProps = ({users}: {users: userStateType}) => ({
    user: users.user,
    isLoggedIn: users.isLoggedIn,
    error: users.error
})

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(TestScores));
