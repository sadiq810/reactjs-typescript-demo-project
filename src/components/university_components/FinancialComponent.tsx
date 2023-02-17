import React from "react";

const FinancialComponent = () => {
    return (
        <div className="university--component bg-white mb-30">
            <div className="row program--description">
                <h3 className={'font-weight--bold'}>Financials</h3>

                <div className="container">
                    <div className="row">
                        <div className={""}>
                            <p className={"para31"}> DESCRIPTION</p>
                            <p className={"para34"}> Avg Cost of Tuition/Year</p>
                            <p className={"para34"}> Cost of Living/Year</p>
                            <p className={"para34"}> *Application Fee</p>

                        </div>
                        <div className={" king2"}>
                            <p className={"para31"}>SUBTOTAL</p>
                            <p className={"para34"}>$20171.00 USD</p>
                            <p className={"para34"}>$210000.00 USD</p>
                            <p className={"para34"}>$0.00 USD</p>
                            <p>*Charged once of each program</p>
                        </div>
                        <hr className={"hori1"}></hr>
                    </div>
                </div>

                <div className="container">
                    <div className="row">
                        <div className={""}>
                            <p className={"para31"}>Estimated Total/Year</p>
                        </div>
                        <div className={" king1"}>
                            <p className={"para31"}>$40171.00 USD</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default FinancialComponent;
