import React from "react";
import {Link, withRouter} from 'react-router-dom';

const PaymentOption = ({history, match}: any) => {
    return (
        <div className="container-fluid mWidth95percent bg-white">
            <div className="container pt-5 pb-5">
                <div className="col-lg-12 col-md-12 col-sm-12 program--main-box">
                    <div className="row program--wrapper">
                        <div className="col-lg-6 m-auto">
                            <h3 className={'font-weight-bold mb-2'}>Choose Payment Method</h3>
                            <div className="row mt-40">
                                <div className="col-lg-6 mb-20 text-center">Funding Method</div>
                                <div className="col-lg-6 mb-20">Processing Time</div>

                                <div className="col-lg-12 col-sm-12 col-md-12 payment--option" onClick={(e: React.MouseEvent<HTMLDivElement>) => history.push('/pay-with-credit-card/'+match.params.id)}>
                                    <div className="row">
                                        <div className="col-lg-6 col-md-6 col-sm-6">
                                            <img src="https://i.imgur.com/sB4jftM.png" width="130"/>
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-sm-6 mt-1">
                                            <p>Instant 24/7 <i className={'icofont-curved-right'}></i></p>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-12 col-sm-12 col-md-12 payment--option mt-30">
                                    <div className="row">
                                        <div className="col-lg-6 col-md-6 col-sm-6 wallet--option">
                                            <i className="icofont-wallet"></i>
                                            <p className={''}>Wallet</p>
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-sm-6 mt-1">
                                            <p>3-5 days <i className={'icofont-curved-right'}></i></p>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-12 col-sm-12 col-md-12 payment--option mt-30">
                                    <div className="row">
                                        <div className="col-lg-6 col-md-6 col-sm-6 wallet--option">
                                            <i className="icofont-mobile-phone"></i>
                                            <p className={''}>Mobile Money</p>
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-sm-6 mt-1">
                                            <p>Instant 24/7 <i className={'icofont-curved-right'}></i></p>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-12 col-sm-12 col-md-12 payment--option mt-30">
                                    <div className="row">
                                        <div className="col-lg-6 col-md-6 col-sm-6 wallet--option">
                                            <i className="icofont-bank"></i>
                                            <p className={''}>Bank Transfer</p>
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-sm-6 mt-1">
                                            <p>3-5 days <i className={'icofont-curved-right'}></i></p>
                                        </div>
                                    </div>
                                </div>
                                <div className="row text-center mt-40 back--link">
                                    <Link to={'/my-applications'}><i className={'icofont-curved-left '}></i>Back</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default withRouter(PaymentOption);
