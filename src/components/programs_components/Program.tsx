import {Link} from "react-router-dom";
import React from "react";
import { withRouter } from 'react-router-dom';

let Program = ({p, index, history}: any) => {
    return (
        <div className={"row bg-white program--wrapper "+(index > 0 ? ' mt-40': '')}>
            <div className="logos col-lg-2 col-sm-2 col-md-2 legend-wrapper">
                <div className={'col-12 bg-gray program--legend text-center align-text-bottom'}>
                    <p className={'font-weight--bold'}>Logo</p>
                </div>
                <div className={'super1 col-lg-12 col-sm-12 col-md-12 program--type'}>
                    <p className={' font-weight--normal'}>Program type</p>
                    <p className={' font-weight--bold'}>{ p.type }</p>
                </div>
            </div>
            <div className=" col-lg-8 col-sm-8 col-md-8 program--box">
                <div className="row">
                    <div className=" col-lg-12 col-sm-12 col-md-12">
                        <h6 className={'font-weight--bold'}>{ p.title}</h6>
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
                </div>
            </div>
            <div className="col-lg-2 col-md-2 col-sm-2 program--box apply--box">
                <button className={'btn btn-primary btn-sm'} onClick={() => history.push('/apply-university/'+p.id)}>Apply</button>
                <Link to={`program-detail/${p.id}`} className={'program--details'}>Program details</Link>
                <a href="#" className={'program--see-more'}>See 65 more programs</a>
            </div>
        </div>
    )
}

export default withRouter(Program);
