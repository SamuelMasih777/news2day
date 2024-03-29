import { Link } from "react-router-dom"
import logo from '../../../assets/logo/logo.jpg'
export const NavbarMobile = () =>{
    return(
        <nav class="nav bg-white border-gray-200 dark:bg-gray-800">
        <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link to="#" class="flex items-center space-x-3 rtl:space-x-reverse">
            <img src={logo} class="h-8 rounded-md" alt="News2day Logo" />
            <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              News2Day
            </span>
          </Link>
          
          <div
            class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-search"
          >            
            <ul class="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-800 dark:border-gray-700">
              <li>
                <Link
                  to="#"
                  class=" md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-00 md:p-0 md:dark:text-blue-00"
                  aria-current="page"
                >
                  Home
                </Link>
              </li>                          
            </ul>
          </div>
        </div>
      </nav>
    )
}