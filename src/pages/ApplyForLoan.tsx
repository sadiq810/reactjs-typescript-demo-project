import React, {useState} from "react";
import LoanTypesComponent from "../components/apply_loan_components/LoanTypesComponent";
import LoanInfoComponent from "../components/apply_loan_components/LoanInfoComponent";
import AboutYouComponent from "../components/apply_loan_components/AboutYouComponent";
import ResidenceComponent from "../components/apply_loan_components/ResidenceComponent";
import EducationComponent from "../components/apply_loan_components/EducationComponent";
import EmploymentComponent from "../components/apply_loan_components/EmploymentComponent";
import YourRateComponent from "../components/apply_loan_components/YourRateComponent";
import LoanApplicationDone from "../components/apply_loan_components/LoanApplicationDone";
import {submitLoanApplication} from "../redux/actions";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";

let defaultState = {type: '', sub_type: '', goal: '', loan_refinancing: '', rate_checking_today: '', amount: '', dob: '', phone: '',
    street: '', apartment: '', city: '', state: '', zipcode: '', living_status: '', degree: '',
    graduate_school: '', graduate_program: '', graduate_date: '',undergraduate_school: '', undergraduate_program: '', undergraduate_date: '',
    employment_status: '', is_other_income: '', annual_income: '', rate_checking: ''};


const ApplyForLoan = ({save}: any) => {
    let [tab, setTab] = useState<string>('types');
    let [loan, setLoan] = useState<typeof defaultState>({...defaultState});

    const setState = (field: string, value: string) => {
        setLoan({...loan, [field]: value})
    }

    const submit = () => {
        save({...loan});
        setLoan({...defaultState});
    };

    const getComponent = (): React.ReactElement | string => {
        switch (tab) {
            case 'types':
                return <LoanTypesComponent setTab={setTab} setState={setState} loan={loan}/>;
            case 'loan_info':
                return <LoanInfoComponent tab={tab} setTab={setTab} setState={setState} loan={loan}/>;
            case 'about_you':
                return <AboutYouComponent tab={tab} setTab={setTab} setState={setState} loan={loan}/>
            case 'residence':
                return <ResidenceComponent tab={tab} setTab={setTab} setState={setState} loan={loan}/>
            case 'education':
                return <EducationComponent tab={tab} setTab={setTab} setState={setState} loan={loan}/>
            case 'employment':
                return <EmploymentComponent tab={tab} setTab={setTab} setState={setState} loan={loan}/>
            case 'your_rate':
                return <YourRateComponent tab={tab} setTab={setTab} setState={setState} submit={submit} loan={loan}/>
            case 'done':
                return <LoanApplicationDone setTab={setTab} setState={setState}/>
            default:
                return 'Please select a tab.';
        }
    }

    return (
        <div id="main-wrapper">
            <div className="site-wrapper-reveal">
                <div className="recent-article-area">
                    { getComponent() }
                </div>
            </div>
        </div>
    )
}

const mapDispatchToProps = (dispatch: React.Dispatch<any>) => {
    return {
        save: (payload: {type: string, payload: any}) => dispatch(submitLoanApplication(payload)),
    }
}

const mapStateToProps = () => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(ApplyForLoan));
