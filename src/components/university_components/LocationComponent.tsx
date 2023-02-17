import React from "react";

const LocationComponent = () => {
    return (
        <div className="university--component bg-white mb-30">
            <div className="row program--description">
                <h3 className={'font-weight--bold'}>Location</h3>
                <div>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d96741.96707770348!2d-74.11326731447532!3d40.73592221667734!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1626023244258!5m2!1sen!2s"
                        height="600" style={{border:0, width: '100%'}} allowFullScreen loading="lazy"></iframe>

                </div>

            </div>
        </div>
    )
}

export default LocationComponent;
