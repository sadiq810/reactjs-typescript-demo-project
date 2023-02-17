import React from "react";

type propType = {
    sort: string,
    wrapperClass?: string,
    setSort: (value: string) => void
}

const SortComponent = ({sort, setSort, wrapperClass = ''}: propType) => {
    return (
        <div className={"col-lg-3 col-md-6 col-sm-12 sort--drpdown"+wrapperClass}>
            <select className="form-select selects" value={sort} onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setSort(e.target.value)}>
                <option value={'asc'} selected> Program name A-Z</option>
                <option value="desc">Program name Z-A</option>
            </select>
            <span>Sort by:</span>
        </div>
    )
}

export default SortComponent;
