"use client";

import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArchway } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';

const NavHeader = () => {

return (
    <header className="bg-neutral-900">
    <nav className="container mx-auto flex items-center p-4">
        <div className="flex items-center text-white text-xl font-bold ml-4">
            <FontAwesomeIcon icon={faArchway} fade style={{ width: '30px', height: '30px', color: "white" }} />
            <h1 className="ml-4 text-2xl" ><a href='/'>NYU</a></h1>
        </div>
        <ul className="flex space-x-16 ml-80">
        <li >
            <a href="/students" className="text-white transition-colors duration-500  text-lg font-bold hover:text-yellow-300">Students</a>
        </li>
        <li>
            <a href="/faculties" className="text-white transition-colors duration-500  text-lg font-bold hover:text-yellow-300">Faculties</a>
        </li>
        <li >
            <a href="/" className="text-white transition-colors duration-500  text-lg font-bold hover:text-yellow-300">Academics</a>
        </li>
        <li >
            <a href="/" className="text-white transition-colors duration-500  text-lg font-bold hover:text-yellow-300">Researches</a>
        </li>
        </ul>

        <div className='flex space-x-6' style={{marginLeft:'150px'}}>
            <Link
                href="/register"
                className="bg-gray-50 py-2 px-4 transition-colors duration-500 rounded-sm text-lg font-bold hover:text-yellow-300 inline-block"
                >
                Register
            </Link>
            <Link
                href="/signIn"
                className="bg-gray-50 py-2 px-4 transition-colors duration-500 rounded-sm text-lg font-bold hover:text-yellow-300 inline-block"
                >
                SignIn
            </Link>    
        </div>

    </nav>
    </header>
);
};


export default NavHeader;
