"use client";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArchway } from '@fortawesome/free-solid-svg-icons';
import {faFacebook} from '@fortawesome/free-brands-svg-icons';
import {faInstagram} from '@fortawesome/free-brands-svg-icons';
import {faXTwitter} from '@fortawesome/free-brands-svg-icons';
import {faLinkedin} from '@fortawesome/free-brands-svg-icons';
import {faYoutube} from '@fortawesome/free-brands-svg-icons';


const FooterPage = () => {

return (
    <div className="bg-neutral-900 p-6" style={{  marginTop: '100px' }}>
        <div className="container mx-auto flex flex-col md:flex-row p-4">
            <div className="flex flex-col items-start md:items-start md:ml-12">
                <div className="flex items-center text-white text-xl font-bold">
                    <FontAwesomeIcon icon={faArchway} fade style={{ width: '60px', height: '60px', color: "white" }} />
                    <h1 className="ml-4 text-5xl"><a href='/'>NYU</a></h1>
                </div>
                <p className='text-white mt-4' style={{ width: '300px' }}>©2024 All Rights Reserved</p>
            </div>

            <div className="flex flex-col md:ml-14 mt-8 md:mt-0">
                <p className='text-white text-2xl font-bold'>Main Campuses</p>
                <ul className="mt-4">
                    <li>
                        <a href="https://www.nyu.edu/" className="text-white transition-colors duration-500 text-lg font-bold hover:text-yellow-300">New York</a>
                    </li>
                    <li className="mt-4">
                        <a href="https://nyuad.nyu.edu/en/" className="text-white transition-colors duration-500 text-lg font-bold hover:text-yellow-300">Abu Dhabi</a>
                    </li>
                    <li className="mt-4">
                        <a href="https://shanghai.nyu.edu/s" className="text-white transition-colors duration-500 text-lg font-bold hover:text-yellow-300">Shanghai</a>
                    </li>
                </ul>
            </div>

            <ul className="flex flex-col md:ml-14 mt-8 md:mt-0">
                <li>
                    <a href="/students" className="text-white transition-colors duration-500 text-lg font-bold hover:text-yellow-300">Students</a>
                </li>
                <li className="mt-4">
                    <a href="/faculties" className="text-white transition-colors duration-500 text-lg font-bold hover:text-yellow-300">Faculties</a>
                </li>
                <li className="mt-4">
                    <a href="/events" className="text-white transition-colors duration-500 text-lg font-bold hover:text-yellow-300">Events</a>
                </li>
                <li className="mt-4">
                    <a href="/researches" className="text-white transition-colors duration-500 text-lg font-bold hover:text-yellow-300">Researches</a>
                </li>
            </ul>

            <div className="flex flex-col items-start md:ml-14 mt-8 md:mt-0" style={{marginLeft:'135px' , marginTop:'20px'}}>
                <p className='text-white text-xl font-bold' style={{marginLeft:'45px'}}>Contact with NYU</p>
                <div className='flex space-x-6 mt-4'>
                    <a href='https://www.facebook.com/NYU'>
                        <FontAwesomeIcon icon={faFacebook} style={{ width: '40px', height: '40px' }} color='white' className='transition-colors duration-500 hover:text-yellow-300' />
                    </a>
                    <a href='https://www.instagram.com/nyuniversity/'>
                        <FontAwesomeIcon icon={faInstagram} style={{ width: '40px', height: '40px' }} color='white' className='transition-colors duration-500 hover:text-yellow-300' />
                    </a>
                    <a href='https://x.com/nyuniversity'>
                        <FontAwesomeIcon icon={faXTwitter} style={{ width: '40px', height: '40px' }} color='white' className='transition-colors duration-500 hover:text-yellow-300' />
                    </a>
                    <a href='https://www.linkedin.com/school/new-york-university/'>
                        <FontAwesomeIcon icon={faLinkedin} style={{ width: '40px', height: '40px' }} color='white' className='transition-colors duration-500 hover:text-yellow-300' />
                    </a>
                    <a href='https://www.youtube.com/user/nyu'>
                        <FontAwesomeIcon icon={faYoutube} style={{ width: '40px', height: '40px' }} color='white' className='transition-colors duration-500 hover:text-yellow-300' />
                    </a>
                </div>
            </div>
        </div>
    </div>

);
};


export default FooterPage;
