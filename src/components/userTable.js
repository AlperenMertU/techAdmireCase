import React from 'react';
import userJson from "../usersData/users.json";

import { useSelector } from 'react-redux';
import { selectFilteredUsers } from '../components/DataSlice';

const UserTable = () => {

  const filteredUsers = useSelector(selectFilteredUsers);
  console.log(filteredUsers);
  const allUsers = userJson;

  const usersToDisplay = filteredUsers.length > 0 ? filteredUsers : allUsers;

  return (
    <div className="items-center p-0 overflow-auto">
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
          <div className="absolute inset-0 pointer-events-none border border-black/5 rounded-xl dark:border-white/5"></div>
        </div>
      </div>
    </div>
  );
}

export default UserTable;
