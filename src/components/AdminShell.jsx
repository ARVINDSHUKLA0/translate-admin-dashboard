// 'use client'

// import React, { useEffect, useState } from 'react'

// import AsideNavbar from '@/components/AsideNavbar'
// import Navbar from '@/components/Navbar'

// const AdminShell = ({ children }) => {

//     const [isSidebarOpen, setIsSidebarOpen] = useState(false)

//     useEffect(() => {

//         const handleResize = () => {

//             if (window.innerWidth > 1024) {
//                 setIsSidebarOpen(true)
//             } else {
//                 setIsSidebarOpen(false)
//             }

//         }

//         handleResize()

//         window.addEventListener('resize', handleResize)

//         return () => {
//             window.removeEventListener('resize', handleResize)
//         }

//     }, [])

//     const toggleSidebar = () => {
//         setIsSidebarOpen((prev) => !prev)
//     }

//     return (
//         <div
//             className={`admin-layout ${
//                 isSidebarOpen
//                     ? 'sidebar-open'
//                     : 'sidebar-closed'
//             }`}
//         >

//             <AsideNavbar
//                 isSidebarOpen={isSidebarOpen}
//             />

//             <div className="admin-main">

//                 <Navbar
//                     toggleSidebar={toggleSidebar}
//                     isSidebarOpen={isSidebarOpen}
//                 />

//                 <main className="admin-content">
//                     {children}
//                 </main>

//             </div>

//         </div>
//     )
// }

// export default AdminShell









'use client'

import React, { useEffect, useState } from 'react'

import AsideNavbar from '@/components/AsideNavbar'
import Navbar from '@/components/Navbar'

const AdminShell = ({ children }) => {

    const [isSidebarOpen, setIsSidebarOpen] = useState(false)


    useEffect(() => {

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

    }, [])


    // MENU BUTTON
    const toggleSidebar = () => {
        setIsSidebarOpen((prev) => !prev)
    }


    // PAGE CLICK
    // ONLY 0px - 1024px
    const closeSidebarOnPageClick = () => {

        if (window.innerWidth <= 1024) {
            setIsSidebarOpen(false)
        }

    }


    return (

        <div
            className={`admin-layout ${
                isSidebarOpen
                    ? 'sidebar-open'
                    : 'sidebar-closed'
            }`}
        >

            {/* SIDEBAR */}
            <AsideNavbar
                isSidebarOpen={isSidebarOpen}
                closeSidebarOnPageClick={
                    closeSidebarOnPageClick
                }
            />


            {/* MAIN */}
            <div className="admin-main">

                {/* NAVBAR */}
                <Navbar
                    toggleSidebar={toggleSidebar}
                    isSidebarOpen={isSidebarOpen}
                />


                {/* PAGE */}
                <main className="admin-content">
                    {children}
                </main>

            </div>

        </div>

    )
}

export default AdminShell



















