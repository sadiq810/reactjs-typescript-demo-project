import React from "react";

type propType = {
    setState: (field: string, value: string) => void,
    label: string,
    value: string|undefined,
    field: string,
    placeholder?: string,
    isDisabled?: boolean
}

const TextBoxComponent = ({setState, label, value, field, placeholder = '', isDisabled = false}: propType) => {
    return (
        <>
            <label className="form-label" dangerouslySetInnerHTML={{ __html: label }}></label>
            <input type="text" disabled={isDisabled} className="form-control" value={value} onChange={e => setState(field, e.target.value)} placeholder={placeholder}/>
        </>
    )
}

export default TextBoxComponent;
