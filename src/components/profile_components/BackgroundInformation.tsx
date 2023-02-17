import React, {useState} from "react";
import {updateUserProfile} from "../../redux/actions";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import TextBoxComponent from "../TextBoxComponent";
import TextAreaComponent from "../TextAreaComponent";
import {userStateType} from "../../redux/reducers/UserReducer";

const BackgroundInformation = ({save, user}: any) => {
    const [info, setInfo] = useState({...user});

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
                            <h5 className={'font-weight-bold mb-2'}>Background Information <span className={'font-weight--normal float-end profile--status'}>Completed <p className={'bg-success'}>&nbsp;</p></span></h5>
                            <form action="#" onSubmit={saveUserInfo}>
                                <div className="row mt-25">
                                    <div className="row">
                                        <div className="mb-3 col-lg-12 col-md-12 col-sm-12">
                                            <TextBoxComponent setState={setState} label={'Have you been refused a visa from Canada, the USA, the United Kingdom, New Zealand or Australia ?'} value={info.is_visa_refused} field={'is_visa_refused'} key={'is_visa_refused'} placeholder={"I don't have this"}/>
                                        </div>
                                        <div className="mb-3 col-lg-12 col-md-12 col-sm-12 mt-40">
                                            <TextAreaComponent setState={setState} label={'If you answered "Yes" to any of the questions above, please provide more details below:'} value={info.visa_refused_reason} field={'visa_refused_reason'} key={'visa_refused_reason'} placeholder={"Provide details..."} styleObj={{height: '270px'}}/>
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
        save: (payload: any) => dispatch(updateUserProfile(payload)),
    }
};

const mapStateToProps = ({users} : {users: userStateType}) => ({
    user: users.user,
    isLoggedIn: users.isLoggedIn,
    error: users.error
})

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(BackgroundInformation));
