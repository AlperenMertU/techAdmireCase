import React, { useEffect, useState } from 'react';
import UserTable from "../components/UserTable";
import Filtering from "../components/Filtering"
import { Link } from 'react-router-dom';

const MainMenu = () => {


    return (
        <div>
            <nav className="fixed top-0 z-50 w-full bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <div className="px-3 py-3 lg:px-5">
                    <span className="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap dark:text-white">Tech Admire</span>
                </div>
            </nav>

            <aside id="logo-sidebar" className="fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform -translate-x-full bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700" aria-label="Sidebar">
                <div className="h-full px-3 pb-4 overflow-y-auto bg-white dark:bg-gray-800">
                    <ul className="space-y-2 font-medium">


                        <li>
                            <Link to="/" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                <svg className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" viewBox="0 0 18 16">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 8h11m0 0L8 4m4 4-4 4m4-11h3a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-3" />
                                </svg>
                                <span className="flex-1 ms-3 whitespace-nowrap">Log out</span>
                            </Link>
                        </li>

                    </ul>
                </div>
            </aside>

            <div className="p-0 sm:ml-64 pt-12">

                <div className="p-2 pt-5 rounded-lg flex">
                    <Filtering />
                </div>

                <div className="p-1 rounded-lg">
                    <UserTable />
                </div>

            </div>

        </div>
    );
}

export default MainMenu;
