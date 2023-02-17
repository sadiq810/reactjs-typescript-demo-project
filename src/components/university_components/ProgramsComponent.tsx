import React, {useState} from "react";
import Program from "../university_components/components/Program";
import {filterPrograms} from "../../redux/selectors/ProgramSelector";
import {universityType} from "../../assets/data/university";

const ProgramsComponent = ({university}: {university: universityType}) => {
    const [filters, setFilters] = useState<any>({level: '', intake: '', discipline: '', sub_category: '', tuition_fee: {from: 0, to: 50}, application_fee: {from: 0, to: 50}});
    const [title, setTitle] = useState<string>('');
    const [sort, setSort] = useState<string>('asc');

    const getPrograms = () => {
        return filterPrograms(university.programs, title, '', sort, true, filters);
    }

    const clearFilters = () => {
        setTitle('');
        setSort('asc');
    }

    return (
        <div className="university--component bg-white mb-30">
            <div className="row program--description">
                <h3 className={'font-weight--bold'}>Programs</h3>
                <form action="#">
                    <div className={"row"}>
                        <div className={"col-lg-8 col-md-6 col-sm-12"}>
                            <label>Search by program title</label>
                            <input type="text" value={title} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setTitle(e.target.value)} name={'program_levels'} className={'form-control form-control2 bg-gray'} placeholder={"I don't have this"} />
                        </div>
                        <div className={"col-lg-4 col-md-6 col-sm-12"}>
                            <label className={"form1"}>Sort by</label>
                            <select name="sort" className={'form-control form-control2 bg-gray'} onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setSort(e.target.value)}>
                                <option value="asc" selected>A-Z Programs</option>
                                <option value="desc">Z-A Programs</option>
                            </select>
                        </div>
                    </div>

                    <div className={"row"}>
                        <div className={"col-lg-4 col-md-6 col-sm-12"}>
                            <label className={"form4"}>Select Level</label>
                            <input type="text"  name={'program_levels'} className={'form4 form-control form-control3 bg-gray'} placeholder={"I don't have this"} />
                        </div>
                        <div className={"col-lg-4 col-md-6 col-sm-12"}>
                            <label className={"form3"}>Select Discipline...</label>
                            <input type="text"  name={'program_levels'} className={'form3 form-control form-control3 bg-gray'} placeholder={"I don't have this"} />
                        </div>

                        <div className={"col-lg-4 col-md-6 col-sm-12"}>
                            <label className={"form1"}>Select Intakes...</label>
                            <input type="text"  name={'program_levels'} className={'form1 form-control form-control3 bg-gray'} placeholder={"I don't have this"} />
                        </div>
                        <div className="col-lg-12 col-md-12 col-sm-12 mt-25">
                            <button className={"btn btn-medium btn-primary"} onClick={(e: React.MouseEvent<HTMLButtonElement>) => clearFilters()}>Clear Filters</button>
                        </div>
                    </div>
                </form>
            </div>
            <hr/>
            {
                getPrograms().map(p => {
                    return (<Program p={p} />)
                })
            }
        </div>
    )
}

export default ProgramsComponent;
