import React from "react";
import {withRouter} from 'react-router-dom';
import Icon from '../assets/images/Group 1072@2x.png'

const PaymentDone = (props: any) => {
    return (
        <>
            <div id="main-wrapper">
                <div className="container-fluid bg-white section-space--ptb_80">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 col-md-6 col-sm-12">
                                <img src={Icon} alt=""/>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-12 mt-40">
                                <h3 className={'mb-30'}>Payment Complete</h3>
                                <p>Your payment was successful, Please check your email address, you should be receiving a receipt any minute from now.</p>
                                <button className={'btn btn-primary btn-large btn-medium mt-40'} onClick={(e: React.MouseEvent<HTMLButtonElement>) => props.history.push('/my-applications')}>DONE</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default withRouter(PaymentDone);
