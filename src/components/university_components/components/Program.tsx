import React from "react";
import {withRouter} from 'react-router-dom';

const Program = ({p, history}: any) => {
    return (
        <>
            <div className={"row bg-white "}>
                <div className="logos col-lg-2 col-sm-2 col-md-2 legend-wrapper">
                    <div className={'super1 col-lg-12 col-sm-12 col-md-12 program--type'}>
                        <p className={' font-weight--normal program1'}>Program type</p>
                        <p className={' font-weight--bold'}>{ p.type }</p>
                    </div>
                </div>
                <div className=" col-lg-8 col-sm-8 col-md-8 program--box">
                    <div className="row">
                        <div className=" col-lg-12 col-sm-12 col-md-12 program3">
                            <h6 className={'font-weight--bold '}>{ p.title}</h6>
                            <p className={'super2 font-weight--normal'}>{p.university.title}, {p.university.location}</p>
                        </div>
                        <div className=" col-lg-6 col-sm-6 col-md-6 program--duration">
                            <p className="khan font-weight--normal">Duration</p>
                            <p className={'khan font-weight--bold'}>{p.duration} Years</p>
                        </div>
                        <div className="col-lg-6 col-sm-6 col-md-6 program--annual-tuition">
                            <p className=" font-weight--normal">Annual tuition fee</p>
                            <p className={'font-weight--bold'}>{p.tuition_fee.toLocaleString()} USD</p>
                        </div>

                        <p className={"program4"}>Intakes</p>

                        <div className={"row program4" }>
                            <p className={"col-lg-7"}>
                                <span className={"date1"}>Jan 2021</span>
                                <span className={"date2"}> Mar 2021</span>
                                <span className={"date3"}>Aug 20221</span>
                            </p>
                            <p className={"col-lg-7 program9 "}>
                                <span className={"date4"}>Jan 2022</span>
                                <span className={"date5"}> Mar 2022</span>
                                <span className={"date6"}>Aug 20222</span>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-2 col-md-2 col-sm-2 program--box apply--box">
                    <button className={'btn btn-primary btn-sm'} onClick={(e: React.MouseEvent<HTMLButtonElement>) => history.push('/apply-university/'+p.id)}>Apply</button>
                </div>
            </div>
            <hr></hr>
        </>
    )
}

export default withRouter(Program);
