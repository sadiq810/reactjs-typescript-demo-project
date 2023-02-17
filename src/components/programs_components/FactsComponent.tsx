import React from "react";
import {programType} from "../../assets/data/programs";

const FactsComponent = ({p}: {p: programType}) => {
    return (
        <div className="col-lg-5 bg-white p-4 rounded">
            <h3 className={'font-weight--bold'}>Program Facts</h3>
            <p className={'mb-0'}>{p.university.title}</p>
            <span className={'font-weight--normal'}>{p.university.location}</span>
            <div className="row">
                <div className="col-lg-5 col-md-5 col-sm-5 bg-gray position-relative facts--wrapper">
                    <div className={'d-inline-block facts--marker'}>&nbsp;</div>
                    <div className={'ml-3 d-inline-block facts--container'}>
                        <p className={'font-weight--normal m-0'}> Program type</p>
                        <p className={'font-weight--bold'}>{p.type}</p>
                    </div>
                </div>
                <div className="col-lg-5 col-md-5 col-sm-5 bg-gray position-relative facts--wrapper">
                    <div className={'d-inline-block facts--marker'}>&nbsp;</div>
                    <div className={'ml-3 d-inline-block facts--container'}>
                        <p className={'font-weight--normal m-0'}>Duration</p>
                        <p className={'font-weight--bold'}>{p.duration} Years</p>
                    </div>
                </div>

                <div className="col-lg-5 col-md-5 col-sm-5 bg-gray position-relative facts--wrapper">
                    <div className={'d-inline-block facts--marker'}>&nbsp;</div>
                    <div className={'ml-3 d-inline-block facts--container'}>
                        <p className={'font-weight--normal m-0'}>Language taught in</p>
                        <p className={'font-weight--bold'}>{p.language}</p>
                    </div>
                </div>


                <div className="col-lg-5 col-md-5 col-sm-5 bg-gray position-relative facts--wrapper">
                    <div className={'d-inline-block facts--marker'}>&nbsp;</div>
                    <div className={'ml-3 d-inline-block facts--container'}>
                        <p className={'font-weight--normal m-0'}>Annual tuition fee</p>
                        <p className={'font-weight--bold'}>{p.tuition_fee.toLocaleString()} USD</p>
                    </div>
                </div>

                <div className="col-lg-5 col-md-5 col-sm-5 bg-gray position-relative facts--wrapper">
                    <div className={'d-inline-block facts--marker'}>&nbsp;</div>
                    <div className={'ml-3 d-inline-block facts--container'}>
                        <p className={'font-weight--normal m-0'}>Cost of living</p>
                        <p className={'font-weight--bold'}>${p.cost_of_living.toLocaleString()} USD/year</p>
                    </div>
                </div>

                <div className="col-lg-5 col-md-5 col-sm-5 bg-gray position-relative facts--wrapper">
                    <div className={'d-inline-block facts--marker'}>&nbsp;</div>
                    <div className={'ml-3 d-inline-block facts--container'}>
                        <p className={'font-weight--normal m-0'}>Next intake</p>
                        <p className={'font-weight--bold'}>{p.next_intake}</p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default FactsComponent;
