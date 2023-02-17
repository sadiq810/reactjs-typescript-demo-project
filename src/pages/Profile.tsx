import React, {useState} from "react";
import GeneralInformation from "../components/profile_components/GeneralInformation";
import EducationHistory from "../components/profile_components/EducationHistory";
import TestScores from "../components/profile_components/TestScores";
import BackgroundInformation from "../components/profile_components/BackgroundInformation";

const Profile = () => {
    let [tab, setTab] = useState<string>('general');

    const getComponent = (): React.ReactElement | string => {
        switch (tab) {
            case 'general':
                return <GeneralInformation />;
            case 'education':
                return <EducationHistory/>;
            case 'test_score':
                return <TestScores />
            case 'background_information':
                return <BackgroundInformation />;
            default:
                return 'Please select a tab.';
        }
    }

    return (
        <div id="main-wrapper">
            <div className="container-fluid mWidth95percent mb-30 mt-25">
                <div className="row">
                    <div className="col-lg-12 col-md-12 col-sm-12 tabs--wrapper">
                        <h2 className={'font-weight--bold mb-30'}>Profile</h2>
                        <p className={'mb-0 top--tabs'}>
                            <a href="#" className={tab == 'general' ? 'active--tab': ''} onClick={(e: React.MouseEvent<HTMLAnchorElement>) => setTab('general')}>General Information</a>
                            <a href="#" className={tab == 'education' ? 'active--tab': ''} onClick={(e: React.MouseEvent<HTMLAnchorElement>) => setTab('education')}>Education History</a>
                            <a href="#" className={tab == 'test_score' ? 'active--tab': ''} onClick={(e: React.MouseEvent<HTMLAnchorElement>) => setTab('test_score')}>Test Scores</a>
                            <a href="#" className={tab == 'background_information' ? 'active--tab': ''} onClick={(e: React.MouseEvent<HTMLAnchorElement>) => setTab('background_information')}>Background Information</a>
                        </p>
                        <div>
                            <span className="title__hr2"></span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="site-wrapper-reveal">
                <div className="recent-article-area">
                    { getComponent() }
                </div>
            </div>
        </div>
    )
}

export default Profile;
