import React, { Fragment } from "react";
import { feeds } from "../../../constant/feeds";
import { AdminNavbar } from "../adminNav";
import { useMobile } from "../../../context/Mobile-Context";
export const NewsFeedList = ({}) => {
  const {title, category, content, image, video, statusofnews, mobileDispatch} = useMobile();
  return (
    <Fragment>
      <section className="flex h-screen bg-cover bg-center bg-no-repeat bg-gray-600 bg-blend-multiply bg-[url('https://images.unsplash.com/photo-1586880234202-32a56790c681?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')]">
        <AdminNavbar />
        <div className="mt-16 max-w-7xl mx-auto">
          <h1 className="text-3xl font-bold my-3 text-gray-100 text-center">News Feed List</h1>
          <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th className="px-4 py-2">Title</th>
                  <th className="px-4 py-2">Category</th>
                  <th className="px-4 py-2">Creation Date</th>
                  <th className="px-4 py-2">Status</th>
                  <th className="px-4 py-2">Actions</th>
                </tr>
              </thead>
              <tbody>
                {feeds.map((feed) => (
                  <tr key={feed.id} className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                    <td className="px-4 py-2">{feed.title}</td>
                    <td className="px-4 py-2">{feed.category}</td>
                    <td className="px-4 py-2">{feed.creationDate}</td>
                    <td className="px-4 py-2">{feed.status}</td>
                    <td className="px-4 py-2">
                      <div className="flex">
                        <button className="mr-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded">
                          Edit
                        </button>
                        <button className="mr-2 bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded">
                          Delete
                        </button>
                        <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-2 rounded">
                          View Detail
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

// export default NewsFeedList;
