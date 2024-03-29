import { Fragment } from "react";
import logo from "../../assets/logo/logo.jpg";
import { Link } from "react-router-dom";
import { useMobile } from "../../context/Mobile-Context";
export const AdminNavbar = () => {
  const {mobileDispatch} = useMobile();
  const handleLogout = () =>{
    mobileDispatch({
      type:'INITIAL_STATE'
  })
  }
  return (
    <Fragment>
      <nav class="fixed z-30 w-full bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
        <div class="px-3 py-3 lg:px-5 lg:pl-3">
          <div class="flex items-center justify-between">
            <div class="flex items-center justify-start">
              
              <Link to="/" class="flex ml-2 md:mr-24">
                <img src={logo} class="h-8 rounded-md" alt="News2day Logo" />
                <span class=" ml-4 self-center text-xl font-semibold sm:text-2xl whitespace-nowrap dark:text-white">
                  News2Day
                </span>
              </Link>
              <form action="#" method="GET" class="hidden lg:block lg:pl-3.5">
                <label for="topbar-search" class="sr-only">
                  Search
                </label>
                <div class="relative mt-1 lg:w-96">
                  <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg
                      class="w-5 h-5 text-gray-500 dark:text-gray-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </div>
                  <input
                    type="text"
                    name="email"
                    id="topbar-search"
                    class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="Search"
                  />
                </div>
              </form>
            </div>
            <div class="flex items-center">
              {/* <!-- Search mobile --> */}

              {/* <!-- Notifications --> */}

              {/* <!-- Dropdown menu --> */}

              {/* <!-- Apps --> */}

              {/* <!-- Dropdown menu --> */}

              <div
                id="tooltip-toggle"
                role="tooltip"
                class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
              >
                Toggle dark mode
                <div class="tooltip-arrow" data-popper-arrow></div>
              </div>
              {/* <!-- Profile --> */}

              {/* <!-- Dropdown menu --> */}
              <ul class="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-800 dark:border-gray-700">
              <li>
                <Link
                  to="/adminpanel"
                  class=" md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-00 md:p-0 md:dark:text-blue-00"
                  aria-current="page"
                >
                  Admin Panel
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  class=" md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-00 md:p-0 md:dark:text-blue-00"
                  aria-current="page"
                  onClick={handleLogout}
                >
                  Logout
                </Link>
              </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </Fragment>
  );
};
