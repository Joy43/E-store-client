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
import { FcPieChart } from "react-icons/fc";
import { FaLocationCrosshairs } from "react-icons/fa6";
import { SiSourceengine } from "react-icons/si";
import { FcAreaChart } from "react-icons/fc";
import { FcFlowChart } from "react-icons/fc";
  
  const Dashboard = () => {
    const [cart] = useCart();
    const [isAdmin] = useAdmin();
  
    return (
      <div className="flex min-h-screen">
        {/*---------------- Dashboard Sidebar ------------ */}
        <div className="w-64 bg-purple-900 text-white flex flex-col">
          <div className="p-4 text-2xl font-bold">Dashboard</div>
          <ul className="menu p-4 flex-1 space-y-4">
            {isAdmin ? (
              <>
                <li className="shadow-lg shadow-slate-300">
                  <NavLink
                    to="/dashboard/adminHome"
                    className="flex items-center space-x-2 hover:bg-purple-800 p-2 rounded"
                  >
                    <FaHome />
                    <span className="text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">Admin Home</span>
                  </NavLink>
                </li>
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
                    <span className="text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">Manage Items</span>
                  </NavLink>
                </li>
                <li className="shadow-lg shadow-slate-300">
                  <NavLink
                    to="/dashboard/users"
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
              to="dashboard/yearly"
              className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gradient-to-r from-[#7367F0] to-[#9D94F4] rounded-xl m-2 shadow-lg pr-6"
            >
              <span className="inline-flex justify-center items-center ml-4">
                <IoBarChartSharp className="w-5 h-5 text-blue-400"></IoBarChartSharp>
              </span>
              <span className="ml-2 text-sm tracking-wide truncate">
                Visualized Chart
              </span>
              <span className="hidden md:block px-2 py-0.5 ml-auto text-xs font-medium tracking-wide text-red-500 bg-red-50 rounded-full">
                year
              </span>
            </NavLink>
          </li>
          {/* ----------- chart summary------*/}
          <li>
            <NavLink
              to="/dashboard/chartsummary"
              className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gradient-to-r from-[#7367F0] to-[#9D94F4] rounded-xl m-2 shadow-lg pr-6"
            >
              <span className="inline-flex justify-center items-center ml-4">
                <FcComboChart FcComboChart className="w-5 h-5"></FcComboChart>
              </span>
              <span className="ml-2 text-sm tracking-wide truncate">
                chat summary
              </span>
              <span className="hidden md:block px-2 py-0.5 ml-auto text-xs font-medium tracking-wide text-blue-500 bg-red-50 rounded-full">
                summary
              </span>
            </NavLink>
          </li>
          {/* ------------cart--------------- */}
          <li>
            <NavLink
              to="dashboard/cart"
              className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gradient-to-r from-[#7367F0] to-[#9D94F4] rounded-xl m-2 shadow-lg pr-6"
            >
              <span className="inline-flex justify-center items-center ml-4">
                <FaShoppingCart FaShoppingCart className="w-5 h-5"></FaShoppingCart>
              </span>
              <span className="ml-2 text-sm tracking-wide truncate">
              Cart
              </span>
              <span className="hidden md:block px-2 py-0.5 ml-auto text-xs font-medium tracking-wide text-red-500 bg-blue-50 rounded-full">
                topic
              </span>
            </NavLink>
          </li>
          {/* ------------ country filter component--------------- */}
          <li>
            <NavLink
              to="dashboard/countryfilter"
              className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gradient-to-r from-[#7367F0] to-[#9D94F4] rounded-xl m-2 shadow-lg pr-6"
            >
              <span className="inline-flex justify-center items-center ml-4">
                <FaLocationCrosshairs className="w-5 h-5 text-blue-500"></FaLocationCrosshairs>
              </span>
              <span className="ml-2 text-sm tracking-wide truncate">
                Country Filter
              </span>
              <span className="hidden md:block px-2 py-0.5 ml-auto text-xs font-medium tracking-wide text-red-500 bg-blue-50 rounded-full">
                country
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
          <div className="p-4 text-center border-t border-purple-700">
            © 2024 Dashboard
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