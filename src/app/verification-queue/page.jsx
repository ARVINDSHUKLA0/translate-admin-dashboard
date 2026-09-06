import React from 'react'
import './verificationQueue.css'

const applications = [
    {
        initials: 'JR',
        name: 'Jonas Richter',
        language: 'EN ⇄ DE',
        document: 'ATA_Certificate.pdf'
    },
    {
        initials: 'SK',
        name: 'Sara Kim',
        language: 'EN ⇄ KO',
        document: 'NAATI_Certificate.pdf'
    },
    {
        initials: 'LM',
        name: 'Luca Moretti',
        language: 'EN ⇄ IT',
        document: 'Diploma_translation.pdf'
    }
]

const page = () => {

    return (
        <div> 
            <div className="mb-4">
                <h4 className="fw-bold mb-1">
                    Translator verification queue
                </h4>
                <p className="text-secondary mb-0 fs-14">
                    4 applications pending review.
                </p>
            </div>
 
            <div className="card border rounded-4 shadow-sm">
                <div className="card-body p-3 p-md-4">
                    {applications.map((item) => (

                        <div
                            key={item.name}
                            className="verificationItem d-flex align-items-center justify-content-between gap-3"
                        >
 

                            <div className="d-flex align-items-center gap-3">

                                <div className="verificationAvatar">
                                    {item.initials}
                                </div>

                                <div>

                                    <div className="fw-semibold fs-14">
                                        {item.name}
                                    </div>

                                    <div className="text-secondary fs-13">
                                        {item.language} · {item.document} uploaded
                                    </div>

                                </div>

                            </div> 
                            <div className="d-flex align-items-center gap-2 flex-shrink-0">
                                <button
                                    type="button"
                                    className="btn btn-light border fw-semibold fs-14"
                                >
                                    View doc
                                </button>
                                <button
                                    type="button"
                                    className="btn btn-danger bg-opacity-10 border-0 fw-semibold verificationReject fs-14"
                                >
                                    Reject
                                </button>

                                <button
                                    type="button"
                                    className="btn btn-primary fw-semibold fs-14"
                                >
                                    Approve
                                </button>

                            </div>

                        </div>

                    ))}

                </div>

            </div>

        </div>
    )
}

export default page