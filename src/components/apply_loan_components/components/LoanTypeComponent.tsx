import React from "react";

type propTypes = {
    id: number,
    title: string,
    description: string,
    selected: boolean,
    setState: (type: string, id: number) => void,
    setTab: (value: string) => void
}

const LoanTypeComponent = ({id, title, description, selected = false, setState, setTab}: propTypes) => {
    return (
        <div className={"col-lg-4 col-md-4 col-sm-12 mt-2"} onClick={() => {setState('type', id); setTab('loan_info');}}>
            <div className={"card loan--box "+(selected ? 'active--loan-box': '')}>
                <p className="font--weight-bold">{title}</p>
                <p>{ description }</p>
                <div className={'mt-20 text-end'}>
                <span>
                    <i className="icofont-check-circled"></i>
                </span>
                </div>
            </div>

        </div>

    )
}

export default LoanTypeComponent;
