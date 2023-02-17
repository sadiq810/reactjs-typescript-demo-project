import React, {useEffect, useState} from "react";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import { Donut } from 'react-dial-knob'

const ActiveLoansComponent = () => {
    const [value, setValue] = useState<number>(69);
    const [values, setValues] = useState<number>(15);

    useEffect(() => {
        // @ts-ignore
        window.fixDonutChart();
    });

    return (
        <div className="container-fluid mWidth95percent bg-white">
            <div className="container pt-5 pb-5">
                <div className="row program--wrapper">
                    <div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-12  mt-25">
                            <div className="card chart--container">
                                <div className={'card-body'}>
                                    <h4 className={''}>Student Loan Refinance Loan</h4>
                                    <div className={'mt-40'}>
                                        <div className={'float-start chart--detail--wrapper'}>
                                            <p className={'font-weight--bold heading'}>Details</p>
                                            <p className={'mb-0'}>Loan Amount</p>
                                            <h3 className={'text-danger'}>$100</h3>
                                            <p className={'mb-0 mt-2'}>Paid Off</p>
                                            <h3 className={'text-success'}>$90</h3>
                                            <p className={'mb-0 mt-2'}>Balance</p>
                                            <h3>$990</h3>
                                        </div>
                                        <div className="donut">
                                            <Donut diameter={200} min={0} max={100}
                                                   step={1}
                                                   value={value}
                                                   theme={{
                                                       donutColor: '#38524f',
                                                       donutThickness: 14
                                                   }}
                                            >
                                            </Donut>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-6 col-sm-12 position-relative ps-5 mt-25 wallet--second">
                            <div className="card chart--container">
                                <div className={'card-body'}>
                                    <h4 className={''}>Home Loans</h4>
                                    <div className={'mt-40'}>
                                        <div className={'float-start chart--detail--wrapper'}>
                                            <p className={'font-weight--bold heading'}>Details</p>
                                            <p className={'mb-0'}>Loan Amount</p>
                                            <h3 className={'text-danger'}>$100</h3>
                                            <p className={'mb-0 mt-2'}>Paid Off</p>
                                            <h3 className={'text-success'}>$90</h3>
                                            <p className={'mb-0 mt-2'}>Balance</p>
                                            <h3>$990</h3>
                                        </div>
                                        <div className="donut2">
                                            <Donut diameter={200} min={0} max={100}
                                                   step={1}
                                                   value={values}
                                                   theme={{
                                                       donutColor: '#38524f',
                                                       donutThickness: 14
                                                   }}
                                            >
                                            </Donut>
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
    return {

    }
}

const mapStateToProps = () => ({
})

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(ActiveLoansComponent));
