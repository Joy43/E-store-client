import {
    FaAd,
    FaBook,
    FaCalendar,
    FaEnvelope,
    FaHome,
    FaList,
    FaPaypal,
    FaSearch,
    FaShoppingCart,
    FaUsers,
  } from "react-icons/fa";
  import { MdAddShoppingCart } from "react-icons/md";
  import { NavLink, Outlet } from "react-router-dom";
import useCart from "../../Hooks/usecart";
import useAdmin from "../../Hooks/useAdmin";
// -------icon-------
import { IoBarChartSharp } from "react-icons/io5";
import { FcComboChart } from "react-icons/fc";

import { FaLocationCrosshairs } from "react-icons/fa6";

  
  const Dashboard = () => {
    const [cart] = useCart();
    const [isAdmin] = useAdmin();
  
    return (
      <div className="flex min-h-screen">
        {/*---------------- Dashboard Sidebar ------------ */}
        <div className="w-64 bg-purple-900 text-white flex flex-col">
          <div className="p-4 text-2xl font-bold">Dashboard</div>
          <ul className="menu p-4 flex-1 space-y-4">
            {/* ------------admin------ */}
            {isAdmin ? (
              <>
                <li className="shadow-lg shadow-slate-300">
                  <NavLink
                    to="/dashboard/adminhome"
                    className="flex items-center space-x-2 hover:bg-purple-800 p-2 rounded"
                  >
                    <FaHome />
                    <span className="text-sm font-medium  lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">Admin Home</span>
                  </NavLink>
                </li>

                <li>
            <NavLink
              to="/dashboard/cart"
              className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gradient-to-r from-[#7367F0] to-[#9D94F4] rounded-xl m-2 shadow-lg pr-6"
            >
              <span className="inline-flex justify-center items-center ml-4">
                <FaShoppingCart FaShoppingCart className="w-5 h-5"></FaShoppingCart>
              </span>
              <span className="ml-2 text-sm tracking-wide truncate">
              Cart
              </span>
              <span className="hidden md:block px-2 py-0.5 ml-auto text-xs font-medium tracking-wide text-red-500 bg-blue-50 rounded-full">
        cart
              </span>
            </NavLink>
          </li>
                {/* --------iteam--------- */}
                <li className="shadow-lg shadow-slate-300">
                  <NavLink
                    to="/dashboard/addItems"
                    className="flex items-center space-x-2 hover:bg-purple-800 p-2 rounded"
                  >
                    <MdAddShoppingCart />
                    <span>Add Items</span>
                  </NavLink>
                </li>
                <li className="shadow-lg shadow-slate-300">
                  <NavLink
                    to="/dashboard/manageProduct"
                    className="flex items-center space-x-2 hover:bg-purple-800 p-2 rounded"
                  >
                    <FaList />
                    <span className="text-sm font-medium  lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">Manage Items</span>
                  </NavLink>
                </li>
                <li className="shadow-lg shadow-slate-300">
                  <NavLink
                    to="/dashboard/allusers"
                    className="flex items-center space-x-2 hover:bg-purple-800 p-2 rounded"
                  >
                    <FaUsers />
                    <span>Manage Users</span>
                  </NavLink>
                </li>
              </>
            ) : (
              <>
                {/* --------------- User ----------------- */}
                <li className="">
            <NavLink
              to="/dashboard/userhome"
              className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gradient-to-r from-[#7367F0] to-[#9D94F4] rounded-xl m-2 shadow-lg pr-6"
            >
              <span className="inline-flex justify-center items-center ml-4">
                <FaHome className="w-5 h-5 text-blue-400"></FaHome>
              </span>
              <span className="ml-2 text-sm tracking-wide truncate">
             User Home
              </span>
              <span className="hidden md:block px-2 py-0.5 ml-auto text-xs font-medium tracking-wide text-red-500 bg-red-50 rounded-full">
               user
              </span>
            </NavLink>
          </li>
          {/* ----------- Payment------*/}
          <li>
            <NavLink
              to="/dashboard/paymentHistory"
              className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gradient-to-r from-[#7367F0] to-[#9D94F4] rounded-xl m-2 shadow-lg pr-6"
            >
              <span className="inline-flex justify-center items-center ml-4">
                <FcComboChart FcComboChart className="w-5 h-5"></FcComboChart>
              </span>
              <span className="ml-2 text-sm tracking-wide truncate">
               Payments
              </span>
              <span className="hidden md:block px-2 py-0.5 ml-auto text-xs font-medium tracking-wide text-blue-500 bg-red-50 rounded-full">
              payment
              </span>
            </NavLink>
          </li>
          {/* ------------cart--------------- */}
          <li>
            <NavLink
              to="/dashboard/cart"
              className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gradient-to-r from-[#7367F0] to-[#9D94F4] rounded-xl m-2 shadow-lg pr-6"
            >
              <span className="inline-flex justify-center items-center ml-4">
                <FaShoppingCart FaShoppingCart className="w-5 h-5"></FaShoppingCart>
              </span>
              <span className="ml-2 text-sm tracking-wide truncate">
              Cart
              </span>
              <span className="hidden md:block px-2 py-0.5 ml-auto text-xs font-medium tracking-wide text-red-500 bg-blue-50 rounded-full">
        cart
              </span>
            </NavLink>
          </li>
          {/* ------------ community--------------- */}
          <li>
            <NavLink
              to="dashboard/countryfilter"
              className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gradient-to-r from-[#7367F0] to-[#9D94F4] rounded-xl m-2 shadow-lg pr-6"
            >
              <span className="inline-flex justify-center items-center ml-4">
                <FaLocationCrosshairs className="w-5 h-5 text-blue-500"></FaLocationCrosshairs>
              </span>
              <span className="ml-2 text-sm tracking-wide truncate">
               community
              </span>
              <span className="hidden md:block px-2 py-0.5 ml-auto text-xs font-medium tracking-wide text-red-500 bg-blue-50 rounded-full">
                cont
              </span>
            </NavLink>
          </li>
              </>
            )}
            {/* ------------ Shared Nav Links ---------------- */}
            <div className="divider border-t border-purple-700 my-4"></div>
            <li>
              <NavLink
                to="/"
                className="flex items-center space-x-2 hover:bg-purple-800 p-2 rounded"
              >
                <FaHome />
                <span>Home</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/product"
                className="flex items-center space-x-2 hover:bg-purple-800 p-2 rounded"
              >
                <FaSearch />
                <span>Product</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className="flex items-center space-x-2 hover:bg-purple-800 p-2 rounded"
              >
                <FaEnvelope />
                <span>Contact</span>
              </NavLink>
            </li>
          </ul>
          <div className="p-4 text-center border-t border-purple-300">
            © 2024 E-Store
          </div>
        </div>
        {/*------------- Dashboard Content ------------------*/}
        <div className="flex-1 p-8 bg-gray-100">
          <Outlet />
        </div>
      </div>
    );
  };
  
  export default Dashboard;