import React from "react";

type propType = {
    label: string,
    field: string,
    value: string,
    placeholder?: string,
    isDisabled?: boolean,
    styleObj?: any,
    setState: (field: string, value: string) => void
}

const TextAreaComponent = ({setState, label, value, field, placeholder = '', isDisabled = false, styleObj = {}}: propType) => {
    return (
        <>
            <label className="form-label" dangerouslySetInnerHTML={{ __html: label }}></label>
            <textarea disabled={isDisabled} className="form-control" value={value} onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setState(field, e.target.value)} placeholder={placeholder} style={styleObj}></textarea>
        </>
    )
}

export default TextAreaComponent;
