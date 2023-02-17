import React from "react";
import {withRouter} from "react-router-dom";

import {connect} from "react-redux";

const Home = () => {
    return (
        <div id="main-wrapper">
            <h1>Home Coming soon</h1>
        </div>
    )
}

const mapDispatchToProps = (dispatch: React.Dispatch<any>) => {
    return {

    }
}

const mapStateToProps = () => ({
})

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Home));
