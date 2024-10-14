"use client";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArchway } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';

const NavHeader = () => {

return (
            <header className="bg-neutral-900 flex flex-col md:flex-row">
                
            <nav className="container mx-auto flex items-center p-4">
                <div className="flex items-center text-white text-xl font-bold">
                    <FontAwesomeIcon icon={faArchway} fade style={{ width: '30px', height: '30px', color: "white" }} />
                    <h1 className="ml-4 text-2xl"><a href='/'>NYU</a></h1>
                </div>

                <ul className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-16 ml-auto hidden md:flex">
                    <li>
                        <a href="/students" className="text-white transition-colors duration-500 text-lg font-bold hover:text-yellow-300">Students</a>
                    </li>
                    <li>
                        <a href="/faculties" className="text-white transition-colors duration-500 text-lg font-bold hover:text-yellow-300">Faculties</a>
                    </li>
                    <li>
                        <a href="/events" className="text-white transition-colors duration-500 text-lg font-bold hover:text-yellow-300">Events</a>
                    </li>
                    <li>
                        <a href="/researches" className="text-white transition-colors duration-500 text-lg font-bold hover:text-yellow-300">Researches</a>
                    </li>
                </ul>

                <div className="flex space-x-6 ml-auto">
                    <Link href="/register" className="bg-gray-50 py-2 px-4 transition-colors duration-500 rounded-sm text-lg font-bold hover:text-yellow-300 inline-block">Register</Link>
                    <Link href="/signIn" className="bg-gray-50 py-2 px-4 transition-colors duration-500 rounded-sm text-lg font-bold hover:text-yellow-300 inline-block">SignIn</Link>
                </div>
            </nav>

            {/* Mobile Menu */}
            <div className="md:hidden">
                <ul className="flex flex-col space-y-4 p-4 bg-neutral-800">
                    <li>
                        <a href="/students" className="text-white transition-colors duration-500 text-lg font-bold hover:text-yellow-300">Students</a>
                    </li>
                    <li>
                        <a href="/faculties" className="text-white transition-colors duration-500 text-lg font-bold hover:text-yellow-300">Faculties</a>
                    </li>
                    <li>
                        <a href="/events" className="text-white transition-colors duration-500 text-lg font-bold hover:text-yellow-300">Events</a>
                    </li>
                    <li>
                        <a href="/researches" className="text-white transition-colors duration-500 text-lg font-bold hover:text-yellow-300">Researches</a>
                    </li>
                </ul>
            </div>

        </header>
);
};


export default NavHeader;
