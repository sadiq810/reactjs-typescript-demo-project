import {connect} from "react-redux";
import {userStateType} from "../redux/reducers/UserReducer";

const Logo = ({isLoggedIn}: any) => {
    return (
        <div className="logo">
            <a href="/">
                {
                    isLoggedIn ? (<img src="assets/images/logo/logo2.png" className="img-fluid" style={{width: '88px'}} alt="" />) : (<img src="assets/images/logo/logo.png" className="img-fluid" alt="" />)
                }
            </a>
        </div>
    )
}


const mapDispatchToProps = (dispatch: React.Dispatch<any>) => {
    return {

    }
}

const mapStateToProps = ({users}: {users: userStateType}) => ({
    user: users.user,
    isLoggedIn: users.isLoggedIn,
})

export default connect(mapStateToProps, mapDispatchToProps)(Logo);
