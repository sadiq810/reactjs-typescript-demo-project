import React, {useState} from "react";
import PaidApplications from "../components/my_application_components/PaidApplications";
import UnpaidApplications from "../components/my_application_components/UnpaidApplications";

const MyApplications = () => {
    let [tab, setTab] = useState<string>('paid');

    return (
        <div id="main-wrapper">
            <div className="container-fluid mWidth95percent mb-30 mt-25">
                <div className="row">
                    <div className="col-lg-12 col-md-12 col-sm-12">
                        <h2 className={'font-weight--bold mb-30'}>My Applications</h2>
                        <p className={'mb-0'}>
                            <a href="#" onClick={(e: React.MouseEvent<HTMLAnchorElement>) => setTab('unpaid')} className={tab == 'unpaid' ? 'may__application_active': ''}>Unpaid Application</a>
                            <a href="#" onClick={(e: React.MouseEvent<HTMLAnchorElement>) => setTab('paid')} className={tab == 'paid' ? 'may__application_active': ''} style={{marginLeft: '40px'}}>Paid Application</a>
                        </p>
                        <div className="position-relative">
                            <span className="title__hr2"></span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="site-wrapper-reveal">
                <div className="recent-article-area">
                    <div className="container-fluid mWidth95percent bg-white">
                        <div className="container pt-5 pb-5">

                            <div className="col-lg-12 col-md-12 col-sm-12 program--main-box">
                                <div className="row bg-white program--wrapper">
                                    {tab == 'paid' ? (<PaidApplications />): (<UnpaidApplications />)}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MyApplications;
