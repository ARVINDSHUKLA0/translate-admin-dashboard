'use client'

import React, { useState } from 'react'
import './user.css'

const users = [
    {
        name: 'Elena Vidal',
        email: 'elena.vidal@mail.com',
        initials: 'EV',
        status: 'ACTIVE',
        joined: 'Mar 2024',
        jobs: '340',
        rating: '4.9★',
    },
    {
        name: 'Rafael Santos',
        email: 'r.santos@mail.com',
        initials: 'RS',
        status: 'SUSPENDED',
        joined: 'Jan 2024',
        jobs: '210',
        rating: '4.1★',
    },
    {
        name: 'Wei Zhang',
        email: 'wei.zhang@mail.com',
        initials: 'WZ',
        status: 'ACTIVE',
        joined: 'Nov 2023',
        jobs: '185',
        rating: '4.9★',
    },
    {
        name: 'Camille Roux',
        email: 'c.roux@mail.com',
        initials: 'CR',
        status: 'ACTIVE',
        joined: 'Jul 2024',
        jobs: '98',
        rating: '4.7★',
    },
]

const tabs = [
    {
        label: 'Clients',
        count: '1,640',
    },
    {
        label: 'Translators',
        count: '2,270',
    },
]

const page = () => {

    const [activeTab, setActiveTab] = useState('Clients')

    return (
        <div>
            <div className="mb-4">
                <h4 className="fw-bold mb-1">
                    Users
                </h4>

                <p className="text-secondary mb-0 fs-14">
                    3,910 total accounts.
                </p>

            </div>

            <div className="d-flex flex-wrap mb-4">
                <div className="d-flex flex-wrap p-1 border rounded-3 w-100 w-sm-auto">
                    {tabs.map((tab) => (
                        <button
                            type="button"
                            key={tab.label}
                            onClick={() => setActiveTab(tab.label)}
                            className={`btn border-0 px-3 px-md-4 py-2 ${
                                activeTab === tab.label
                                    ? 'bg-white shadow-sm'
                                    : 'text-secondary'
                            }`}
                        >

                            <span className="fw-semibold fs-14">
                                {tab.label}
                            </span>

                            <span className="fw-semibold ms-1 fs-14">
                                ({tab.count})
                            </span>

                        </button>

                    ))}

                </div>

            </div>


            {/* TABLE */}

            <div className="card border rounded-4 shadow-sm">

                <div className="card-body p-0">

                    <div className="table-responsive">

                        <table className="table align-middle mb-0 usersTable">

                            <thead>

                                <tr>

                                    <th>
                                        USER
                                    </th>

                                    <th>
                                        STATUS
                                    </th>

                                    <th>
                                        JOINED
                                    </th>

                                    <th>
                                        JOBS
                                    </th>

                                    <th>
                                        RATING
                                    </th>

                                    <th className="text-end">
                                    </th>

                                </tr>

                            </thead>


                            <tbody>

                                {users.map((user) => (

                                    <tr key={user.email}>

                                        {/* USER */}

                                        <td className='fs-14'>

                                            <div className="d-flex align-items-center gap-2">

                                                <div className="userAvatar">
                                                    {user.initials}
                                                </div>

                                                <div>

                                                    <div className="fw-semibold">
                                                        {user.name}
                                                    </div>

                                                    <div className="small text-secondary">
                                                        {user.email}
                                                    </div>

                                                </div>

                                            </div>

                                        </td>


                                        {/* STATUS */}

                                        <td>

                                            <span
                                                className={
                                                    user.status === 'ACTIVE'
                                                        ? 'userStatus userActive'
                                                        : 'userStatus userSuspended'
                                                }
                                            >
                                                {user.status}
                                            </span>

                                        </td>


                                        {/* JOINED */}

                                        <td className='fs-14'>
                                            {user.joined}
                                        </td>


                                        {/* JOBS */}

                                        <td className='fs-14'>
                                            {user.jobs}
                                        </td>


                                        {/* RATING */}

                                        <td className='fs-14'>
                                            {user.rating}
                                        </td>


                                        {/* VIEW */}

                                        <td className="text-end">

                                            <button
                                                type="button"
                                                className="btn btn-light border fs-14"
                                            >
                                                View
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