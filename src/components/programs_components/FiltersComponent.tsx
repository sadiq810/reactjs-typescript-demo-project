import React from "react";
import RangeSliderComponent from "./RangeSliderComponent";

type propType = {
    filters: any,
    setState: (key: string, value: string) => void,
    setApplyFilter: (value: boolean) => void
}

const FiltersComponent = ({ filters, setState, setApplyFilter }: propType) => {
    return (
        <div className="col-lg-3  col-md-3 col-sm-12 bg-white p-4 bradius10">
            <div className="row">
                <div className="col-12">
                    <div>
                        <div className="login-header mb-40">
                            <h4 className={'bold--text font20 '}>Program Filters</h4>
                        </div>
                        <form action="#" className={'filter--form'}>
                            <div className={'mb-20'}>
                                <label htmlFor="program_levels">Program Levels</label>
                                <input type="text" value={filters.level} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setState('level', e.target.value)} name={'program_levels'} className={'form-control bg-gray'} placeholder={"I don't have this"} />
                            </div>

                            <div className={'mb-20'}>
                                <label htmlFor="intakes">Intakes</label>
                                <input type="text" value={filters.intake} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setState('intake', e.target.value)} name={'intakes'} className={'form-control bg-gray'} placeholder={'Ugandan'} />
                            </div>
                            <div className={'mb-20'}>
                                <label htmlFor="post_secondary_discipline">Post-Secondary Discipline</label>
                                <input type="text" value={filters.discipline} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setState('discipline', e.target.value)} name={'post_secondary_discipline'} className={'form-control bg-gray'} placeholder={'select...'} />
                            </div>

                            <div className={'mb-20'}>
                                <label htmlFor="post_secondary_sub_category">Post-Secondary Sub-Categories</label>
                                <input type="text" value={filters.sub_category} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setState('sub_category', e.target.value)} name={'post_secondary_sub_category'} className={'form-control bg-gray'} placeholder={'select...'} />
                            </div>

                            <div className={'mb-20'}>
                                <label htmlFor="customRange1" className="form-label sarkar">Tuition Fee</label>
                                <RangeSliderComponent field={'tuition_fee'} setState={setState} data={filters.tuition_fee} />
                            </div>

                            <div className={'mb-20'}>
                                <label htmlFor="customRange1" className="form-label">Application Fee</label>
                                <RangeSliderComponent field={'application_fee'} setState={setState} data={filters.application_fee} />
                            </div>

                            <div className={'mb-20'} >
                                <button type="button" className="btn btn-outline-default" onClick={(e: React.MouseEvent<HTMLButtonElement>) => setApplyFilter(false)}>Clear Filters</button>
                                <button type="button" className="btn btn-primary" style={{ marginLeft: '10px' }} onClick={(e: React.MouseEvent<HTMLButtonElement>) => setApplyFilter(true)}>Apply Filters</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FiltersComponent;
