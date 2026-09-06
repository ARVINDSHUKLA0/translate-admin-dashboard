'use client'

import React, { useState } from 'react'
import './jobsProjects.css'

const tabs = [
    'All',
    'In progress',
    'In review',
    'Disputed'
]

const projects = [
    {
        project: 'Product Launch Deck',
        client: 'Northwind Legal',
        translator: 'Elena Vidal',
        value: '$161.20',
        status: 'IN PROGRESS',
        statusType: 'inProgress',
        due: 'Aug 27'
    },
    {
        project: 'Vendor Contract',
        client: 'Northwind Legal',
        translator: 'Jonas Richter',
        value: '$500.50',
        status: 'IN REVIEW',
        statusType: 'inReview',
        due: 'Aug 26'
    },
    {
        project: 'User Manual',
        client: 'Atlas Robotics',
        translator: 'Rafael Santos',
        value: '$392.60',
        status: 'DISPUTED',
        statusType: 'disputed',
        due: 'Aug 24'
    },
    {
        project: 'Support Docs',
        client: 'Northwind Legal',
        translator: 'Wei Zhang',
        value: '$210.00',
        status: 'DELIVERED',
        statusType: 'delivered',
        due: 'Aug 25'
    }
]

const page = () => {

    const [activeTab, setActiveTab] = useState('All')

    const filteredProjects = projects.filter((item) => {

        if (activeTab === 'All') {
            return true
        }

        if (activeTab === 'In progress') {
            return item.statusType === 'inProgress'
        }

        if (activeTab === 'In review') {
            return item.statusType === 'inReview'
        }

        if (activeTab === 'Disputed') {
            return item.statusType === 'disputed'
        }

        return true
    })

    return (
        <div> 
            <div className="mb-4">
                <h4 className="fw-bold mb-1 mb-2">
                    Jobs &amp; projects
                </h4>
                <p className="text-secondary mb-0 fs-14">
                    642 jobs currently in progress.
                </p>
            </div>
            <div className="d-flex mb-4">
               <div className="d-flex flex-wrap gap-0 gap-sm-1 p-0 p-sm-1 py-2 px-2 border rounded-3">
                    {tabs.map((tab) => (
                        <button
                            type="button"
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`btn border-0 px-3 px-md-4 py-2 ${
                                activeTab === tab
                                    ? 'bg-white shadow-sm fw-semibold'
                                    : 'text-secondary'
                            }`}
                        >
                            {tab}
                        </button>

                    ))}
                </div>
            </div> 
            <div className="card border rounded-4 shadow-sm">
                <div className="card-body p-0">
                    <div className="table-responsive">
                        <table className="table align-middle mb-0 jobsTable">
                            <thead>
                                <tr className='fs-14'>
                                    <th>
                                        PROJECT
                                    </th>

                                    <th>
                                        CLIENT
                                    </th>

                                    <th>
                                        TRANSLATOR
                                    </th>

                                    <th>
                                        VALUE
                                    </th>

                                    <th>
                                        STATUS
                                    </th>

                                    <th>
                                        DUE
                                    </th>
                                </tr>
                            </thead>

                            <tbody className='fs-14'>

                                {filteredProjects.map((item) => (
                                    <tr key={item.project}>
                                        <td className="fw-medium">
                                            {item.project}
                                        </td>

                                        <td>
                                            {item.client}
                                        </td>

                                        <td>
                                            {item.translator}
                                        </td>

                                        <td>
                                            {item.value}
                                        </td>
                                        <td>

                                            <span
                                                className={`jobStatus ${item.statusType}`}
                                            >
                                                {item.status}
                                            </span>

                                        </td>

                                        <td>
                                            {item.due}
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