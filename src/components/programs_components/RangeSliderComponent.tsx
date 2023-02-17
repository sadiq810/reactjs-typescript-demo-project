import { RangeSlider } from 'rsuite';

import React from "react";

type propType = {
    field: string,
    setState: (field: string, value: any) => void,
    data: {from: number, to: number}
}

const RangeSliderComponent = ({field, setState, data}: propType) => {
    const changeHandler = (values: [number, number]) => {
        setState(field, {from: values[0], to: values[1]});
    }

    return (
        <RangeSlider defaultValue={[0, 100]} onChange={changeHandler} value={[data.from, data.to]}/>
    );
}

export default RangeSliderComponent;
