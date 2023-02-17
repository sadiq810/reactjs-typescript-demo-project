import Logo from "./Logo";
import Navigation from "./Navigation";
import {withRouter, Link} from 'react-router-dom';
import {connect} from "react-redux";
import AuthNavigation from "./AuthNavigation";
import {logoutUser} from "../redux/actions";
import {userStateType} from "../redux/reducers/UserReducer";

const Header = (props: any) => {

    return (
        <> {
            (props.history.location.pathname === '/login' || props.history.location.pathname === '/register') ?
                ('') : (
                    <header className={"header-five sticky-lg-top "+ (props.isLoggedIn ? '': 'bottom--shadow')}>
                        <div className={"header-bottom-area "+ (props.isLoggedIn ? 'bg-gray': 'bg-white')}>
                            <div className="container-fluid container-custom-150">
                                <div className="row align-items-center">
                                    <div className="col-lg-10 col-md-6 col-5">
                                        <div className="header-five-left-side-box" style={{float: 'left', marginTop: '2%'}}>
                                            <Logo />
                                        </div>
                                        <div className={'header-five-right-side'}>
                                            <div className="main-menu-area text-center ml-3">
                                                <nav className="navigation-menu">
                                                    {
                                                        props.isLoggedIn ? (<AuthNavigation />) : (<Navigation />)
                                                    }
                                                </nav>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-2 col-md-6 col-7">
                                        <div className="header-five-right-side">
                                            {
                                                props.isLoggedIn ? (
                                                    <>
                                                        <Link to="/my-profile" className={'user--avatar'}>
                                                            <i className={'icofont-user'}></i>
                                                        </Link>
                                                        <a href={'#'} className={'logout--icon'} onClick={(e: React.MouseEvent<HTMLAnchorElement>) => {props.logout(); props.history.push('/')}}>
                                                            <i className={'icofont-long-arrow-right'}></i>
                                                        </a>
                                                    </>
                                                ) : (
                                                    <Link to="/login" className="sign-up-action-button btn-bg-5 btn-lg btn">
                                                        Log in
                                                    </Link>)
                                            }

                                            {/* mobile menu */}
                                            <div className="mobile-navigation-icon d-block d-lg-none" id="mobile-menu-trigger">
                                                <i />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </header>
                )
            }
        </>)
}

const mapDispatchToProps = (dispatch: React.Dispatch<any>) => {
    return {
        logout: () => dispatch(logoutUser()),
    }
}

const mapStateToProps = ({users}: {users: userStateType}) => ({
    user: users.user,
    isLoggedIn: users.isLoggedIn,
})

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Header));
