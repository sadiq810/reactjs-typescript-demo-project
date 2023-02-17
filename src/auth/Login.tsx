import {ChangeEvent, useEffect, useState} from "react";
import {withRouter, Link} from 'react-router-dom';

import mission from '../assets/images/mission.png';
import SocialLogin from "./SocialLogin";
import {connect} from "react-redux";
import {authenticateUser} from "../redux/actions";
import {userStateType} from "../redux/reducers/UserReducer";
import {userType} from "../assets/data/users";

let Login = (props: any) => {
    let [email, setEmail] = useState<string>('');
    let [password, setPassword] = useState<string>('');

    useEffect(() => {
        if (props.isLoggedIn) {
            props.history.push('/programs');
        }
    });

    const submit = (e: React.ChangeEvent<HTMLFormElement>) => {
        e.preventDefault();
        props.login({users: props.users, credentials: {email, password}})
    }

    return (
        <div id="main-wrapper" className={'overflow-hidden'}>
            <div className="site-wrapper-reveal">
                <div className="login-register-page-area">
                    <div className="container-fluid" style={{padding: 0}}>
                        <div className="row" style={{margin: '-2px'}}>
                            <div className="col-lg-4" style={{padding: 0}}>
                                <img src={mission} alt=""/>
                            </div>
                            <div className="col-lg-8">
                                <div className="container-fluid" style={{paddingLeft: 0}}>
                                    <div className={'row'}>
                                        <div className="member-register mt-5">
                                            <p className={'float-end'}> <span className={'fw-light'}>Not a member?</span> <Link to={'/register'}> Register now</Link></p>
                                        </div>
                                    </div>
                                    <div className="row mt-40 justify-content-center mb-20">
                                        <div className="col-lg-6">
                                            <div className="login-content">
                                                <div className="login-header mb-40">
                                                    <h4 className={'bold--text font20'}>Log into Kyalo Edu Finance</h4>
                                                </div>

                                                <SocialLogin gogoleText={'Login with google'}/>

                                                <form action="#" onSubmit={submit}>
                                                    {props.error && (<div className="alert alert-danger">{props.error}</div>)}
                                                    <label htmlFor="email" className={'bold--text'}>Email Address</label>
                                                    <input type="email" onChange={(e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)} value={email} required/>

                                                    <label htmlFor="password" className={'bold--text'}>Password</label>
                                                    <input type="password" onChange={(e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)} value={password}  required/>

                                                    <button type="submit" className="btn-primary btn-large bold--text">Log in</button>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

type credentialType = {
    email: string,
    password: string
}

type payloadType = {
    users: userType,
    credentials: credentialType
}
const mapDispatchToProps = (dispatch: React.Dispatch<any>) => {
    return {
        login: (payload: payloadType) => dispatch(authenticateUser(payload)),
    }
}

const mapStateToProps = ({users}: {users: userStateType}) => ({
    user: users.user,
    users: users.userList,
    loading: users.loading,
    isLoggedIn: users.isLoggedIn,
    error: users.error
})

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Login));
