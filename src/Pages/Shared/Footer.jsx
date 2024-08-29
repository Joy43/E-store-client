import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

export default function Footer() {
    return (
        <footer className="flex flex-col">
            <div className="flex flex-col items-center justify-between gap-5 bg-[#F6F5F2] py-8 dark:bg-[#4d72c2] dark:text-white md:flex-row md:gap-0 md:px-12">
                <h5 className="text-3xl font-extrabold text-[#1351D8] dark:text-[#FCFDFF]">E-Store</h5>
                <nav className="text-lg">
                    <ul className="flex items-center justify-center gap-6">
                        <li>
                            <a href="#" className="cursor-pointer hover:text-[#1351D8] dark:hover:text-[#FCFDFF] transition-colors duration-300">Home</a>
                        </li>
                        <li>
                            <a href="#" className="cursor-pointer hover:text-[#1351D8] dark:hover:text-[#FCFDFF] transition-colors duration-300">Contact</a>
                        </li>
                        <li>
                            <a href="#" className="cursor-pointer hover:text-[#1351D8] dark:hover:text-[#FCFDFF] transition-colors duration-300">About</a>
                        </li>
                    </ul>
                </nav>
            </div>
            <div className="flex justify-center gap-6 py-4 bg-[#F6F5F2] dark:bg-[#4d72c2]">
                <a href="#" className="text-[#1351D8] dark:text-[#FCFDFF] hover:text-[#FCFDFF] transition-colors duration-300">
                    <FaFacebookF />
                </a>
                <a href="#" className="text-[#1351D8] dark:text-[#FCFDFF] hover:text-[#FCFDFF] transition-colors duration-300">
                    <FaTwitter />
                </a>
                <a href="#" className="text-[#1351D8] dark:text-[#FCFDFF] hover:text-[#FCFDFF] transition-colors duration-300">
                    <FaInstagram />
                </a>
                <a href="#" className="text-[#1351D8] dark:text-[#FCFDFF] hover:text-[#FCFDFF] transition-colors duration-300">
                    <FaLinkedinIn />
                </a>
            </div>
            <aside className="bg-[#FFFFFF] py-5 text-center text-sm text-[#060c1a] dark:bg-[#FCFDFF] dark:text-[#1351D8]">
                <p>&copy; 2024 E-Store. All Rights Reserved.</p>
            </aside>
        </footer>
    );
}
