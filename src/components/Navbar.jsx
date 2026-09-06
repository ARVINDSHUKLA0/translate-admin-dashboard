import React from 'react'
import '../componentsStyle/Navbar.css'

const Navbar = ({ toggleSidebar, isSidebarOpen }) => {

    return (
        <header className="admin-navbar d-flex align-items-center justify-content-between">

            {/* LEFT SIDE */}
            <div className="navbar-left d-flex align-items-center gap-2">

                {/* DESKTOP MENU */}
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
                    ></i>
                </button>


                {/* SEARCH */}
                <div className="navbar-search d-flex align-items-center">

                    <i className="fa-solid fa-magnifying-glass navbar-search-icon"></i>

                    <input
                        type="text"
                        placeholder="Search users, jobs, transactions..."
                    />

                </div>

            </div>


            {/* RIGHT SIDE */}
            <div className="navbar-right d-flex align-items-center gap-3">

                {/* NOTIFICATION */}
                <button
                    type="button"
                    className="navbar-notification d-flex align-items-center justify-content-center border-0"
                >
                    <i className="fa-solid fa-bell"></i>
                </button>


                {/* ADMIN */}
                <div className="navbar-avatar d-flex align-items-center justify-content-center">
                    AD
                </div>


                {/* MOBILE MENU */}
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
                    ></i>
                </button>

            </div>

        </header>
    )
}

export default Navbar



 