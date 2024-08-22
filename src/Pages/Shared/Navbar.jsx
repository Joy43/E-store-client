import React, { memo, useState, useRef, useEffect } from 'react';
import { Link } from "react-router-dom";
import { FaArrowDown, FaArrowUp } from 'react-icons/fa';
import { AiFillInfoCircle, AiFillContacts, AiOutlineShop } from 'react-icons/ai';
import useAuth from '../../Hooks/useAuth';
import logo from "../../assets/logo.png"
const Navbar = memo(() => {
    const [dropDownState, setDropDownState] = useState(false);
    const { user, logOut } = useAuth();
    const dropDownRef = useRef(null);

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
            <img src={logo} alt="" />
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
                            <img
                                className="w-10 h-10 rounded-full object-cover"
                                src={user?.photoURL}
                                alt="User Avatar"
                            />
                            {dropDownState ? <FaArrowUp /> : <FaArrowDown />}
                        </button>
                        {dropDownState && (
                            <ul className="absolute right-0 top-12 z-50 w-fit rounded-sm bg-slate-200 shadow-md">
                                <li className="px-6 py-2 text-red-500 hover:bg-red-600 hover:text-white cursor-pointer" onClick={handleLogOut}>
                                    Log Out
                                </li>
                                <li className="px-6 py-2 hover:bg-slate-300">
                                    <Link to="#">Profile</Link>
                                </li>
                                <li className="px-6 py-2 hover:bg-slate-300">
                                    <Link to="#">Dashboard</Link>
                                </li>
                            </ul>
                        )}
                    </li>
                ) : (
                    // -----------------login button --------------
                    <li>
                        <Link to="/login" className="">
                        <button className="group h-8 relative flex w-28  items-center rounded-lg border-2 border-sky-400 p-4 text-black">
                            <span>Login</span>
                            <span className="absolute right-3 box-content flex w-1/6 justify-center rounded-md bg-sky-400 duration-300 group-hover:w-5/6"><svg viewBox="0 0 24 24" fill="none" className="w-10" xmlns="http://www.w3.org/2000/svg"><g strokeWidth="0"></g><g strokeLinecap="round" strokeLinejoin="round"></g><g><path d="M4 12H20M20 12L14 6M20 12L14 18" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></g></svg></span></button>
                        </Link>
                    </li>
                )}

                <li className="hover:text-blue-600 transition-all">
                    <Link to="/about" className="flex items-center gap-2">
                        <AiFillInfoCircle />
                        About
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
