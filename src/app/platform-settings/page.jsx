import React from 'react'
import './platformSettings.css'

const tabs = [
    'Pricing rules',
    'Languages',
    'Team & roles',
    'Email templates'
]

const pricingFields = [
    {
        label: 'Standard tier rate',
        value: '$0.08/word'
    },
    {
        label: 'Professional tier rate',
        value: '$0.14/word'
    }
]

const page = () => {
    return (
        <div>
            <div className="mb-4">
                <h4 className="fw-bold mb-0">
                    Platform settings
                </h4>
            </div>
            <div className="settingsTabs d-flex flex-wrap gap-0 p-1 border rounded-3 mb-4">

                {tabs.map((tab, index) => (
                    <button
                        type="button"
                        key={tab}
                        className={`btn border-0 px-4 py-2 fw-semibold ${
                            index === 0
                                ? 'active'
                                : ''
                        }`}
                    >
                        {tab}
                    </button>
                ))}

            </div>
 
            <div className="card border rounded-4 shadow-sm settingsCard">
                <div className="card-body p-3 p-md-4">
                    <div className="row g-3 mb-4">
                        {pricingFields.map((field) => (
                            <div
                                className="col-12 col-md-6"
                                key={field.label}
                            >

                                <label className="form-label fw-semibold">
                                    {field.label}
                                </label>

                                <input
                                    type="text"
                                    className="form-control rounded-3"
                                    value={field.value}
                                    readOnly
                                />

                            </div>
                        ))}

                    </div> 

                    <div className="mb-4">
                        <label className="form-label fw-semibold">
                            Platform commission
                        </label>
                        <input
                            type="text"
                            className="form-control rounded-3"
                            value="15%"
                            readOnly
                        />
                    </div>
                    <div className="settingsToggle d-flex align-items-center justify-content-between border-bottom pb-3 mb-4">
                        <span className="fw-semibold">
                            Require certification for legal jobs
                        </span>
                        <div className="form-check form-switch m-0">
                            <input
                                className="form-check-input certificationSwitch"
                                type="checkbox"
                                role="switch"
                                defaultChecked
                            />
                        </div>
                    </div>
                    <button
                        type="button"
                        className="btn btn-primary fw-semibold px-3 py-2"
                    >
                        Save settings
                    </button>

                </div>

            </div>

        </div>
    )
}

export default page