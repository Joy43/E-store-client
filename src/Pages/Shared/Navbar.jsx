import React, { memo, useState, useRef, useEffect } from 'react';
import { Link } from "react-router-dom";
import { FaArrowDown, FaArrowUp } from 'react-icons/fa';
import { AiFillHome, AiFillInfoCircle, AiFillContacts, AiOutlineShop } from 'react-icons/ai';

const Navbar = memo(() => {
    const [dropDownState, setDropDownState] = useState(false);
    const dropDownMenuRef = useRef();

    useEffect(() => {
        const closeDropDown = (e) => {
            if (dropDownMenuRef.current && !dropDownMenuRef.current.contains(e.target)) {
                setDropDownState(false);
            }
        };
        document.addEventListener('mousedown', closeDropDown);
        return () => {
            document.removeEventListener('mousedown', closeDropDown);
        };
    }, []);

    return (
        <nav className="flex items-center justify-between px-4 py-3 bg-[#F3F6FD] shadow-md" role="navigation" aria-label="main navigation">
            <Link to="/" className="text-2xl font-bold flex items-center gap-2 text-blue-600">
                <AiOutlineShop className="transition-transform duration-300 transform hover:scale-125 hover:-translate-y-1" />
               E-Store
            </Link>
            <ul className="flex items-center gap-6 text-slate-900">
                <li className="hover:text-blue-600">
                    <Link to="/" className="flex items-center gap-2">
                        <AiFillHome />
                        Home
                    </Link>
                </li>
                <li className="relative" ref={dropDownMenuRef}>
                    <button
                        onClick={() => setDropDownState(!dropDownState)}
                        className="flex items-center gap-1 py-2 hover:text-blue-600 transition-transform"
                        aria-expanded={dropDownState}
                        aria-haspopup="true"
                    >
                        <span>Services</span>
                        {dropDownState ? <FaArrowUp /> : <FaArrowDown />}
                    </button>
                    {dropDownState && (
                        <ul className="absolute top-10 z-10 space-y-2 rounded-lg bg-gray-800 p-3 text-white shadow-lg">
                            <li className="px-3 hover:text-blue-300">
                                <Link to="#">Food</Link>
                            </li>
                            <li className="px-3 hover:text-blue-300">
                                <Link to="#">Transport</Link>
                            </li>
                            <li className="px-3 hover:text-blue-300">
                                <Link to="#">Management</Link>
                            </li>
                        </ul>
                    )}
                </li>
                <li className="hover:text-blue-600">
                    <Link to="/about" className="flex items-center gap-2">
                        <AiFillInfoCircle />
                        About
                    </Link>
                </li>
                <li className="hover:text-blue-600">
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
