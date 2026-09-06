import React from 'react'
import './paymentsPayouts.css'

const stats = [
    {
        title: 'In escrow',
        value: '$42.1K'
    },
    {
        title: 'Pending payouts',
        value: '$18.2K'
    },
    {
        title: 'Platform fees (MTD)',
        value: '$12.9K'
    },
    {
        title: 'Refunds (MTD)',
        value: '$1.4K'
    }
]

const payouts = [
    {
        translator: 'Elena Vidal',
        amount: '$480.00',
        projects: '2'
    },
    {
        translator: 'Camille Roux',
        amount: '$142.10',
        projects: '1'
    },
    {
        translator: 'Wei Zhang',
        amount: '$210.00',
        projects: '1'
    }
]

const page = () => {

    return (
        <div>
            <h4 className="fw-bold mb-4">
                Payments &amp; payouts
            </h4>
            <div className="row g-3 mb-4">
                {stats.map((item) => (

                    <div
                        className="col-12 col-sm-6 col-md-6 col-lg-3"
                        key={item.title}
                    >
                        <div className="card h-100 border rounded-4 shadow-sm">
                            <div className="card-body p-4">
                                <p className="text-secondary mb-2 fs-14">
                                    {item.title}
                                </p>

                                <h3 className="mb-0">
                                    {item.value}
                                </h3>

                            </div>

                        </div>

                    </div>

                ))}

            </div>

            <div className="card border rounded-4 shadow-sm">
                <div className="card-body p-3 p-sm-4">
                    <div className="d-sm-flex d-block align-items-center justify-content-between gap-3 mb-3">
                        <h6 className="fw-bold mb-0">
                            Pending translator payouts
                        </h6>

                        <div className='mt-3'>
                            <button
                                type="button"
                                className="btn payoutsApproveAll fw-semibold fs-14"
                            >
                                Approve all
                            </button>
                        </div>
                    </div>

                    <div className="table-responsive">
                        <table className="table align-middle mb-0 payoutsTable">
                            <thead>
                                <tr>
                                    <th>
                                        TRANSLATOR
                                    </th>

                                    <th>
                                        AMOUNT
                                    </th>

                                    <th>
                                        PROJECTS
                                    </th>

                                    <th></th>

                                </tr>

                            </thead>


                            <tbody>

                                {payouts.map((item) => (

                                    <tr key={item.translator}>

                                        <td>
                                            {item.translator}
                                        </td>

                                        <td>
                                            {item.amount}
                                        </td>

                                        <td>
                                            {item.projects}
                                        </td>

                                        <td className="text-end">

                                            <button
                                                type="button"
                                                className="btn btn-light border fw-semibold fs-14"
                                            >
                                                Approve
                                            </button>

                                        </td>

                                    </tr>

                                ))}

                            </tbody>

                        </table>

                    </div>

                </div>

            </div>

        </div>
    )
}

export default page