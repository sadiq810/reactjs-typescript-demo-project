import React from "react";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";

const WalletComponent = ({user, history}: any) => {

    return (
        <div className="container-fluid mWidth95percent bg-white">
            <div className="container pt-5 pb-5">
                <div className="row program--wrapper">
                    <div className="row mt-25">
                        <div className="col-lg-4 col-md-6 col-sm-12  mt-25">
                            <div className="wallet--card position-relative">
                                <h3>K.E.F Card</h3>
                                <p className={'wallet--info'}>
                                    <span>Virtual Wallet</span>
                                    <span>W0098686USD</span>
                                </p>
                                <p className={'position-absolute'}>{ user.name } {user.middle_name} {user.last_name}</p>
                            </div>
                        </div>

                        <div className="col-lg-8 col-md-6 col-sm-12 position-relative ps-5 mt-25 wallet--second">
                            <div>
                                <p className={'gray--label font12 m-0'}>Your wallet</p>
                                <h3 className={'position-absolute wallet--no'}>35,000,00 UGX</h3>
                            </div>
                            <div className={'position-absolute bottom-0 wallet--footer'}>
                                <p className={'gray--label float-start'}>Virtual Wallet Number</p>
                                <p className={'float-end'}>W0098686USD</p>
                            </div>
                        </div>
                    </div>

                    <div className="row mt-40">
                        <div className="col-lg-4 col-md-4 col-sm-12 mt-25">
                            <div className="row payment--option" onClick={() => history.push('/payment-options/credit-wallet')}>
                                <div className="wallet--deposit-btn">
                                    <i className="icofont-wallet"></i>
                                    <p className={''}>DEPOSIT</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-4 col-sm-12 margin--left mt-25">
                            <div className="row payment--option" >
                                <div className="wallet--deposit-btn">
                                    <i className="icofont-wallet"></i>
                                    <p className={''}>WITHDRAW</p>
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
    return {

    }
}

const mapStateToProps = (state: any) => ({
    user: state.users.user,
    isLoggedIn: state.users.isLoggedIn,
    error: state.users.error
})

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(WalletComponent));
