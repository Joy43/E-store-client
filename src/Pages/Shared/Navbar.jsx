import React, { memo, useState, useRef, useEffect } from 'react';
import { Link } from "react-router-dom";
import { FaArrowDown, FaArrowUp } from 'react-icons/fa';
import { AiFillInfoCircle, AiFillContacts } from 'react-icons/ai';
import useAuth from '../../Hooks/useAuth';
import logo from "../../assets/logo.png";
import useCart from './../../Hooks/usecart';

const Navbar = memo(() => {
    const [dropDownState, setDropDownState] = useState(false);
    const { user, logOut } = useAuth();
    const dropDownRef = useRef(null);
    const [cart] = useCart();
    const handleLogOut = async () => {
        try {
            await logOut();
            // Optionally redirect or update UI after logout
        } catch (error) {
            console.error("Logout error:", error);
        }
    };

    useEffect(() => {
        const closeDropDown = (e) => {
            if (dropDownRef.current && !dropDownRef.current.contains(e.target)) {
                setDropDownState(false);
            }
        };
        document.addEventListener('mousedown', closeDropDown);
        return () => document.removeEventListener('mousedown', closeDropDown);
    }, []);

    return (
        <nav className="flex items-center justify-between px-4 py-3 bg-[#F3F6FD] shadow-md" role="navigation" aria-label="main navigation">
            <Link to="/" className="text-2xl w-8 h-8 font-bold flex items-center gap-2 text-blue-600">
                <img src={logo} alt="Logo" />
            </Link>
            <ul className="flex items-center gap-6 text-slate-900 space-x-4 md:space-x-6">
                {user ? (
                    <li className="relative" ref={dropDownRef}>
                        <button
                            onClick={() => setDropDownState(!dropDownState)}
                            className="flex items-center gap-2 py-2 hover:text-blue-600 transition-all"
                            aria-expanded={dropDownState}
                            aria-haspopup="true"
                        >
                            <summary className="flex items-center justify-between gap-2 p-2 font-medium marker:content-none hover:cursor-pointer">
                                <span className="flex gap-2">
                                    <img
                                        className="w-6 h-6 rounded-lg"
                                        src="https://lh3.googleusercontent.com/a/AGNmyxbSlMgTRzE3_SMIxpDAhpNad-_CN5_tmph1NQ1KhA=s96-c"
                                        alt="Prajwal Hallale"
                                    />
                                </span>
                                <svg
                                    className="w-5 h-5 text-gray-500 transition group-open:rotate-90"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
                                    fill="currentColor"
                                    viewBox="0 0 16 16"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                                    />
                                </svg>
                            </summary>
                            {dropDownState ? <FaArrowUp /> : <FaArrowDown />}
                        </button>
                        {dropDownState && (
                            <ul className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg">
                               
                               <li>
                                    <button
                                        onClick={handleLogOut}
                                        className="flex gap-2 px-4 py-2 w-full text-left hover:bg-gray-100"
                                    >
                                        Log Out
                                    </button>
                                </li>
                                <li>
                                    <Link
                                        to="/dashboard"
                                        className="flex gap-2 px-4 py-2 hover:bg-gray-100"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth="1.5"
                                            stroke="currentColor"
                                            className="w-6 h-6"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z"
                                            />
                                        </svg>
                                        Dashboard
                                    </Link>
                                </li>
                               
                            </ul>
                        )}
                    </li>
                ) : (
                    <li>
                        <Link to="/login">
                            <button className="group h-8 relative flex w-28 items-center rounded-lg border-2 border-sky-400 p-4 text-black">
                                <span>Login</span>
                                <span className="absolute right-3 box-content flex w-1/6 justify-center rounded-md bg-sky-400 duration-300 group-hover:w-5/6">
                                    <svg
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        className="w-10"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <g strokeWidth="0"></g>
                                        <g strokeLinecap="round" strokeLinejoin="round"></g>
                                        <g>
                                            <path
                                                d="M4 12H20M20 12L14 6M20 12L14 18"
                                                stroke="#fff"
                                                strokeWidth="1.5"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            ></path>
                                        </g>
                                    </svg>
                                </span>
                            </button>
                        </Link>
                    </li>
                )}
                {/* -----------------cart dashboad------------------ */}
                <li className="hover:text-blue-600 transition-all">
                    <Link to="/dashboard/cart" className="flex items-center gap-2">
                    <button className="py-4 px-1 relative border-2 border-transparent text-gray-800 rounded-full hover:text-gray-400 focus:outline-none focus:text-gray-500 transition duration-150 ease-in-out" aria-label="Cart">
  <svg className="h-6 w-6" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
    <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path>
  </svg>
  <span className="absolute inset-0 object-right-top -mr-6">
    <div className="inline-flex items-center px-1.5 py-0.5 border-2 border-white rounded-full text-xs font-semibold leading-4 bg-red-500 text-white">
      {cart.length}
    </div>
  </span>
</button>
                    </Link>
                </li>
                <li className="hover:text-blue-600 transition-all">
                    <Link to="/contact" className="flex items-center gap-2">
                        <AiFillContacts />
                        Contact
                    </Link>
                </li>
            </ul>
        </nav>
    );
});

export default Navbar;
