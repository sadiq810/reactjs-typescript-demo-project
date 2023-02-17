import {userProgramType} from "../../assets/data/user_programs";

const RequirementsComponent = ({program}: {program: userProgramType}) => {

    return (
        <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-lg">
                <div className="modal-content bg-white">
                    <div className="modal-header">
                        <button type="button" className="btn-close modal--close--btn" data-bs-dismiss="modal" aria-label="Close" />
                    </div>
                    <div className="modal-body m-4">
                        <h3>Requirements</h3>
                        <div className={'m-3'} dangerouslySetInnerHTML={{__html: program.requirements}}></div>
                        <div className={'mt-25'}>
                            <h5>Other Fee:</h5>
                            <div className={'m-4'} dangerouslySetInnerHTML={{__html: program.other_fee}}></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default RequirementsComponent;
