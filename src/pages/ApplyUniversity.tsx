import React, {useEffect, useState} from "react";
import UniversityDetails from "../components/apply_university_components/UniversityDetails";
import PersonalDetails from "../components/apply_university_components/PersonalDetails";
import DetailConfirmation from "../components/apply_university_components/DetailConfirmation";
import ApplicationSent from "../components/apply_university_components/ApplicationSent";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import {applyForProgram} from "../redux/actions";
import {getProgramById} from "../redux/selectors/ProgramSelector";
import {programStateType} from "../redux/reducers/ProgramsReducer";

const ApplyUniversity = ({save, match, programs}: any) => {
    let [step, setStep] = useState<string>('university');
    let [data, setData] = useState<any>({graduate: '', start_date: '', name: '', username: '', nationality: '', phone: '', email: '', permit: '',
        education_country: '', education_level: '', grading_scheme: '', english_exam_type: '', english_reading: '', english_listening: '',
        english_writing: '', english_speaking: '',
        gmat_verbal_score: '', gmat_verbal_rank: '', gmat_quantitative_score: '', gmat_quantitative_rank: '', gmat_writing_score: '',
        gmat_writing_rank: '', gmat_total_score: '', gmat_total_rank: '', gre_verbal_score: '', gre_verbal_rank: '', gre_quantitative_score: '',
        gre_quantitative_rank: '', gre_writing_score: '', gre_writing_rank: ''});

    const setState = (field: string, value: string) => {
        setData({...data, [field]: value});
    }

    useEffect(() => {
       if (step == 'done')
           save({data, program: getProgramById(match.params.id, programs)});
    });

    return (
        <div id="main-wrapper">
            <div className="container-fluid bg-white mb-30">
                <div className="container">
                    <div className="row apply--form">
                        {step == 'university' ?
                            (<UniversityDetails setStep={setStep} setState={setState} data={data}/>) :
                            ( step == 'personal' ? (<PersonalDetails  setStep={setStep} setState={setState} data={data}/>) :
                                (step == 'confirmation' ? <DetailConfirmation setStep={setStep} setState={setState} data={data}/> :
                                    <ApplicationSent/>))}
                    </div>
                </div>
            </div>
        </div>
    )
}

const mapDispatchToProps = (dispatch: React.Dispatch<any>) => {
    return {
        save: (payload: {type: string, payload: any}) => dispatch(applyForProgram(payload)),
    }
}

const mapStateToProps = ({programs} : {programs: programStateType}) => ({
    programs: programs.programs,
})

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(ApplyUniversity));
