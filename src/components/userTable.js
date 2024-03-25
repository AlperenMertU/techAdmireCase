import React, { useState } from 'react';
import userJson from "../usersData/users.json";

import { useSelector } from 'react-redux';
import { selectFilteredUsers } from '../components/DataSlice';

const UserTable = () => {

  const perPage = 6; 
  const [currentPage, setCurrentPage] = useState(1); 
  const filteredUsers = useSelector(selectFilteredUsers);
  console.log(filteredUsers);
  const allUsers = userJson;


  const paginate = (array, page_size, page_number) => {
    return array.slice((page_number - 1) * page_size, page_number * page_size);
  };

  const usersToDisplay = filteredUsers.length > 0 ? paginate(filteredUsers, perPage, currentPage) : paginate(allUsers, perPage, currentPage);

  const totalPages = Math.ceil((filteredUsers.length > 0 ? filteredUsers.length : allUsers.length) / perPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  return (
    <div className="items-center p-0 overflow-auto h-lvh">
      <div className="mt-1 -mb-3">
        <div className="not-prose relative  overflow-hidden dark:bg-slate-700/75">
          <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,#fff,rgba(255,255,255,0.6))] dark:bg-grid-slate-700/25 dark:[mask-image:linear-gradient(0deg,rgba(255,255,255,0.1),rgba(255,255,255,0.5))]"></div>
          <div className="relative rounded-xl overflow-auto">
            <div className="">
              <table className="border-collapse table-auto w-full text-sm">
                <thead>
                  <tr>
                    <th className="border-b dark:border-slate-600 font-medium p-4 pl-8 pt-0 pb-3 text-slate-400 dark:text-slate-200 text-left">Name</th>
                    <th className="border-b dark:border-slate-600 font-medium p-4 pt-0 pb-3 text-slate-400 dark:text-slate-200 text-left">University</th>
                    <th className="border-b dark:border-slate-600 font-medium p-4 pl-8 pt-0 pb-3 text-slate-400 dark:text-slate-200 text-left">Country</th>
                    <th className="border-b dark:border-slate-600 font-medium p-4 pt-0 pb-3 text-slate-400 dark:text-slate-200 text-left">Date</th>
                    <th className="border-b dark:border-slate-600 font-medium p-4 pr-8 pt-0 pb-3 text-slate-400 dark:text-slate-200 text-left">Price</th>
                    <th className="border-b dark:border-slate-600 font-medium p-4 pr-8 pt-0 pb-3 text-slate-400 dark:text-slate-200 text-left">Time</th>
                    <th className="border-b dark:border-slate-600 font-medium p-4 pr-8 pt-0 pb-3 text-slate-400 dark:text-slate-200 text-left">Language</th>
                  </tr>
                </thead>
                <tbody className="bg-red dark:bg-slate-800">
                  {usersToDisplay.map((data, index) => (
                    <tr key={index}>
                      <td className="border-b border-slate-100 dark:border-slate-700 p-4 pl-8 text-slate-500 dark:text-slate-400">{data.ad}</td>
                      <td className="border-b border-slate-100 dark:border-slate-700 p-4 text-slate-500 dark:text-slate-400">{data.univercity}</td>
                      <td className="border-b border-slate-100 dark:border-slate-700 p-4 pr-8 text-slate-500 dark:text-slate-400">{data.ülke}</td>
                      <td className="border-b border-slate-100 dark:border-slate-700 p-4 pl-8 text-slate-500 dark:text-slate-400">{data.başvuruSonTarihi}</td>
                      <td className="border-b border-slate-100 dark:border-slate-700 p-4 text-slate-500 dark:text-slate-400">{data.maliyet}</td>
                      <td className="border-b border-slate-100 dark:border-slate-700 p-4 pr-8 text-slate-500 dark:text-slate-400">{data.süre}</td>
                      <td className="border-b border-slate-100 dark:border-slate-700 p-4 pr-8 text-slate-500 dark:text-slate-400">{data.dil}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <nav aria-label="Page navigation example">
            <ul className="list-style-none flex">
              <li>
                <button
                  className="relative block rounded bg-transparent px-3 py-1.5 text-sm text-surface transition duration-300 hover:bg-neutral-100 focus:bg-neutral-100 focus:text-primary-700 focus:outline-none active:bg-neutral-100 active:text-primary-700 dark:text-white dark:hover:bg-neutral-700 dark:focus:bg-neutral-700 dark:focus:text-primary-500 dark:active:bg-neutral-700 dark:active:text-primary-500"
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                >&laquo;</button>
              </li>
              {[...Array(totalPages).keys()].map((pageNumber) => (
                <li key={pageNumber}>
                  <button
                    className={`relative block rounded bg-transparent px-3 py-1.5 text-sm text-surface transition duration-300 hover:bg-neutral-100 focus:bg-neutral-100 focus:text-primary-700 focus:outline-none active:bg-neutral-100 active:text-primary-700 dark:text-white dark:hover:bg-neutral-700 dark:focus:bg-neutral-700 dark:focus:text-primary-500 dark:active:bg-neutral-700 dark:active:text-primary-500 ${pageNumber + 1 === currentPage ? 'bg-blue-500 text-white' : ''}`}
                    onClick={() => handlePageChange(pageNumber + 1)}
                  >{pageNumber + 1}</button>
                </li>
              ))}
              <li>
                <button
                  className="relative block rounded bg-transparent px-3 py-1.5 text-sm text-surface transition duration-300 hover:bg-neutral-100 focus:bg-neutral-100 focus:text-primary-700 focus:outline-none active:bg-neutral-100 active:text-primary-700 dark:text-white dark:hover:bg-neutral-700 dark:focus:bg-neutral-700 dark:focus:text-primary-500 dark:active:bg-neutral-700 dark:active:text-primary-500"
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage === totalPages}
                >&raquo;</button>
              </li>
            </ul>
          </nav>
        </div>

      </div>

    </div>
  );
}

export default UserTable;
