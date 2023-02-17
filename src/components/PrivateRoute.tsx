import {Route, Redirect, withRouter} from 'react-router-dom';
import React from "react";
import {connect} from "react-redux";

const PrivateRoute = ({component: Component, rest, isAuthenticated, location}: any) => {
    return (<Route {...rest}
                   render={props =>
                       isAuthenticated ? (
                           <Component {...props} />
                       ) : (
                           <Redirect to={{ pathname: "/login", state: { from: location }}}/>
                       )
                   }
    />);
}

const mapDispatchToProps = (dispatch: React.Dispatch<any>) => {
    return {
        //
    }
}

const mapStateToProps = (state: any) => ({
    user: state.users.user,
    isAuthenticated: state.users.isLoggedIn,
})

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(PrivateRoute));
