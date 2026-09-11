
'use client'

import React, { useState } from 'react'
import './settings.css'

const menuItems = [
    ['Profile', 'fa-user'],
    ['Security', 'fa-lock'],
    ['Notifications', 'fa-bell'],
    ['Appearance', 'fa-gear'],
    ['Platform', 'fa-sliders'],
    ['Billing', 'fa-dollar-sign'],
    ['Team', 'fa-users'],
]

const Page = () => {

    const [activeTab, setActiveTab] = useState('Profile')

    const [form, setForm] = useState({
        name: 'Admin Team',
        email: 'admin@translate.co',
        phone: '+1 555 000 0000',
    })

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        })
    }

    const handleSave = (e) => {
        e.preventDefault()

        // API will be connected here later.
        console.log('Save profile:', form)
    }

    return (
        <div className="container-fluid px-3 px-lg-4 py-4">

            {/* HEADER */}
            <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-start gap-3 mb-4">

                <div>
                    <div className="settings-kicker mb-1">
                        SYSTEM
                    </div>

                    <h1 className="fw-bold mb-1 settings-title">
                        Settings
                    </h1>

                    <p className="text-secondary mb-0">
                        Manage your admin profile, security preferences,
                        notifications and platform configuration.
                    </p>
                </div>

                <div className="system-status d-inline-flex align-items-center">
                    <span />
                    System operational
                </div>

            </div>

            {/* MAIN */}
            <div className="row g-3">

                {/* SIDEBAR */}
                <div className="col-12 col-lg-2">

                    <div className="card border shadow-sm settings-menu">

                        <div className="card-body p-2">

                            {menuItems.map(([name, icon]) => (

                                <button
                                    key={name}
                                    type="button"
                                    onClick={() => setActiveTab(name)}
                                    className={`btn w-100 text-start d-flex align-items-center gap-3 settings-tab ${
                                        activeTab === name ? 'active' : ''
                                    }`}
                                >
                                    <i className={`fa-solid ${icon}`} />
                                    <span>{name}</span>
                                </button>

                            ))}

                        </div>

                    </div>

                </div>

                {/* CONTENT */}
                <div className="col-12 col-lg-10">

                    {activeTab === 'Profile' ? (

                        <>

                            {/* PROFILE CARD */}
                            <div className="card border shadow-sm mb-3">

                                <div className="card-body p-4">

                                    <h3 className="fw-bold fs-5 mb-1">
                                        Admin profile
                                    </h3>

                                    <p className="text-secondary small mb-4">
                                        Manage the information associated
                                        with your admin account.
                                    </p>

                                    {/* PROFILE */}
                                    <div className="d-flex align-items-center gap-3 mb-4">

                                        <div className="profile-avatar-setting">
                                            AD
                                        </div>

                                        <div>
                                            <h4 className="fw-bold fs-6 mb-1">
                                                Admin Team
                                            </h4>

                                            <span className="role-badge">
                                                SUPER ADMIN
                                            </span>
                                        </div>

                                    </div>

                                    {/* FORM */}
                                    <form onSubmit={handleSave}>

                                        <div className="row g-3">

                                            <div className="col-12 col-md-6">
                                                <label className="form-label fw-semibold small">
                                                    Full name
                                                </label>

                                                <input
                                                    type="text"
                                                    name="name"
                                                    value={form.name}
                                                    onChange={handleChange}
                                                    className="form-control settings-input"
                                                />
                                            </div>

                                            <div className="col-12 col-md-6">
                                                <label className="form-label fw-semibold small">
                                                    Email address
                                                </label>

                                                <input
                                                    type="email"
                                                    name="email"
                                                    value={form.email}
                                                    onChange={handleChange}
                                                    className="form-control settings-input"
                                                />
                                            </div>

                                            <div className="col-12 col-md-6">
                                                <label className="form-label fw-semibold small">
                                                    Phone number
                                                </label>

                                                <input
                                                    type="text"
                                                    name="phone"
                                                    value={form.phone}
                                                    onChange={handleChange}
                                                    className="form-control settings-input"
                                                />
                                            </div>

                                            <div className="col-12 col-md-6">
                                                <label className="form-label fw-semibold small">
                                                    Role
                                                </label>

                                                <input
                                                    type="text"
                                                    value="Super admin"
                                                    className="form-control settings-input bg-light"
                                                    disabled
                                                    readOnly
                                                />
                                            </div>

                                        </div>

                                        {/* ACTIONS */}
                                        <div className="border-top mt-4 pt-3 d-flex justify-content-end gap-2">

                                            <button
                                                type="button"
                                                className="btn btn-light border px-3"
                                            >
                                                Cancel
                                            </button>

                                            <button
                                                type="submit"
                                                className="btn save-btn px-3 fw-semibold"
                                            >
                                                Save changes
                                            </button>

                                        </div>

                                    </form>

                                </div>

                            </div>

                            {/* DANGER ZONE */}
                            <div className="card danger-card">

                                <div className="card-body p-4">

                                    <h3 className="fw-bold fs-5 mb-1 text-danger">
                                        Danger zone
                                    </h3>

                                    <p className="small text-secondary mb-4">
                                        These actions affect your admin session
                                        or account preferences. They cannot be
                                        undone automatically.
                                    </p>

                                    <div className="d-flex flex-wrap gap-2">

                                        <button
                                            type="button"
                                            className="btn danger-btn"
                                        >
                                            Reset account preferences
                                        </button>

                                        <button
                                            type="button"
                                            className="btn danger-btn"
                                        >
                                            Sign out all devices
                                        </button>

                                        <button
                                            type="button"
                                            className="btn danger-btn"
                                        >
                                            Delete admin account
                                        </button>

                                    </div>

                                </div>

                            </div>

                        </>

                    ) : (

                        /* OTHER TABS */
                        <div className="card border shadow-sm">

                            <div className="card-body p-4">

                                <h3 className="fw-bold fs-5 mb-2">
                                    {activeTab}
                                </h3>

                                <p className="text-secondary mb-0">
                                    {activeTab} settings will be available
                                    here. This section is ready for API
                                    integration later.
                                </p>

                            </div>

                        </div>

                    )}

                </div>

            </div>

        </div>
    )
}

export default Page

 