import React from "react";
import {deleteUserEducationFromHistory} from "../../../redux/actions";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import {userStateType} from "../../../redux/reducers/UserReducer";

const EducationHistoryComponent = ({user, edit, deleteEducation}: any) => {

    return (
        <div className="container-fluid mWidth95percent bg-white mt-40">
            <div className="container pt-5 pb-5">
                <div className="col-lg-12 col-md-12 col-sm-12 program--main-box">
                    <div className="row program--wrapper">
                        {
                            user.education_history.map((edu: any, index: number) => (
                                <div className={"row "+(index > 0 ? ' mt-40': ' mt-25')} key={edu.id}>
                                    <div className="col-lg-6 col-md-6 col-sm-12 position-relative ">
                                        <h3>{edu.institute_name}</h3>
                                        <div className={'position-absolute bottom-0'}>
                                            <button className={'btn btn-outline-default border-dark'} onClick={(e: React.MouseEvent<HTMLButtonElement>) => deleteEducation(edu.id)}>DELETE</button>
                                            <button className={'btn btn-outline-default border-dark'}  style={{marginLeft: '10px'}} onClick={(e: React.MouseEvent<HTMLButtonElement>) => edit(edu)}>EDIT</button>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-12">
                                        <table className={'table table-responsive'}>
                                            <tbody>
                                            <tr>
                                                <th>Address: </th>
                                                <td>{edu.address}</td>
                                            </tr>
                                            <tr>
                                                <th>Postal/Zip code: </th>
                                                <td>{edu.zip_code}</td>
                                            </tr>
                                            <tr>
                                                <th>Level: </th>
                                                <td>{edu.education_level}</td>
                                            </tr>
                                            <tr>
                                                <th>Attended: </th>
                                                <td>{edu.institute_from} - {edu.institute_to}</td>
                                            </tr>
                                            <tr>
                                                <th>Language: </th>
                                                <td>{ edu.institute_language }</td>
                                            </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}


const mapDispatchToProps = (dispatch: React.Dispatch<any>) => {
    return {
        deleteEducation: (payload: {type: string, payload: any}) => dispatch(deleteUserEducationFromHistory(payload)),
    }
};

const mapStateToProps = ({users}: {users: userStateType}) => ({
    user: users.user,
    isLoggedIn: users.isLoggedIn,
})

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(EducationHistoryComponent));
