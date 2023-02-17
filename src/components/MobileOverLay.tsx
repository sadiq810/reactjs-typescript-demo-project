import Logo from "./Logo";
import Navigation from "./Navigation";
import AuthNavigation from "./AuthNavigation";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import {userStateType} from "../redux/reducers/UserReducer";

const MobileOerLay = (props: any) => {
    return (
        <div className="mobile-menu-overlay" id="mobile-menu-overlay">
            <div className="mobile-menu-overlay__inner">
                <div className="mobile-menu-overlay__header">
                    <div className="container-fluid">
                        <div className="row align-items-center">
                            <div className="col-md-6 col-8">
                                <Logo />
                            </div>
                            <div className="col-md-6 col-4">
                                {/* mobile menu content */}
                                <div className="mobile-menu-content text-end">
                                    <span className="mobile-navigation-close-icon" id="mobile-menu-close-trigger" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mobile-menu-overlay__body">
                    <nav className="offcanvas-navigation">
                        {
                            props.isLoggedIn ? (<AuthNavigation />) : (<Navigation />)
                        }
                    </nav>
                </div>
            </div>
        </div>
    );
}

const mapDispatchToProps = (dispatch: React.Dispatch<any>) => {
    return {
        //logout: () => dispatch(logoutUser()),
    }
}

const mapStateToProps = ({users} : {users: userStateType}) => ({
    user: users.user,
    isLoggedIn: users.isLoggedIn,
})

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(MobileOerLay));
