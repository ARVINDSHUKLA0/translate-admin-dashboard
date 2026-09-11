// 'use client'

// import React, { useEffect, useRef, useState } from 'react'
// import { useRouter } from 'next/navigation'

// import '../componentsStyle/Navbar.css'

// const Navbar = ({
//     toggleSidebar,
//     isSidebarOpen
// }) => {

//     const router = useRouter()

//     const [isProfileOpen, setIsProfileOpen] =
//         useState(false)

//     const profileRef = useRef(null)
//     useEffect(() => {

//         const handleOutsideClick = (event) => {

//             if (
//                 profileRef.current &&
//                 !profileRef.current.contains(event.target)
//             ) {

//                 setIsProfileOpen(false)

//             }

//         }


//         document.addEventListener(
//             'mousedown',
//             handleOutsideClick
//         )


//         return () => {

//             document.removeEventListener(
//                 'mousedown',
//                 handleOutsideClick
//             )

//         }

//     }, [])

 

//     const handleLogout = () => {
 
//         document.cookie =
//             'admin-auth=; path=/; max-age=0; SameSite=Lax'

 
//         localStorage.removeItem('admin-auth')

 
//         setIsProfileOpen(false)

 
//         router.replace('/login')

//     }


//     return (

//         <header className="admin-navbar d-flex align-items-center justify-content-between">
//             <div className="navbar-left d-flex align-items-center gap-2">
//                 <button
//                     type="button"
//                     className="navbar-menu-button navbar-menu-desktop border-0 bg-transparent"
//                     onClick={toggleSidebar}
//                     aria-label={
//                         isSidebarOpen
//                             ? 'Close sidebar'
//                             : 'Open sidebar'
//                     }
//                 >

//                     <i
//                         className={`fa-solid ${
//                             isSidebarOpen
//                                 ? 'fa-xmark'
//                                 : 'fa-bars'
//                         }`}
//                     ></i>

//                 </button>
//                 <div className="navbar-search d-flex align-items-center">
//                     <i className="fa-solid fa-magnifying-glass navbar-search-icon"></i>
//                     <input
//                         type="text"
//                         placeholder="Search users, jobs, transactions..."
//                     />
//                 </div>
//             </div>

//             <div className="navbar-right d-flex align-items-center gap-3">
//                 <button
//                     type="button"
//                     className="navbar-notification d-flex align-items-center justify-content-center border-0"
//                 >

//                     <i className="fa-solid fa-bell"></i>
//                 </button>

//                 <button
//                     type="button"
//                     className="navbar-menu-button navbar-menu-mobile border-0 bg-transparent"
//                     onClick={toggleSidebar}
//                     aria-label={
//                         isSidebarOpen
//                             ? 'Close sidebar'
//                             : 'Open sidebar'
//                     }
//                 >
//                     <i
//                         className={`fa-solid ${
//                             isSidebarOpen
//                                 ? 'fa-xmark'
//                                 : 'fa-bars'
//                         }`}
//                     ></i>

//                 </button>


//                 <div
//                     className="navbar-profile-wrapper"
//                     ref={profileRef}
//                 >

//                     <button
//                         type="button"
//                         className="navbar-avatar"
//                         onClick={() =>
//                             setIsProfileOpen(
//                                 prev => !prev
//                             )
//                         }
//                         aria-label="Admin profile"
//                     >
//                         AD
//                     </button>

 

//                     {isProfileOpen && (

//                         <div className="navbar-profile-dropdown">

//                             <div className="profile-dropdown-header">

//                                 <div className="profile-dropdown-avatar">
//                                     AD
//                                 </div>

//                                 <div>

//                                     <div className="profile-dropdown-name">
//                                         Admin Team
//                                     </div>

//                                     <div className="profile-dropdown-email">
//                                         gigbiggroup@gmail.com
//                                     </div>

//                                 </div>

//                             </div>


//                             <div className="profile-dropdown-divider"></div>


//                             <button
//                                 type="button"
//                                 className="profile-dropdown-item"
//                                 onClick={() => {
//                                     setIsProfileOpen(false)
//                                     router.push('/settings')
//                                 }}
//                             >

//                                 <i className="fa-solid fa-gear"></i>

//                                 <span>
//                                     Settings
//                                 </span>

//                             </button>


//                             <button
//                                 type="button"
//                                 className="profile-dropdown-item logout-item"
//                                 onClick={handleLogout}
//                             >

