import { Fragment } from "react";
import { AdminNavbar } from "./adminNav";
import { Link } from "react-router-dom";
import { Footer } from "../../components";

export const AdminPanel = () => {
  const calculateWidth = (percentage) => {
    return {
      width: `${percentage}%`,
    };
  };

  return (
    <Fragment>
      <div className="flex h-screen">
        <AdminNavbar />
        <div className="w-1/5 mt-14 bg-gray-900 overflow-y-auto text-white">
          {/* Content for the left panel */}
          <div className="p-4">
            {/* <h2 className="text-lg font-semibold">Left Panel</h2> */}
            {/* <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae
              justo et massa consectetur congue eu id quam.
            </p> */}
            <div className="flex flex-col mt-4 gap-4 font-bold">
              <ul className="pb-2 space-y-4 ">
                <li>
                  <Link
                    to="/adminpanel"
                    className="flex gap-3 text-gray-900 rounded-md hover:bg-gray-600 text-white text-xl font-normal text-gray-900 dark:text-white"
                  >
                    <svg
                      class="w-6 h-6 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path>
                      <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path>
                    </svg>
                    <span>Dashboard</span>
                  </Link>
                </li>
                <li>
                  <Link
                    to="/createnews"
                    className="flex gap-3 text-gray-900 rounded-md hover:bg-gray-600 text-white text-xl font-normal text-gray-900 dark:text-white"
                  >
                    <svg
                      class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                    >
                      <path
                        clip-rule="evenodd"
                        fill-rule="evenodd"
                        d="M.99 5.24A2.25 2.25 0 013.25 3h13.5A2.25 2.25 0 0119 5.25l.01 9.5A2.25 2.25 0 0116.76 17H3.26A2.267 2.267 0 011 14.74l-.01-9.5zm8.26 9.52v-.625a.75.75 0 00-.75-.75H3.25a.75.75 0 00-.75.75v.615c0 .414.336.75.75.75h5.373a.75.75 0 00.627-.74zm1.5 0a.75.75 0 00.627.74h5.373a.75.75 0 00.75-.75v-.615a.75.75 0 00-.75-.75H11.5a.75.75 0 00-.75.75v.625zm6.75-3.63v-.625a.75.75 0 00-.75-.75H11.5a.75.75 0 00-.75.75v.625c0 .414.336.75.75.75h5.25a.75.75 0 00.75-.75zm-8.25 0v-.625a.75.75 0 00-.75-.75H3.25a.75.75 0 00-.75.75v.625c0 .414.336.75.75.75H8.5a.75.75 0 00.75-.75zM17.5 7.5v-.625a.75.75 0 00-.75-.75H11.5a.75.75 0 00-.75.75V7.5c0 .414.336.75.75.75h5.25a.75.75 0 00.75-.75zm-8.25 0v-.625a.75.75 0 00-.75-.75H3.25a.75.75 0 00-.75.75V7.5c0 .414.336.75.75.75H8.5a.75.75 0 00.75-.75z"
                      ></path>
                    </svg>
                    <span>Create News Feed</span>
                  </Link>
                </li>
                <li>
                  <Link
                    to="/managenews"
                    className="flex gap-3 text-gray-900 rounded-md hover:bg-gray-600 text-white text-xl font-normal text-gray-900 dark:text-white"
                  >
                    <svg
                      class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm2 10a1 1 0 10-2 0v3a1 1 0 102 0v-3zm2-3a1 1 0 011 1v5a1 1 0 11-2 0v-5a1 1 0 011-1zm4-1a1 1 0 10-2 0v7a1 1 0 102 0V8z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    <span>Manage News Feeds</span>
                  </Link>
                </li>
                <li>
                  <Link
                    to="/performance"
                    className="flex gap-3 text-gray-900 rounded-md hover:bg-gray-600 text-white text-xl font-normal text-gray-900 dark:text-white"
                  >
                    <svg
                      class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"></path>
                      <path
                        fill-rule="evenodd"
                        d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    <span>Performance Report</span>
                  </Link>
                </li>
              </ul>
            </div>
            {/* Add more content here */}
          </div>
        </div>
        <div className="w-4/5 mt-14 bg-gray-400 overflow-y-auto">
          {/* Content for the right panel */}
          <div class="px-2 pt-8">
            <div class="grid gap-4 xl:grid-cols-2 2xl:grid-cols-3">
              {/* <!-- Main widget --> */}
              <div class="p-4 bg-white border border-gray-200 rounded-lg shadow-sm 2xl:col-span-2 dark:border-gray-700 sm:p-6 dark:bg-gray-800">
                <div class="flex items-center justify-between mb-4">
                  <div class="flex-shrink-0">
                    <span class="text-xl font-bold leading-none text-gray-900 sm:text-2xl dark:text-white">
                      Number of News
                    </span>
                    <h3 class="text-base font-light text-gray-500 dark:text-gray-400">
                      News this week
                    </h3>
                  </div>
                  <div class="flex items-center justify-end flex-1 text-base font-medium text-green-500 dark:text-green-400">
                    12.5%
                    <svg
                      class="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M5.293 7.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L6.707 7.707a1 1 0 01-1.414 0z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </div>
                </div>
                <div id="main-chart"></div>
                {/* <!-- Card Footer --> */}
                <div class="flex items-center justify-between pt-3 mt-4 border-t border-gray-200 sm:pt-6 dark:border-gray-700">
                  <div>
                    <button
                      class="inline-flex items-center p-2 text-sm font-medium text-center text-gray-500 rounded-lg hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                      type="button"
                      data-dropdown-toggle="weekly-sales-dropdown"
                    >
                      Last 7 days{" "}
                      <svg
                        class="w-4 h-4 ml-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M19 9l-7 7-7-7"
                        ></path>
                      </svg>
                    </button>
                    {/* <!-- Dropdown menu --> */}
                    <div
                      class="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded shadow dark:bg-gray-700 dark:divide-gray-600"
                      id="weekly-sales-dropdown"
                    >
                      <div class="px-4 py-3" role="none">
                        <p
                          class="text-sm font-medium text-gray-900 truncate dark:text-white"
                          role="none"
                        >
                          Sep 16, 2021 - Sep 22, 2021
                        </p>
                      </div>
                      <ul class="py-1" role="none">
                        <li>
                          <a
                            href="#"
                            class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
                            role="menuitem"
                          >
                            Yesterday
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
                            role="menuitem"
                          >
                            Today
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
                            role="menuitem"
                          >
                            Last 7 days
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
                            role="menuitem"
                          >
                            Last 30 days
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
                            role="menuitem"
                          >
                            Last 90 days
                          </a>
                        </li>
                      </ul>
                      <div class="py-1" role="none">
                        <a
                          href="#"
                          class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
                          role="menuitem"
                        >
                          Custom...
                        </a>
                      </div>
                    </div>
                  </div>
                  <div class="flex-shrink-0">
                    <a
                      href="#"
                      class="inline-flex items-center p-2 text-xs font-medium uppercase rounded-lg text-primary-700 sm:text-sm hover:bg-gray-100 dark:text-primary-500 dark:hover:bg-gray-700"
                    >
                      Sales Report
                      <svg
                        class="w-4 h-4 ml-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M9 5l7 7-7 7"
                        ></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
              {/* <!--Tabs widget --> */}
              <div class="p-4 bg-white border border-gray-200 rounded-lg shadow-sm dark:border-gray-700 sm:p-6 dark:bg-gray-800">
                <h3 class="flex items-center mb-4 text-lg font-semibold text-gray-900 dark:text-white">
                  Statistics this month
                  <button
                    data-popover-target="popover-description"
                    data-popover-placement="bottom-end"
                    type="button"
                  >
                    <svg
                      class="w-4 h-4 ml-2 text-gray-400 hover:text-gray-500"
                      aria-hidden="true"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    <span class="sr-only">Show information</span>
                  </button>
                </h3>
                <div
                  data-popover
                  id="popover-description"
                  role="tooltip"
                  class="absolute z-10 invisible inline-block text-sm font-light text-gray-500 transition-opacity duration-300 bg-white border border-gray-200 rounded-lg shadow-sm opacity-0 w-72 dark:bg-gray-800 dark:border-gray-600 dark:text-gray-400"
                >
                  <div class="p-3 space-y-2">
                    <h3 class="font-semibold text-gray-900 dark:text-white">
                      Statistics
                    </h3>
                    <p>
                      Statistics is a branch of applied mathematics that
                      involves the collection, description, analysis, and
                      inference of conclusions from quantitative data.
                    </p>
                    <a
                      href="#"
                      class="flex items-center font-medium text-primary-600 dark:text-primary-500 dark:hover:text-primary-600 hover:text-primary-700"
                    >
                      Read more{" "}
                      <svg
                        class="w-4 h-4 ml-1"
                        aria-hidden="true"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                    </a>
                  </div>
                  <div data-popper-arrow></div>
                </div>
                <div class="sm:hidden">
                  <label for="tabs" class="sr-only">
                    Select tab
                  </label>
                  <select
                    id="tabs"
                    class="bg-gray-50 border-0 border-b border-gray-200 text-gray-900 text-sm rounded-t-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  >
                    <option>Statistics</option>
                    <option>Services</option>
                    <option>FAQ</option>
                  </select>
                </div>
                <ul
                  class="hidden text-sm font-medium text-center text-gray-500 divide-x divide-gray-200 rounded-lg sm:flex dark:divide-gray-600 dark:text-gray-400"
                  id="fullWidthTab"
                  data-tabs-toggle="#fullWidthTabContent"
                  role="tablist"
                >
                  <li class="w-full">
                    <button
                      id="faq-tab"
                      data-tabs-target="#faq"
                      type="button"
                      role="tab"
                      aria-controls="faq"
                      aria-selected="true"
                      class="inline-block w-full p-4 rounded-tl-lg bg-gray-50 hover:bg-gray-100 focus:outline-none dark:bg-gray-700 dark:hover:bg-gray-600"
                    >
                      Top Performed
                    </button>
                  </li>
                  <li class="w-full">
                    <button
                      id="about-tab"
                      data-tabs-target="#about"
                      type="button"
                      role="tab"
                      aria-controls="about"
                      aria-selected="false"
                      class="inline-block w-full p-4 bg-gray-50 hover:bg-gray-100 focus:outline-none dark:bg-gray-700 dark:hover:bg-gray-600"
                    >
                      Top Shared News
                    </button>
                  </li>
                  <li class="w-full">
                    <button
                      id="about-tab"
                      data-tabs-target="#about"
                      type="button"
                      role="tab"
                      aria-controls="about"
                      aria-selected="false"
                      class="inline-block w-full p-4 rounded-tr-lg bg-gray-50 hover:bg-gray-100 focus:outline-none dark:bg-gray-700 dark:hover:bg-gray-600"
                    >
                      Top Commented
                    </button>
                  </li>
                </ul>
                <div
                  id="fullWidthTabContent"
                  class="border-t border-gray-200 dark:border-gray-600"
                >
                  <div
                    class="hidden pt-4"
                    id="faq"
                    role="tabpanel"
                    aria-labelledby="faq-tab"
                  >
                    <ul
                      role="list"
                      class="divide-y divide-gray-200 dark:divide-gray-700"
                    >
                      <li class="py-3 sm:py-4">
                        <div class="flex items-center justify-between">
                          <div class="flex items-center min-w-0">
                            <img
                              class="flex-shrink-0 w-10 h-10"
                              src="/images/products/iphone.png"
                              alt="imac image"
                            />
                            <div class="ml-3">
                              <p class="font-medium text-gray-900 truncate dark:text-white">
                                iPhone 14 Pro
                              </p>
                              <div class="flex items-center justify-end flex-1 text-sm text-green-500 dark:text-green-400">
                                <svg
                                  class="w-4 h-4"
                                  fill="currentColor"
                                  viewBox="0 0 20 20"
                                  xmlns="http://www.w3.org/2000/svg"
                                  aria-hidden="true"
                                >
                                  <path
                                    clip-rule="evenodd"
                                    fill-rule="evenodd"
                                    d="M10 17a.75.75 0 01-.75-.75V5.612L5.29 9.77a.75.75 0 01-1.08-1.04l5.25-5.5a.75.75 0 011.08 0l5.25 5.5a.75.75 0 11-1.08 1.04l-3.96-4.158V16.25A.75.75 0 0110 17z"
                                  ></path>
                                </svg>
                                2.5%
                                <span class="ml-2 text-gray-500">
                                  vs last month
                                </span>
                              </div>
                            </div>
                          </div>
                          <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                            $445,467
                          </div>
                        </div>
                      </li>
                      <li class="py-3 sm:py-4">
                        <div class="flex items-center justify-between">
                          <div class="flex items-center min-w-0">
                            <img
                              class="flex-shrink-0 w-10 h-10"
                              src="/images/products/imac.png"
                              alt="imac image"
                            />
                            <div class="ml-3">
                              <p class="font-medium text-gray-900 truncate dark:text-white">
                                Apple iMac 27"
                              </p>
                              <div class="flex items-center justify-end flex-1 text-sm text-green-500 dark:text-green-400">
                                <svg
                                  class="w-4 h-4"
                                  fill="currentColor"
                                  viewBox="0 0 20 20"
                                  xmlns="http://www.w3.org/2000/svg"
                                  aria-hidden="true"
                                >
                                  <path
                                    clip-rule="evenodd"
                                    fill-rule="evenodd"
                                    d="M10 17a.75.75 0 01-.75-.75V5.612L5.29 9.77a.75.75 0 01-1.08-1.04l5.25-5.5a.75.75 0 011.08 0l5.25 5.5a.75.75 0 11-1.08 1.04l-3.96-4.158V16.25A.75.75 0 0110 17z"
                                  ></path>
                                </svg>
                                12.5%
                                <span class="ml-2 text-gray-500">
                                  vs last month
                                </span>
                              </div>
                            </div>
                          </div>
                          <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                            $256,982
                          </div>
                        </div>
                      </li>
                      <li class="py-3 sm:py-4">
                        <div class="flex items-center justify-between">
                          <div class="flex items-center min-w-0">
                            <img
                              class="flex-shrink-0 w-10 h-10"
                              src="/images/products/watch.png"
                              alt="watch image"
                            />
                            <div class="ml-3">
                              <p class="font-medium text-gray-900 truncate dark:text-white">
                                Apple Watch SE
                              </p>
                              <div class="flex items-center justify-end flex-1 text-sm text-red-600 dark:text-red-500">
                                <svg
                                  class="w-4 h-4"
                                  fill="currentColor"
                                  viewBox="0 0 20 20"
                                  xmlns="http://www.w3.org/2000/svg"
                                  aria-hidden="true"
                                >
                                  <path
                                    clip-rule="evenodd"
                                    fill-rule="evenodd"
                                    d="M10 3a.75.75 0 01.75.75v10.638l3.96-4.158a.75.75 0 111.08 1.04l-5.25 5.5a.75.75 0 01-1.08 0l-5.25-5.5a.75.75 0 111.08-1.04l3.96 4.158V3.75A.75.75 0 0110 3z"
                                  ></path>
                                </svg>
                                1.35%
                                <span class="ml-2 text-gray-500">
                                  vs last month
                                </span>
                              </div>
                            </div>
                          </div>
                          <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                            $201,869
                          </div>
                        </div>
                      </li>
                      <li class="py-3 sm:py-4">
                        <div class="flex items-center justify-between">
                          <div class="flex items-center min-w-0">
                            <img
                              class="flex-shrink-0 w-10 h-10"
                              src="/images/products/ipad.png"
                              alt="ipad image"
                            />
                            <div class="ml-3">
                              <p class="font-medium text-gray-900 truncate dark:text-white">
                                Apple iPad Air
                              </p>
                              <div class="flex items-center justify-end flex-1 text-sm text-green-500 dark:text-green-400">
                                <svg
                                  class="w-4 h-4"
                                  fill="currentColor"
                                  viewBox="0 0 20 20"
                                  xmlns="http://www.w3.org/2000/svg"
                                  aria-hidden="true"
                                >
                                  <path
                                    clip-rule="evenodd"
                                    fill-rule="evenodd"
                                    d="M10 17a.75.75 0 01-.75-.75V5.612L5.29 9.77a.75.75 0 01-1.08-1.04l5.25-5.5a.75.75 0 011.08 0l5.25 5.5a.75.75 0 11-1.08 1.04l-3.96-4.158V16.25A.75.75 0 0110 17z"
                                  ></path>
                                </svg>
                                12.5%
                                <span class="ml-2 text-gray-500">
                                  vs last month
                                </span>
                              </div>
                            </div>
                          </div>
                          <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                            $103,967
                          </div>
                        </div>
                      </li>
                      <li class="py-3 sm:py-4">
                        <div class="flex items-center justify-between">
                          <div class="flex items-center min-w-0">
                            <img
                              class="flex-shrink-0 w-10 h-10"
                              src="/images/products/imac.png"
                              alt="imac image"
                            />
                            <div class="ml-3">
                              <p class="font-medium text-gray-900 truncate dark:text-white">
                                Apple iMac 24"
                              </p>
                              <div class="flex items-center justify-end flex-1 text-sm text-red-600 dark:text-red-500">
                                <svg
                                  class="w-4 h-4"
                                  fill="currentColor"
                                  viewBox="0 0 20 20"
                                  xmlns="http://www.w3.org/2000/svg"
                                  aria-hidden="true"
                                >
                                  <path
                                    clip-rule="evenodd"
                                    fill-rule="evenodd"
                                    d="M10 3a.75.75 0 01.75.75v10.638l3.96-4.158a.75.75 0 111.08 1.04l-5.25 5.5a.75.75 0 01-1.08 0l-5.25-5.5a.75.75 0 111.08-1.04l3.96 4.158V3.75A.75.75 0 0110 3z"
                                  ></path>
                                </svg>
                                2%
                                <span class="ml-2 text-gray-500">
                                  vs last month
                                </span>
                              </div>
                            </div>
                          </div>
                          <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                            $98,543
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div
                    class="hidden pt-4"
                    id="about"
                    role="tabpanel"
                    aria-labelledby="about-tab"
                  >
                    <ul
                      role="list"
                      class="divide-y divide-gray-200 dark:divide-gray-700"
                    >
                      <li class="py-3 sm:py-4">
                        <div class="flex items-center space-x-4">
                          <div class="flex-shrink-0">
                            <img
                              class="w-8 h-8 rounded-full"
                              src="/images/users/neil-sims.png"
                              alt="Neil image"
                            />
                          </div>
                          <div class="flex-1 min-w-0">
                            <p class="font-medium text-gray-900 truncate dark:text-white">
                              Neil Sims
                            </p>
                            <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                              email@flowbite.com
                            </p>
                          </div>
                          <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                            $3320
                          </div>
                        </div>
                      </li>
                      <li class="py-3 sm:py-4">
                        <div class="flex items-center space-x-4">
                          <div class="flex-shrink-0">
                            <img
                              class="w-8 h-8 rounded-full"
                              src="/images/users/bonnie-green.png"
                              alt="Neil image"
                            />
                          </div>
                          <div class="flex-1 min-w-0">
                            <p class="font-medium text-gray-900 truncate dark:text-white">
                              Bonnie Green
                            </p>
                            <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                              email@flowbite.com
                            </p>
                          </div>
                          <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                            $2467
                          </div>
                        </div>
                      </li>
                      <li class="py-3 sm:py-4">
                        <div class="flex items-center space-x-4">
                          <div class="flex-shrink-0">
                            <img
                              class="w-8 h-8 rounded-full"
                              src="/images/users/michael-gough.png"
                              alt="Neil image"
                            />
                          </div>
                          <div class="flex-1 min-w-0">
                            <p class="font-medium text-gray-900 truncate dark:text-white">
                              Michael Gough
                            </p>
                            <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                              email@flowbite.com
                            </p>
                          </div>
                          <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                            $2235
                          </div>
                        </div>
                      </li>
                      <li class="py-3 sm:py-4">
                        <div class="flex items-center space-x-4">
                          <div class="flex-shrink-0">
                            <img
                              class="w-8 h-8 rounded-full"
                              src="/images/users/thomas-lean.png"
                              alt="Neil image"
                            />
                          </div>
                          <div class="flex-1 min-w-0">
                            <p class="font-medium text-gray-900 truncate dark:text-white">
                              Thomes Lean
                            </p>
                            <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                              email@flowbite.com
                            </p>
                          </div>
                          <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                            $1842
                          </div>
                        </div>
                      </li>
                      <li class="py-3 sm:py-4">
                        <div class="flex items-center space-x-4">
                          <div class="flex-shrink-0">
                            <img
                              class="w-8 h-8 rounded-full"
                              src="/images/users/lana-byrd.png"
                              alt="Neil image"
                            />
                          </div>
                          <div class="flex-1 min-w-0">
                            <p class="font-medium text-gray-900 truncate dark:text-white">
                              Lana Byrd
                            </p>
                            <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                              email@flowbite.com
                            </p>
                          </div>
                          <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                            $1044
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                {/* <!-- Card Footer --> */}
                <div class="flex items-center justify-between pt-3 mt-5 border-t border-gray-200 sm:pt-6 dark:border-gray-700">
                  <div>
                    <button
                      class="inline-flex items-center p-2 text-sm font-medium text-center text-gray-500 rounded-lg hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                      type="button"
                      data-dropdown-toggle="stats-dropdown"
                    >
                      Last 7 days{" "}
                      <svg
                        class="w-4 h-4 ml-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M19 9l-7 7-7-7"
                        ></path>
                      </svg>
                    </button>
                    {/* <!-- Dropdown menu --> */}
                    <div
                      class="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded shadow dark:bg-gray-700 dark:divide-gray-600"
                      id="stats-dropdown"
                    >
                      <div class="px-4 py-3" role="none">
                        <p
                          class="text-sm font-medium text-gray-900 truncate dark:text-white"
                          role="none"
                        >
                          Sep 16, 2021 - Sep 22, 2021
                        </p>
                      </div>
                      <ul class="py-1" role="none">
                        <li>
                          <a
                            href="#"
                            class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
                            role="menuitem"
                          >
                            Yesterday
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
                            role="menuitem"
                          >
                            Today
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
                            role="menuitem"
                          >
                            Last 7 days
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
                            role="menuitem"
                          >
                            Last 30 days
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
                            role="menuitem"
                          >
                            Last 90 days
                          </a>
                        </li>
                      </ul>
                      <div class="py-1" role="none">
                        <a
                          href="#"
                          class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
                          role="menuitem"
                        >
                          Custom...
                        </a>
                      </div>
                    </div>
                  </div>
                  <div class="flex-shrink-0">
                    <a
                      href="#"
                      class="inline-flex items-center p-2 text-xs font-medium uppercase rounded-lg text-primary-700 sm:text-sm hover:bg-gray-100 dark:text-primary-500 dark:hover:bg-gray-700"
                    >
                      Full Report
                      <svg
                        class="w-4 h-4 ml-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M9 5l7 7-7 7"
                        ></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="grid w-full grid-cols-1 gap-4 mt-4 xl:grid-cols-2 2xl:grid-cols-3">
              <div class="items-center justify-between p-4 bg-white border border-gray-200 rounded-lg shadow-sm sm:flex dark:border-gray-700 sm:p-6 dark:bg-gray-800">
                <div class="w-full">
                  <h3 class="text-base font-normal text-gray-500 dark:text-gray-400">
                    New News
                  </h3>
                  <span class="text-2xl font-bold leading-none text-gray-900 sm:text-3xl dark:text-white">
                    2,340
                  </span>
                  <p class="flex items-center text-base font-normal text-gray-500 dark:text-gray-400">
                    <span class="flex items-center mr-1.5 text-sm text-green-500 dark:text-green-400">
                      <svg
                        class="w-4 h-4"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                      >
                        <path
                          clip-rule="evenodd"
                          fill-rule="evenodd"
                          d="M10 17a.75.75 0 01-.75-.75V5.612L5.29 9.77a.75.75 0 01-1.08-1.04l5.25-5.5a.75.75 0 011.08 0l5.25 5.5a.75.75 0 11-1.08 1.04l-3.96-4.158V16.25A.75.75 0 0110 17z"
                        ></path>
                      </svg>
                      12.5%
                    </span>
                    Since last month
                  </p>
                </div>
                <div class="w-full" id="new-products-chart"></div>
              </div>
              <div class="items-center justify-between p-4 bg-white border border-gray-200 rounded-lg shadow-sm sm:flex dark:border-gray-700 sm:p-6 dark:bg-gray-800">
                <div class="w-full">
                  <h3 class="text-base font-normal text-gray-500 dark:text-gray-400">
                    Users
                  </h3>
                  <span class="text-2xl font-bold leading-none text-gray-900 sm:text-3xl dark:text-white">
                    2,340
                  </span>
                  <p class="flex items-center text-base font-normal text-gray-500 dark:text-gray-400">
                    <span class="flex items-center mr-1.5 text-sm text-green-500 dark:text-green-400">
                      <svg
                        class="w-4 h-4"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                      >
                        <path
                          clip-rule="evenodd"
                          fill-rule="evenodd"
                          d="M10 17a.75.75 0 01-.75-.75V5.612L5.29 9.77a.75.75 0 01-1.08-1.04l5.25-5.5a.75.75 0 011.08 0l5.25 5.5a.75.75 0 11-1.08 1.04l-3.96-4.158V16.25A.75.75 0 0110 17z"
                        ></path>
                      </svg>
                      3,4%
                    </span>
                    Since last month
                  </p>
                </div>
                <div class="w-full" id="week-signups-chart"></div>
              </div>
              <div class="p-4 bg-white border border-gray-200 rounded-lg shadow-sm dark:border-gray-700 sm:p-6 dark:bg-gray-800">
                <div class="w-full">
                  <h3 class="mb-2 text-base font-normal text-gray-500 dark:text-gray-400">
                    Audience by age
                  </h3>
                  <div class="flex items-center mb-2">
                    <div class="w-16 text-sm font-medium dark:text-white">
                      50+
                    </div>
                    <div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                      <div
                        class="bg-primary-600 h-2.5 rounded-full dark:bg-blue-500"
                        style={calculateWidth(25)}
                      ></div>
                    </div>
                  </div>
                  <div class="flex items-center mb-2">
                    <div class="w-16 text-sm font-medium dark:text-white">
                      40+
                    </div>
                    <div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                      <div
                        class="bg-primary-600 h-2.5 rounded-full dark:bg-blue-500"
                        style={calculateWidth(15)}
                      ></div>
                    </div>
                  </div>
                  <div class="flex items-center mb-2">
                    <div class="w-16 text-sm font-medium dark:text-white">
                      30+
                    </div>
                    <div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                      <div
                        class="bg-primary-600 h-2.5 rounded-full dark:bg-blue-500"
                        style={calculateWidth(60)}
                      ></div>
                    </div>
                  </div>
                  <div class="flex items-center mb-2">
                    <div class="w-16 text-sm font-medium dark:text-white">
                      20+
                    </div>
                    <div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                      <div
                        class="bg-primary-600 h-2.5 rounded-full dark:bg-blue-500"
                        style={calculateWidth(30)}
                      ></div>
                    </div>
                  </div>
                </div>
                <div id="traffic-channels-chart" class="w-full"></div>
              </div>
            </div>
            <div class="grid grid-rows-1 my-4 xl:grid-rows-1 xl:gap-4">
              {/* <!-- Right Content --> */}
              <div class="grid gap-4">
                <div class="p-4 bg-white border border-gray-200 rounded-lg shadow-sm dark:border-gray-700 sm:p-6 dark:bg-gray-800">
                  <div class="items-center justify-between pb-4 border-b border-gray-200 sm:flex dark:border-gray-700">
                    <div class="w-full mb-4 sm:mb-0">
                      <h3 class="text-base font-normal text-gray-500 dark:text-gray-400">
                        Users by category
                      </h3>
                      <span class="text-2xl font-bold leading-none text-gray-900 sm:text-3xl dark:text-white">
                        Desktop PC
                      </span>
                      <p class="flex items-center text-base font-normal text-gray-500 dark:text-gray-400">
                        <span class="flex items-center mr-1.5 text-sm text-green-500 dark:text-green-400">
                          <svg
                            class="w-4 h-4"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                            aria-hidden="true"
                          >
                            <path
                              clip-rule="evenodd"
                              fill-rule="evenodd"
                              d="M10 17a.75.75 0 01-.75-.75V5.612L5.29 9.77a.75.75 0 01-1.08-1.04l5.25-5.5a.75.75 0 011.08 0l5.25 5.5a.75.75 0 11-1.08 1.04l-3.96-4.158V16.25A.75.75 0 0110 17z"
                            ></path>
                          </svg>
                          2.5%
                        </span>
                        Since last month
                      </p>
                    </div>
                    <div class="w-full max-w-lg">
                      <div
                        date-rangepicker
                        class="grid items-center grid-cols-2 gap-4"
                      >
                        <div class="relative">
                          <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <svg
                              class="w-5 h-5 text-gray-500 dark:text-gray-400"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                              xmlns="http://www.w3.org/2000/svg"
                              aria-hidden="true"
                            >
                              <path d="M5.25 12a.75.75 0 01.75-.75h.01a.75.75 0 01.75.75v.01a.75.75 0 01-.75.75H6a.75.75 0 01-.75-.75V12zM6 13.25a.75.75 0 00-.75.75v.01c0 .414.336.75.75.75h.01a.75.75 0 00.75-.75V14a.75.75 0 00-.75-.75H6zM7.25 12a.75.75 0 01.75-.75h.01a.75.75 0 01.75.75v.01a.75.75 0 01-.75.75H8a.75.75 0 01-.75-.75V12zM8 13.25a.75.75 0 00-.75.75v.01c0 .414.336.75.75.75h.01a.75.75 0 00.75-.75V14a.75.75 0 00-.75-.75H8zM9.25 10a.75.75 0 01.75-.75h.01a.75.75 0 01.75.75v.01a.75.75 0 01-.75.75H10a.75.75 0 01-.75-.75V10zM10 11.25a.75.75 0 00-.75.75v.01c0 .414.336.75.75.75h.01a.75.75 0 00.75-.75V12a.75.75 0 00-.75-.75H10zM9.25 14a.75.75 0 01.75-.75h.01a.75.75 0 01.75.75v.01a.75.75 0 01-.75.75H10a.75.75 0 01-.75-.75V14zM12 9.25a.75.75 0 00-.75.75v.01c0 .414.336.75.75.75h.01a.75.75 0 00.75-.75V10a.75.75 0 00-.75-.75H12zM11.25 12a.75.75 0 01.75-.75h.01a.75.75 0 01.75.75v.01a.75.75 0 01-.75.75H12a.75.75 0 01-.75-.75V12zM12 13.25a.75.75 0 00-.75.75v.01c0 .414.336.75.75.75h.01a.75.75 0 00.75-.75V14a.75.75 0 00-.75-.75H12zM13.25 10a.75.75 0 01.75-.75h.01a.75.75 0 01.75.75v.01a.75.75 0 01-.75.75H14a.75.75 0 01-.75-.75V10zM14 11.25a.75.75 0 00-.75.75v.01c0 .414.336.75.75.75h.01a.75.75 0 00.75-.75V12a.75.75 0 00-.75-.75H14z"></path>
                              <path
                                clip-rule="evenodd"
                                fill-rule="evenodd"
                                d="M5.75 2a.75.75 0 01.75.75V4h7V2.75a.75.75 0 011.5 0V4h.25A2.75 2.75 0 0118 6.75v8.5A2.75 2.75 0 0115.25 18H4.75A2.75 2.75 0 012 15.25v-8.5A2.75 2.75 0 014.75 4H5V2.75A.75.75 0 015.75 2zm-1 5.5c-.69 0-1.25.56-1.25 1.25v6.5c0 .69.56 1.25 1.25 1.25h10.5c.69 0 1.25-.56 1.25-1.25v-6.5c0-.69-.56-1.25-1.25-1.25H4.75z"
                              ></path>
                            </svg>
                          </div>
                          <input
                            name="start"
                            type="text"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                            placeholder="From"
                          />
                        </div>
                        <div class="relative">
                          <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <svg
                              class="w-5 h-5 text-gray-500 dark:text-gray-400"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                              xmlns="http://www.w3.org/2000/svg"
                              aria-hidden="true"
                            >
                              <path d="M5.25 12a.75.75 0 01.75-.75h.01a.75.75 0 01.75.75v.01a.75.75 0 01-.75.75H6a.75.75 0 01-.75-.75V12zM6 13.25a.75.75 0 00-.75.75v.01c0 .414.336.75.75.75h.01a.75.75 0 00.75-.75V14a.75.75 0 00-.75-.75H6zM7.25 12a.75.75 0 01.75-.75h.01a.75.75 0 01.75.75v.01a.75.75 0 01-.75.75H8a.75.75 0 01-.75-.75V12zM8 13.25a.75.75 0 00-.75.75v.01c0 .414.336.75.75.75h.01a.75.75 0 00.75-.75V14a.75.75 0 00-.75-.75H8zM9.25 10a.75.75 0 01.75-.75h.01a.75.75 0 01.75.75v.01a.75.75 0 01-.75.75H10a.75.75 0 01-.75-.75V10zM10 11.25a.75.75 0 00-.75.75v.01c0 .414.336.75.75.75h.01a.75.75 0 00.75-.75V12a.75.75 0 00-.75-.75H10zM9.25 14a.75.75 0 01.75-.75h.01a.75.75 0 01.75.75v.01a.75.75 0 01-.75.75H10a.75.75 0 01-.75-.75V14zM12 9.25a.75.75 0 00-.75.75v.01c0 .414.336.75.75.75h.01a.75.75 0 00.75-.75V10a.75.75 0 00-.75-.75H12zM11.25 12a.75.75 0 01.75-.75h.01a.75.75 0 01.75.75v.01a.75.75 0 01-.75.75H12a.75.75 0 01-.75-.75V12zM12 13.25a.75.75 0 00-.75.75v.01c0 .414.336.75.75.75h.01a.75.75 0 00.75-.75V14a.75.75 0 00-.75-.75H12zM13.25 10a.75.75 0 01.75-.75h.01a.75.75 0 01.75.75v.01a.75.75 0 01-.75.75H14a.75.75 0 01-.75-.75V10zM14 11.25a.75.75 0 00-.75.75v.01c0 .414.336.75.75.75h.01a.75.75 0 00.75-.75V12a.75.75 0 00-.75-.75H14z"></path>
                              <path
                                clip-rule="evenodd"
                                fill-rule="evenodd"
                                d="M5.75 2a.75.75 0 01.75.75V4h7V2.75a.75.75 0 011.5 0V4h.25A2.75 2.75 0 0118 6.75v8.5A2.75 2.75 0 0115.25 18H4.75A2.75 2.75 0 012 15.25v-8.5A2.75 2.75 0 014.75 4H5V2.75A.75.75 0 015.75 2zm-1 5.5c-.69 0-1.25.56-1.25 1.25v6.5c0 .69.56 1.25 1.25 1.25h10.5c.69 0 1.25-.56 1.25-1.25v-6.5c0-.69-.56-1.25-1.25-1.25H4.75z"
                              ></path>
                            </svg>
                          </div>
                          <input
                            name="end"
                            type="text"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                            placeholder="To"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="w-full" id="sales-by-category"></div>
                  {/* <!-- Card Footer --> */}
                  <div class="flex items-center justify-between pt-3 mt-4 border-t border-gray-200 sm:pt-6 dark:border-gray-700">
                    <div>
                      <button
                        class="inline-flex items-center p-2 text-sm font-medium text-center text-gray-500 rounded-lg hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                        type="button"
                        data-dropdown-toggle="sales-by-category-dropdown"
                      >
                        Last 7 days{" "}
                        <svg
                          class="w-4 h-4 ml-2"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M19 9l-7 7-7-7"
                          ></path>
                        </svg>
                      </button>
                      {/* <!-- Dropdown menu --> */}
                      <div
                        class="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded shadow dark:bg-gray-700 dark:divide-gray-600"
                        id="sales-by-category-dropdown"
                      >
                        <div class="px-4 py-3" role="none">
                          <p
                            class="text-sm font-medium text-gray-900 truncate dark:text-white"
                            role="none"
                          >
                            Sep 16, 2021 - Sep 22, 2021
                          </p>
                        </div>
                        <ul class="py-1" role="none">
                          <li>
                            <a
                              href="#"
                              class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
                              role="menuitem"
                            >
                              Yesterday
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
                              role="menuitem"
                            >
                              Today
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
                              role="menuitem"
                            >
                              Last 7 days
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
                              role="menuitem"
                            >
                              Last 30 days
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
                              role="menuitem"
                            >
                              Last 90 days
                            </a>
                          </li>
                        </ul>
                        <div class="py-1" role="none">
                          <a
                            href="#"
                            class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
                            role="menuitem"
                          >
                            Custom...
                          </a>
                        </div>
                      </div>
                    </div>
                    <div class="flex-shrink-0">
                      <a
                        href="#"
                        class="inline-flex items-center p-2 text-xs font-medium uppercase rounded-lg text-primary-700 sm:text-sm hover:bg-gray-100 dark:text-primary-500 dark:hover:bg-gray-700"
                      >
                        Sales Report
                        <svg
                          class="w-4 h-4 ml-1"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M9 5l7 7-7 7"
                          ></path>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
                <div class="p-4 bg-white border border-gray-200 rounded-lg shadow-sm dark:border-gray-700 sm:p-6 dark:bg-gray-800">
                  <div class="flex items-center justify-between pb-4 mb-4 border-b border-gray-200 dark:border-gray-700">
                    <div>
                      <h3 class="text-base font-normal text-gray-500 dark:text-gray-400">
                        Traffic by device
                      </h3>
                      <span class="text-2xl font-bold leading-none text-gray-900 sm:text-3xl dark:text-white">
                        Desktop
                      </span>
                    </div>
                    <a
                      href="#"
                      class="inline-flex items-center p-2 text-xs font-medium uppercase rounded-lg text-primary-700 sm:text-sm hover:bg-gray-100 dark:text-primary-500 dark:hover:bg-gray-700"
                    >
                      Full report
                      <svg
                        class="w-4 h-4 ml-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M9 5l7 7-7 7"
                        ></path>
                      </svg>
                    </a>
                  </div>
                  <div id="traffic-by-device"></div>
                  {/* <!-- Card Footer --> */}
                  <div class="flex items-center justify-between pt-4 lg:justify-evenly sm:pt-6">
                    <div>
                      <svg
                        class="w-8 h-8 mb-1 text-gray-500 dark:text-gray-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                      >
                        <path
                          clip-rule="evenodd"
                          fill-rule="evenodd"
                          d="M2 4.25A2.25 2.25 0 014.25 2h11.5A2.25 2.25 0 0118 4.25v8.5A2.25 2.25 0 0115.75 15h-3.105a3.501 3.501 0 001.1 1.677A.75.75 0 0113.26 18H6.74a.75.75 0 01-.484-1.323A3.501 3.501 0 007.355 15H4.25A2.25 2.25 0 012 12.75v-8.5zm1.5 0a.75.75 0 01.75-.75h11.5a.75.75 0 01.75.75v7.5a.75.75 0 01-.75.75H4.25a.75.75 0 01-.75-.75v-7.5z"
                        ></path>
                      </svg>
                      <h3 class="text-gray-500 dark:text-gray-400">Desktop</h3>
                      <h4 class="text-xl font-bold dark:text-white">234k</h4>
                      <p class="flex items-center text-sm text-gray-500 dark:text-gray-400">
                        <span class="flex items-center mr-1.5 text-sm text-green-500 dark:text-green-400">
                          <svg
                            class="w-4 h-4"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                            aria-hidden="true"
                          >
                            <path
                              clip-rule="evenodd"
                              fill-rule="evenodd"
                              d="M10 17a.75.75 0 01-.75-.75V5.612L5.29 9.77a.75.75 0 01-1.08-1.04l5.25-5.5a.75.75 0 011.08 0l5.25 5.5a.75.75 0 11-1.08 1.04l-3.96-4.158V16.25A.75.75 0 0110 17z"
                            ></path>
                          </svg>
                          4%
                        </span>
                        vs last month
                      </p>
                    </div>
                    <div>
                      <svg
                        class="w-8 h-8 mb-1 text-gray-500 dark:text-gray-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                      >
                        <path d="M8 16.25a.75.75 0 01.75-.75h2.5a.75.75 0 010 1.5h-2.5a.75.75 0 01-.75-.75z"></path>
                        <path
                          clip-rule="evenodd"
                          fill-rule="evenodd"
                          d="M4 4a3 3 0 013-3h6a3 3 0 013 3v12a3 3 0 01-3 3H7a3 3 0 01-3-3V4zm4-1.5v.75c0 .414.336.75.75.75h2.5a.75.75 0 00.75-.75V2.5h1A1.5 1.5 0 0114.5 4v12a1.5 1.5 0 01-1.5 1.5H7A1.5 1.5 0 015.5 16V4A1.5 1.5 0 017 2.5h1z"
                        ></path>
                      </svg>
                      <h3 class="text-gray-500 dark:text-gray-400">Phone</h3>
                      <h4 class="text-xl font-bold dark:text-white">94k</h4>
                      <p class="flex items-center text-sm text-gray-500 dark:text-gray-400">
                        <span class="flex items-center mr-1.5 text-sm text-red-600 dark:text-red-500">
                          <svg
                            class="w-4 h-4"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                            aria-hidden="true"
                          >
                            <path
                              clip-rule="evenodd"
                              fill-rule="evenodd"
                              d="M10 3a.75.75 0 01.75.75v10.638l3.96-4.158a.75.75 0 111.08 1.04l-5.25 5.5a.75.75 0 01-1.08 0l-5.25-5.5a.75.75 0 111.08-1.04l3.96 4.158V3.75A.75.75 0 0110 3z"
                            ></path>
                          </svg>
                          1%
                        </span>
                        vs last month
                      </p>
                    </div>
                    <div>
                      <svg
                        class="w-8 h-8 mb-1 text-gray-500 dark:text-gray-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                      >
                        <path
                          clip-rule="evenodd"
                          fill-rule="evenodd"
                          d="M5 1a3 3 0 00-3 3v12a3 3 0 003 3h10a3 3 0 003-3V4a3 3 0 00-3-3H5zM3.5 4A1.5 1.5 0 015 2.5h10A1.5 1.5 0 0116.5 4v12a1.5 1.5 0 01-1.5 1.5H5A1.5 1.5 0 013.5 16V4zm5.25 11.5a.75.75 0 000 1.5h2.5a.75.75 0 000-1.5h-2.5z"
                        ></path>
                      </svg>
                      <h3 class="text-gray-500 dark:text-gray-400">Tablet</h3>
                      <h4 class="text-xl font-bold dark:text-white">16k</h4>
                      <p class="flex items-center text-sm text-gray-500 dark:text-gray-400">
                        <span class="flex items-center mr-1.5 text-sm text-red-600 dark:text-red-500">
                          <svg
                            class="w-4 h-4"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                            aria-hidden="true"
                          >
                            <path
                              clip-rule="evenodd"
                              fill-rule="evenodd"
                              d="M10 3a.75.75 0 01.75.75v10.638l3.96-4.158a.75.75 0 111.08 1.04l-5.25 5.5a.75.75 0 01-1.08 0l-5.25-5.5a.75.75 0 111.08-1.04l3.96 4.158V3.75A.75.75 0 0110 3z"
                            ></path>
                          </svg>
                          0,6%
                        </span>
                        vs last month
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- 2 columns --> */}
            <div class="grid grid-cols-1 my-4 xl:grid-cols-2 xl:gap-4">
              {/* <!-- Activity Card --> */}

              {/* <!--Carousel widget --> */}
            </div>
            {/* <div class="p-4 bg-white border border-gray-200 rounded-lg shadow-sm dark:border-gray-700 sm:p-6 dark:bg-gray-800"> */}
            {/* <!-- Card header --> */}

            {/* <!-- Table --> */}

            {/* <!-- Card Footer --> */}

            {/* </div> */}
          </div>
        </div>
      </div>
    </Fragment>
  );
};
