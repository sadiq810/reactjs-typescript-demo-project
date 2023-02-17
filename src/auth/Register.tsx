import {withRouter, Link} from 'react-router-dom';

import mission from '../assets/images/mission.png';
import SocialLogin from "./SocialLogin";
import React, {ChangeEvent, useEffect, useState} from "react";
import {registerUser} from "../redux/actions";
import {connect} from "react-redux";
import {userStateType} from "../redux/reducers/UserReducer";
import {userType} from "../assets/data/users";

type newUserType = {
    name: string,
    username: string,
    email: string,
    password: string,
    terms: boolean
}

const Register = (props: any) => {

    let [username, setUsername] = useState<string>('');
    let [name, setName] = useState<string>('');
    let [email, setEmail] = useState<string>('');
    let [password, setPassword] = useState<string>('');
    let [terms, setTerms] = useState<boolean>(false);

    useEffect(() => {
        if (props.message) {
           setUsername('');
           setPassword('');
           setName('');
           setEmail('');
           setTerms(false);
        }
    });

    const submit = (e: ChangeEvent<HTMLFormElement>) => {
        e.preventDefault();
        props.registerHandler({user: {name, username, email, password, terms}, users: props.users})
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
                                            <p className={'float-end'}> <span className={'fw-light'}>Already a member?</span> <Link to={'/login'}> Sign In</Link></p>
                                        </div>
                                    </div>
                                    <div className="row mt-40 justify-content-center mb-20">
                                        <div className="col-lg-6">
                                            <div className="login-content">
                                                <div className="login-header mb-40">
                                                    <h4 className={'bold--text font20'}>Sign Up to Kyalo Edu Finance</h4>
                                                </div>

                                                <SocialLogin gogoleText={'Sign Up with google'}/>

                                                <form action="#" onSubmit={submit}>
                                                    {props.error && (<div className="alert alert-danger">{props.error}</div>)}
                                                    {props.message && (<div className="alert alert-success">{props.message}</div>)}
                                                    <div className="row two--inputs">
                                                        <div className="col-lg-6 col-md-6 col-sm-12">
                                                            <label htmlFor="fullname" className={'bold--text'}>Full Name</label>
                                                            <input type="text" id="fullname" onChange={(e: ChangeEvent<HTMLInputElement>) => setName(e.target.value)} value={name}  required/>
                                                        </div>
                                                        <div className="col-lg-6 col-md-6 col-sm-12">
                                                            <label htmlFor="username" className={'bold--text'}>Username</label>
                                                            <input type="text" id="username" onChange={(e:ChangeEvent<HTMLInputElement>) => setUsername(e.target.value)} value={username}  required/>
                                                        </div>
                                                    </div>

                                                    <label htmlFor="email" className={'bold--text'}>Email Address</label>
                                                    <input type="email"  onChange={(e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)} value={email} required/>

                                                    <label htmlFor="password" className={'bold--text'}>Password</label>
                                                    <input type="password"  onChange={(e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)} value={password}  required/>

                                                    <div className="remember-forget-wrap mb-30">
                                                        <div className="remember-wrap">
                                                            <input type="checkbox" checked={terms} onChange={(e: ChangeEvent<HTMLInputElement>) => setTerms(!terms)} required/>
                                                            <p className={'font-weight--normal'} style={{fontSize: '10px'}}>Creating an account means you're okay with our Terms of Services, Privacy Policy and our default Notification Settings.</p>
                                                            <span className="checkmark"></span>
                                                        </div>
                                                    </div>

                                                    <button type="submit" className="btn-primary btn-large bold--text">Create Account</button>
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


const mapDispatchToProps = (dispatch: React.Dispatch<any>) => {
    // @ts-ignore
    return {
        registerHandler: (payload: { user: newUserType, users: userType[] }) => {
            dispatch(registerUser(payload));
        },
    }
}

const mapStateToProps = ({users}: {users: userStateType}) => ({
    error: users.regError,
    message: users.regMsg,
    users: users.userList,
})

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Register));
