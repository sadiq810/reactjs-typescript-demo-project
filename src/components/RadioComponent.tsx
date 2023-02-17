import React from "react";

type propType = {
    field: string,
    value: string,
    name: string,
    label: string,
    setState: (field: string, value: string) => void
}

const RadioComponent = ({setState, field, value, name, label}: propType) => {
    return (
        <>
            <input className="form-check-input" type="radio" name={name} value={value} onClick={(e: React.MouseEvent<HTMLInputElement>) => setState(field, value)} required/>
            <label className="form-check-label">{label}</label>
        </>
    )
}

export default RadioComponent;
