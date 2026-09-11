'use client'

import React, { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'

import AsideNavbar from '@/components/AsideNavbar'
import Navbar from '@/components/Navbar'

const AdminShell = ({ children }) => {

    const pathname = usePathname()

    const [isSidebarOpen, setIsSidebarOpen] = useState(false)

    const publicPages = [
        '/login',
        '/forgot-password',
    ]

    const isPublicPage =
        publicPages.includes(pathname)


    useEffect(() => {

        if (isPublicPage) {
            return
        }

        const handleResize = () => {

            if (window.innerWidth > 1024) {
                setIsSidebarOpen(true)
            } else {
                setIsSidebarOpen(false)
            }

        }

        handleResize()

        window.addEventListener(
            'resize',
            handleResize
        )

        return () => {
            window.removeEventListener(
                'resize',
                handleResize
            )
        }

    }, [isPublicPage])


    const toggleSidebar = () => {
        setIsSidebarOpen(prev => !prev)
    }


    const closeSidebarOnPageClick = () => {

        if (window.innerWidth <= 1024) {
            setIsSidebarOpen(false)
        }

    }


    /*
     * LOGIN / FORGOT PASSWORD
     * No sidebar and no loading spinner.
     */

    if (isPublicPage) {
        return children
    }


    /*
     * ADMIN PAGES
     */

    return (

        <div
            className={`admin-layout ${
                isSidebarOpen
                    ? 'sidebar-open'
                    : 'sidebar-closed'
            }`}
        >

            <AsideNavbar
                isSidebarOpen={isSidebarOpen}
                closeSidebarOnPageClick={
                    closeSidebarOnPageClick
                }
            />


            <div className="admin-main">

                <Navbar
                    toggleSidebar={toggleSidebar}
                    isSidebarOpen={isSidebarOpen}
                />


                <main className="admin-content">
                    {children}
                </main>

            </div>

        </div>

    )
}

export default AdminShell