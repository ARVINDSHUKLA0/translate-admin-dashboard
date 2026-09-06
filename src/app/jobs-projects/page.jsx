'use client'

import React, { useState } from 'react'
import './jobsProjects.css'

const projects = [
    {
        project: 'Product Launch Deck',
        client: 'Northwind Legal',
        translator: 'Elena Vidal',
        value: '$161.20',
        status: 'IN PROGRESS',
        due: 'Aug 27',
        type: 'progress',
    },
    {
        project: 'Vendor Contract',
        client: 'Northwind Legal',
        translator: 'Jonas Richter',
        value: '$500.50',
        status: 'IN REVIEW',
        due: 'Aug 26',
        type: 'review',
    },
    {
        project: 'User Manual',
        client: 'Atlas Robotics',
        translator: 'Rafael Santos',
        value: '$392.60',
        status: 'DISPUTED',
        due: 'Aug 24',
        type: 'disputed',
    },
    {
        project: 'Support Docs',
        client: 'Northwind Legal',
        translator: 'Wei Zhang',
        value: '$210.00',
        status: 'DELIVERED',
        due: 'Aug 25',
        type: 'delivered',
    },
]

const tabs = [
    'All',
    'In progress',
    'In review',
    'Disputed',
]

const page = () => {

    const [activeTab, setActiveTab] = useState('All')

    const filteredProjects =
        activeTab === 'All'
            ? projects
            : projects.filter((item) => {

                if (activeTab === 'In progress') {
                    return item.type === 'progress'
                }

                if (activeTab === 'In review') {
                    return item.type === 'review'
                }

                if (activeTab === 'Disputed') {
                    return item.type === 'disputed'
                }

                return true
            })

    return (
        <div>

            {/* HEADER */}

            <div className="mb-4">

                <h1 className="fw-bold mb-1">
                    Jobs &amp; projects
                </h1>

                <p className="text-secondary mb-0">
                    642 jobs currently in progress.
                </p>

            </div>


            {/* TABS */}

            <div className="d-flex mb-4">

                <div className="d-flex flex-wrap p-1 border rounded-3">

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


            {/* PROJECT TABLE */}

            <div className="card border rounded-4 shadow-sm">

                <div className="card-body p-0">

                    <div className="table-responsive">

                        <table className="table align-middle mb-0 projectsTable">

                            <thead>

                                <tr>

                                    <th>PROJECT</th>

                                    <th>CLIENT</th>

                                    <th>TRANSLATOR</th>

                                    <th>VALUE</th>

                                    <th>STATUS</th>

                                    <th>DUE</th>

                                </tr>

                            </thead>


                            <tbody>

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
                                                className={`projectStatus ${item.type}`}
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