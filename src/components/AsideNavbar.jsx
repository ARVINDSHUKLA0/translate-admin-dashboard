'use client'

import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import '../componentsStyle/AsideNavbar.css'

const AsideNavbar = ({
    isSidebarOpen,
    closeSidebarOnPageClick
}) => {

    const pathname = usePathname()

    const navSections = [
        {
            title: 'Overview',
            items: [
                {
                    label: 'Overview',
                    icon: '📊',
                    href: '/',
                },
            ],
        },
        {
            title: 'Operations',
            items: [
                {
                    label: 'Users',
                    icon: '👥',
                    href: '/users',
                },
                {
                    label: 'Verification queue',
                    icon: '🛡️',
                    href: '/verification-queue',
                },
                {
                    label: 'Jobs & projects',
                    icon: '📁',
                    href: '/jobs-projects',
                },
                {
                    label: 'Payments & payouts',
                    icon: '💳',
                    href: '/payments-payouts',
                },
                {
                    label: 'Disputes & support',
                    icon: '⚠️',
                    href: '/disputes-support',
                },
                {
                    label: 'Quality control',
                    icon: '🔎',
                    href: '/quality-control',
                },
                {
                    label: 'Messages',
                    icon: '💬',
                    href: '/messages',
                },
                
                {
                    label: 'Help & Support',
                    icon: '🚨',
                    href: '/',
                },
            ],
        },
        {
            title: 'System',
            items: [
                {
                    label: 'Reports & analytics',
                    icon: '📈',
                    href: '/reports-analytics',
                },
            ],
        },
    ]

    return (
        <aside
            className={`aside-navbar d-flex flex-column ${isSidebarOpen
                    ? 'sidebar-open'
                    : 'sidebar-closed'
                }`}
        >

            {/* LOGO */}
            <div className="d-flex align-items-center justify-content-between mb-lg-3 mb-3">

                <span className="fs-24 fw-bold">
                    <Link className='text-decoration-none text-white' href="/"> translate co</Link>
                </span>

                <span className="admin-badge">
                    ADMIN
                </span>

            </div>


            <nav className="aside-navigation flex-grow-1">

                {navSections.map((section) => (

                    <div
                        className="aside-nav-section"
                        key={section.title}
                    >

                        <p className="aside-nav-section-title">
                            {section.title}
                        </p>

                        <div className="d-flex flex-column gap-1">

                            {section.items.map((item) => {

                                const isActive =
                                    pathname === item.href

                                return (

                                    <Link
                                        href={item.href}
                                        key={item.label}
                                        onClick={closeSidebarOnPageClick}
                                        className={`aside-nav-item d-flex align-items-center w-100 text-decoration-none ${isActive
                                                ? 'active'
                                                : ''
                                            }`}
                                    >

                                        <span className="aside-nav-icon">
                                            {item.icon}
                                        </span>

                                        <span className="aside-nav-label">
                                            {item.label}
                                        </span>

                                    </Link>

                                )
                            })}

                        </div>

                    </div>

                ))}

            </nav>


            {/* PROFILE */}
            <div className="aside-profile d-flex align-items-center">

                <div className="profile-avatar d-flex align-items-center justify-content-center">
                    AD
                </div>

                <div className="profile-info">

                    <p className="profile-name">
                        Admin Team
                    </p>

                    <p className="profile-role">
                        Super admin
                    </p>

                </div>

            </div>

        </aside>
    )
}

export default AsideNavbar





