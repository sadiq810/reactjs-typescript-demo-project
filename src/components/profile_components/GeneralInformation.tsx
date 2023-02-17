import React, {useState} from "react";
import {updateUserProfile} from "../../redux/actions";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import TextBoxComponent from "../TextBoxComponent";
import RadioComponent from "../RadioComponent";
import {userType} from "../../assets/data/users";
import {userStateType} from "../../redux/reducers/UserReducer";

const GeneralInformation = ({save, user}: any) => {
    const [info, setInfo] = useState<userType>({...user});

    const setState = (field: string, value: string) => {
        setInfo({...info, [field]: value});
    }

    const submit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        save(info);
    };

    return (
        <div className="container-fluid mWidth95percent bg-white">
            <div className="container pt-5 pb-5">
                <div className="col-lg-12 col-md-12 col-sm-12 program--main-box">
                    <div className="row program--wrapper">
                        <h5 className={'font-weight-bold mb-2'}>Personal Information <span className={'font-weight--normal float-end profile--status'}>Not Complete <p className={'status--warning'}>&nbsp;</p></span></h5>
                        <p>(As included in your passport)</p>
                        <div className="row mt-25">
                            <form action="#" onSubmit={submit}>
                                <div className="row">
                                    <div className="mb-3 col-lg-4 col-md-4 col-sm-12">
                                        <TextBoxComponent setState={setState} label={'First Name'} value={info.name} field={'name'}/>
                                    </div>
                                    <div className="mb-3 col-lg-4 col-md-4 col-sm-12">
                                        <TextBoxComponent setState={setState} label={'Middle Name'} value={info.middle_name} field={'middle_name'}/>
                                    </div>
                                    <div className="mb-3 col-lg-4 col-md-4 col-sm-12">
                                        <TextBoxComponent setState={setState} label={'Last Name'} value={info.last_name} field={'last_name'}/>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="mb-3 col-lg-4 col-md-4 col-sm-12">
                                        <TextBoxComponent setState={setState} label={'Date of Birth'} value={info.dob} field={'dob'}/>
                                    </div>
                                    <div className="mb-3 col-lg-4 col-md-4 col-sm-12">
                                        <TextBoxComponent setState={setState} label={'First Language'} value={info.first_language} field={'first_language'}/>
                                    </div>
                                    <div className="mb-3 col-lg-4 col-md-4 col-sm-12">
                                        <TextBoxComponent setState={setState} label={'Country of Citizenship'} value={info.country_of_citizenship} field={'country_of_citizenship'}/>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="mb-3 col-lg-4 col-md-4 col-sm-12">
                                        <TextBoxComponent setState={setState} label={'Passport Number'} value={info.passport_no} field={'passport_no'}/>
                                    </div>
                                    <div className="mb-3 col-lg-4 col-md-4 col-sm-12">
                                        <label htmlFor="gender" className="form-label">Gender</label>
                                        <div className={'multiple--radio--wrapper'}>
                                            <div className="form-check">
                                                <RadioComponent setState={setState} name={"gender"} field={'gender'} value={'male'} label={'Male'}/>
                                            </div>
                                            <div className="form-check">
                                                <RadioComponent setState={setState} name={"gender"} field={'gender'} value={'female'} label={'Female'}/>
                                            </div>
                                            <div className="form-check">
                                                <RadioComponent setState={setState} name={"gender"} field={'gender'} value={'x'} label={'X'}/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mb-3 col-lg-4 col-md-4 col-sm-12">
                                        <label htmlFor="marital" className="form-label">Marital Status</label>
                                        <div className={'multiple--radio--wrapper'}>
                                            <div className="form-check">
                                                <RadioComponent setState={setState} name={"marital_status"} field={'marital_status'} value={'single'} label={'Single'}/>
                                            </div>
                                            <div className="form-check">
                                                <RadioComponent setState={setState} name={"marital_status"} field={'marital_status'} value={'married'} label={'Married'}/>
                                            </div>
                                            <div className="form-check">
                                                <RadioComponent setState={setState} name={"marital_status"} field={'marital_status'} value={'divorced'} label={'Divorced'}/>
                                            </div>
                                            <div className="form-check">
                                                <RadioComponent setState={setState} name={"marital_status"} field={'marital_status'} value={'separated'} label={'Separated'}/>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <h4 className={'mt-25'}>Address Detail</h4>
                                <div className={'ps-0 mt-25'}>
                                    <div className="row">
                                        <div className="mb-3 col-lg-8 col-md-8 col-sm-12">
                                            <TextBoxComponent setState={setState} label={'Address'} value={info.address} field={'address'}/>
                                        </div>
                                        <div className="mb-3 col-lg-4 col-md-4 col-sm-12">
                                            <TextBoxComponent setState={setState} label={'City/Town'} value={info.city} field={'city'}/>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="mb-3 col-lg-4 col-md-4 col-sm-12">
                                            <TextBoxComponent setState={setState} label={'Country'} value={info.country_of_citizenship} field={'country_of_citizenship'}/>
                                        </div>
                                        <div className="mb-3 col-lg-4 col-md-4 col-sm-12">
                                            <TextBoxComponent setState={setState} label={'Province/State'} value={info.state} field={'state'}/>
                                        </div>
                                        <div className="mb-3 col-lg-4 col-md-4 col-sm-12">
                                            <TextBoxComponent setState={setState} label={'Postal/Zip code'} value={info.zip_code} field={'zip_code'}/>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="mb-3 col-lg-4 col-md-4 col-sm-12">
                                            <TextBoxComponent setState={setState} label={'Email address'} value={info.email} field={'email'}/>
                                        </div>
                                        <div className="mb-3 col-lg-4 col-md-4 col-sm-12">
                                            <TextBoxComponent setState={setState} label={'Phone Number'} value={info.phone} field={'phone'}/>
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
        </div>
    )
}

const mapDispatchToProps = (dispatch: React.Dispatch<any>) => {
    return {
        save: (payload: {type: 'UPDATE_USER_PROFILE', payload: any}) => dispatch(updateUserProfile(payload)),
    }
}

const mapStateToProps = ({users}: {users: userStateType}) => ({
    user: users.user,
    isLoggedIn: users.isLoggedIn,
    error: users.error
})

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(GeneralInformation));
