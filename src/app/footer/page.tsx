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
    <div className="bg-neutral-900" style={{height:'300px' , marginTop:'100px'}}>
        <div className="container mx-auto flex items-center p-4">
            <div>
                <div className="flex items-center text-white text-xl font-bold ml-12" style={{marginTop:'0px'}}>
                    <FontAwesomeIcon icon={faArchway} fade style={{ width: '60px', height: '60px', color: "white" }} />
                    <h1 className="ml-4 text-5xl" ><a href='/'>NYU</a></h1>
                </div>
                <div style={{marginTop:'20px' , marginLeft:'45px'}}>
                    <p className='text-white' style={{width:'300px'}}>©2024 All Rights Resesrved</p>
                </div>
            </div>

            <div style={{marginLeft:'80px' , marginTop:'40px' }}>
                <p className='text-white text-2xl font-bold'  style={{width:'250px'}} >Main Campuses</p>
                <ul style={{marginLeft:'30px'}}>
                    <li className='mt-6'>
                        <a href="https://www.nyu.edu/" className="text-white transition-colors duration-500  text-lg font-bold hover:text-yellow-300">NewYork</a>
                    </li>
                    <li className='mt-6'>
                        <a href="https://nyuad.nyu.edu/en/" className="text-white transition-colors duration-500  text-lg font-bold hover:text-yellow-300">Abu Dubai</a>
                    </li>
                    <li className='mt-6'>
                        <a href="https://shanghai.nyu.edu/s" className="text-white transition-colors duration-500  text-lg font-bold hover:text-yellow-300">Shanghai</a>
                    </li>
                </ul>
            </div>
            <ul style={{marginLeft:'100px'}}>
                <li className='mt-12'>
                    <a href="/students" className="text-white transition-colors duration-500  text-lg font-bold hover:text-yellow-300">Students</a>
                </li>
                <li className='mt-6'>
                    <a href="/faculties" className="text-white transition-colors duration-500  text-lg font-bold hover:text-yellow-300">Faculties</a>
                </li>
                <li className='mt-6'>
                    <a href="/" className="text-white transition-colors duration-500  text-lg font-bold hover:text-yellow-300">Academics</a>
                </li>
                <li className='mt-6'>
                    <a href="/researches" className="text-white transition-colors duration-500  text-lg font-bold hover:text-yellow-300">Researches</a>
                </li>
            </ul>

            <div>
                <div>
                    <p className='text-white text-xl font-bold' style={{marginLeft:'220px', marginTop:'10px'}}>Contact with NYU</p>
                </div>
                <div className='flex space-x-6' style={{marginLeft:'150px' , marginTop:'50px'}} >
                    <a href='https://www.facebook.com/NYU'>
                        <FontAwesomeIcon icon={faFacebook} style={{width:'40px' , height:'40px'}} color='white' className='transition-colors duration-500 hover:text-yellow-300'/>
                    </a>
                    <a href='https://www.instagram.com/nyuniversity/'>
                        <FontAwesomeIcon icon={faInstagram} style={{width:'40px' , height:'40px'}} className='transition-colors duration-500 hover:text-yellow-300' color='white'/>
                    </a>
                    <a href='https://x.com/nyuniversity'>
                        <FontAwesomeIcon icon={faXTwitter} style={{width:'40px' , height:'40px'}} color='white' className='transition-colors duration-500 hover:text-yellow-300'/>
                    </a>
                    <a href='https://www.linkedin.com/school/new-york-university/'>
                        <FontAwesomeIcon icon={faLinkedin} style={{width:'40px' , height:'40px'}} color='white' className='transition-colors duration-500 hover:text-yellow-300'/>
                    </a>
                    <a href='hhttps://www.youtube.com/user/nyu'>
                        <FontAwesomeIcon icon={faYoutube} style={{width:'40px' , height:'40px'}} color='white' className='transition-colors duration-500 hover:text-yellow-300'/>
                    </a>
                    
                </div>
            </div>
            

        </div>
    </div>
);
};


export default FooterPage;