//                                 <i className="fa-solid fa-right-from-bracket"></i>

//                                 <span>
//                                     Logout
//                                 </span>

//                             </button>

//                         </div>

//                     )}

//                 </div>

//             </div>

//         </header>
//     )
// }

// export default Navbar

















'use client'

import React, { useEffect, useRef, useState } from 'react'
import { useRouter } from 'next/navigation'

import '../componentsStyle/Navbar.css'

const Navbar = ({
    toggleSidebar,
    isSidebarOpen
}) => {

    const router = useRouter()

    const [isProfileOpen, setIsProfileOpen] =
        useState(false)

    const profileRef = useRef(null)
 
    useEffect(() => {
        const handleOutsideClick = (event) => {

            if (
                profileRef.current &&
                !profileRef.current.contains(event.target)
            ) {
                setIsProfileOpen(false)
            }

        }

        document.addEventListener(
            'mousedown',
            handleOutsideClick
        )

        return () => {

            document.removeEventListener(
                'mousedown',
                handleOutsideClick
            )

        }

    }, [])

    const handleLogout = () => {
 
        document.cookie =
            'admin-auth=; path=/; max-age=0; SameSite=Lax'
        localStorage.removeItem('admin-auth')

        setIsProfileOpen(false) 
        router.replace('/login')
    }


    const handleSettings = () => {

        setIsProfileOpen(false)

        router.push('/settings')
    }


    return (

        <header className="admin-navbar d-flex align-items-center justify-content-between">
            <div className="navbar-left d-flex align-items-center gap-2">
                <button
                    type="button"
                    className="navbar-menu-button navbar-menu-desktop border-0 bg-transparent"
                    onClick={toggleSidebar}
                    aria-label={
                        isSidebarOpen
                            ? 'Close sidebar'
                            : 'Open sidebar'
                    }
                >

                    <i
                        className={`fa-solid ${
                            isSidebarOpen
                                ? 'fa-xmark'
                                : 'fa-bars'
                        }`}
                    />

                </button>
                <div className="navbar-search d-flex align-items-center">
                    <i className="fa-solid fa-magnifying-glass navbar-search-icon" />
                    <input
                        type="text"
                        placeholder="Search users, jobs, transactions..."
                    />

                </div>

            </div> 

            <div className="navbar-right d-flex align-items-center gap-3">
                <button
                    type="button"
                    className="navbar-notification d-flex align-items-center justify-content-center border-0"
                    aria-label="Notifications"
                >

                    <i className="fa-solid fa-bell" />
                </button>
                <button
                    type="button"
                    className="navbar-menu-button navbar-menu-mobile border-0 bg-transparent"
                    onClick={toggleSidebar}
                    aria-label={
                        isSidebarOpen
                            ? 'Close sidebar'
                            : 'Open sidebar'
                    }
                >

                    <i
                        className={`fa-solid ${
                            isSidebarOpen
                                ? 'fa-xmark'
                                : 'fa-bars'
                        }`}
                    />

                </button>
                <div
                    className="navbar-profile-wrapper"
                    ref={profileRef}
                >

                    <button
                        type="button"
                        className="navbar-avatar"
                        onClick={() =>
                            setIsProfileOpen(
                                prev => !prev
                            )
                        }
                        aria-label="Admin profile"
                        aria-expanded={isProfileOpen}
                    >
                        AD
                    </button>


                    {isProfileOpen && (

                        <div className="navbar-profile-dropdown">

                            <div className="profile-dropdown-header">

                                <div className="profile-dropdown-avatar">
                                    AD
                                </div>


                                <div className="profile-dropdown-info">

                                    <div className="profile-dropdown-name">
                                        Admin Team
                                    </div>

                                    <div className="profile-dropdown-email">
                                        gigbiggroup@gmail.com
                                    </div>

                                </div>

                            </div>


                            <div className="profile-dropdown-divider" /> 
                            <button
                                type="button"
                                className="profile-dropdown-item"
                                onClick={handleSettings}
                            >

                                <i className="fa-solid fa-gear" />

                                <span>
                                    Settings
                                </span>

                            </button> 

                            <button
                                type="button"
                                className="profile-dropdown-item logout-item"
                                onClick={handleLogout}
                            >

                                <i className="fa-solid fa-right-from-bracket" />

                                <span>
                                    Logout
                                </span>

                            </button>

                        </div>

                    )}

                </div>

            </div>

        </header>
    )
}

export default Navbar