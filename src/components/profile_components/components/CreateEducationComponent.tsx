import React from "react";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import TextBoxComponent from "../../TextBoxComponent";
import {userStateType} from "../../../redux/reducers/UserReducer";

const CreateEducationComponent = ({saveEducation, setEdu, education}: any) => {
    return (
        <div className="container-fluid mWidth95percent bg-white mt-40">
            <div className="container pt-5 pb-5">
                <div className="col-lg-12 col-md-12 col-sm-12 program--main-box">
                    <div className="row program--wrapper">
                        <form action="#" onSubmit={saveEducation}>
                            <h4 className={'mt-25'}>Schools Attended</h4>
                            <div className={'ps-0 mt-25'}>
                                <div className="row">
                                    <div className="mb-3 col-lg-4 col-md-4 col-sm-12">
                                        <TextBoxComponent setState={setEdu} label={'Level of Education'} value={education.education_level} field={'education_level'}/>
                                    </div>
                                    <div className="mb-3 col-lg-4 col-md-4 col-sm-12">
                                        <TextBoxComponent setState={setEdu} label={'Country of Institution'} value={education.education_country} field={'education_country'}/>
                                    </div>
                                    <div className="mb-3 col-lg-4 col-md-4 col-sm-12">
                                        <TextBoxComponent setState={setEdu} label={'Name of Institution'} value={education.institute_name} field={'institute_name'}/>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="mb-3 col-lg-4 col-md-4 col-sm-12">
                                        <TextBoxComponent setState={setEdu} label={'Primary Language of Institution'} value={education.institute_language} field={'institute_language'}/>
                                    </div>
                                    <div className="mb-3 col-lg-4 col-md-4 col-sm-12">
                                        <TextBoxComponent setState={setEdu} label={'Attended Institution From'} value={education.institute_from} field={'institute_from'}/>
                                    </div>
                                    <div className="mb-3 col-lg-4 col-md-4 col-sm-12">
                                        <TextBoxComponent setState={setEdu} label={'Attended Institution To'} value={education.institute_to} field={'institute_to'}/>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="mb-3 col-lg-4 col-md-4 col-sm-12">
                                        <TextBoxComponent setState={setEdu} label={'Degree Awarded'} value={education.degree_title} field={'degree_title'}/>
                                    </div>
                                    <div className="mb-3 col-lg-4 col-md-4 col-sm-12">
                                        <TextBoxComponent setState={setEdu} label={'Degree Awarded On'} value={education.degree_awarded_on} field={'degree_awarded_on'}/>
                                    </div>
                                </div>
                            </div>
                            <h4 className={'mt-25'}>Schools Address</h4>
                            <div className={'ps-0 mt-25'}>
                                <div className="row">
                                    <div className="mb-3 col-lg-4 col-md-4 col-sm-12">
                                        <TextBoxComponent setState={setEdu} label={'Address'} value={education.address} field={'address'}/>
                                    </div>
                                    <div className="mb-3 col-lg-4 col-md-4 col-sm-12">
                                        <TextBoxComponent setState={setEdu} label={'City/Town'} value={education.city} field={'city'}/>
                                    </div>
                                    <div className="mb-3 col-lg-4 col-md-4 col-sm-12">
                                        <TextBoxComponent setState={setEdu} label={'Province'} value={education.state} field={'state'}/>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="mb-3 col-lg-4 col-md-4 col-sm-12">
                                        <TextBoxComponent setState={setEdu} label={'Postal/Zip Code'} value={education.zip_code} field={'zip_code'}/>
                                    </div>
                                </div>

                                <div className="row mt-40">
                                    <button type={'submit'} className={'btn btn-primary btn-large btn-medium m-auto'}>Save</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}


const mapDispatchToProps = (dispatch: React.Dispatch<any>) => {
    return {

    }
};

const mapStateToProps = ({users}: {users: userStateType}) => ({
    user: users.user,
    isLoggedIn: users.isLoggedIn,
    error: users.error
})

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(CreateEducationComponent));
