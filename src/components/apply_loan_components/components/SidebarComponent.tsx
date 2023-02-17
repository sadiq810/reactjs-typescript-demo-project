import React from "react";

const SidebarComponent = ({tab}: {tab: string}) => {
    return (
        <ul className={'loan--sub-menu'}>
            <li className={'position-relative'}>
                <div className={tab === 'loan_info' ? 'selected': ''}>
                    <i className={tab === 'loan_info' ? 'icofont-disc': 'icofont-check-circled'}></i>Loan Info
                </div>
            </li>

            <li className={'position-relative'}>
                <div className={tab === 'about_you' ? 'selected': ''}>
                    <i className={tab === 'about_you' ? 'icofont-disc': 'icofont-check-circled'}></i>About you
                </div>
            </li>

            <li className={'position-relative'}>
                <div className={tab === 'residence' ? 'selected': ''}>
                    <i className={tab === 'residence' ? 'icofont-disc': 'icofont-check-circled'}></i>Residence
                </div>
            </li>

            <li className={'position-relative'}>
                <div className={tab === 'education' ? 'selected': ''}>
                    <i className={tab === 'education' ? 'icofont-disc': 'icofont-check-circled'}></i>Education
                </div>
            </li>

            <li className={'position-relative'}>
                <div className={tab === 'employment' ? 'selected': ''}>
                    <i className={tab === 'employment' ? 'icofont-disc': 'icofont-check-circled'}></i>Employment
                </div>
            </li>

            <li className={'position-relative'}>
                <div className={tab === 'your_rate' ? 'selected': ''}>
                    <i className={tab === 'your_rate' ? 'icofont-disc': 'icofont-check-circled'}></i>Your rates
                </div>
            </li>
        </ul>
    );
}


export default SidebarComponent;
