import React from "react";
import Image from 'next/image';
import HelloImg from '../assets/imgs/18-0117-023-scaled.jpg';
import AdmissionsImg from '../assets/imgs/admissions.jpeg';
import AcademicImg from '../assets/imgs/maxresdefault.jpg';
import Link from "next/link";

export default function MobileHome() {

    return (
        <div>
            <div className="flex flex-col md:flex-row items-center justify-center mt-20 md:mt-40">
            <div className="flex flex-col md:flex-row space-x-0 md:space-x-4">
                <Image
                className="w-full md:w-1/2"
                style={{ height: 'auto', maxHeight: '400px' }}
                src={HelloImg}
                alt="NYU image"
                />
                <div className="bg-neutral-800 hover:bg-purple-900 transition-colors duration-500 m-8 md:w-1/2" style={{ maxWidth: '600px', height: 'auto' }}>
                <div className="p-6">
                    <p className="text-white text-lg md:text-2xl">
                    We&apos;re here to support you as you explore your personal, academic, and professional interests while at NYU. Here&apos;s where you can find our top tools, services, resources, and opportunities.
                    </p>
                </div>
                <div className="bg-neutral-900 hover:bg-purple-900 transition-colors duration-500 rounded-[6px] flex items-center justify-center w-full md:w-auto mx-auto md:ml-12 mt-4">
                    <Link className="text-white text-xl mx-4" href={'https://www.nyu.edu/about.html'}>
                    Learn more
                    </Link>
                </div>
                </div>
            </div>
            </div>
        
            <div className="mt-20 md:mt-40 text-white">
            <div className="flex items-center justify-center">
                <div className="m-4 bg-sky-900 flex flex-col md:flex-row hover:bg-purple-900 transition-colors duration-500" style={{ maxHeight: 'auto' }}>
                <div className="p-4 md:p-8 md:w-1/2">
                    <h1 className="text-2xl md:text-4xl">Admissions</h1>
                    <p className="text-md md:text-xl mt-4">
                    Since its inception, NYU has been a distinctly urban university, one that NYU founder, Albert Gallatin, called a university that is in and of the city. Today, the University has evolved into a university that is in and of the great cities of the world. NYU&apos;s global network comprises three degree-granting portal campuses: one in the heart of New York City, a second in Abu Dhabi, and a third in Shanghai.
                    </p>
                </div>
                <div className="mt-4 md:mt-0">
                    <Image
                    className="mx-auto md:mx-0"
                    style={{ width: '250px', height: '250px' }}
                    src={AdmissionsImg}
                    alt="NYU image"
                    />
                </div>
                </div>
            </div>
        
            <div className="flex items-center justify-center mt-8">
                <div className="m-4 bg-neutral-500 flex flex-col md:flex-row hover:bg-purple-900 transition-colors duration-500" style={{ maxHeight: 'auto' }}>
                <div className="order-2 md:order-1 p-4">
                    <h1 className="text-2xl md:text-4xl">Academics</h1>
                    <p className="text-md md:text-xl mt-4">
                    The core of New York University is the academic enterprise. The best students and faculty are drawn to the University by the allure of being part of a compelling intellectual and creative enterprise — a community of scholars characterized by collaboration, innovation, and incandescent teaching. NYU students get the experience of attending a truly global university.
                    </p>
                </div>
                <div className="order-1 md:order-2 mt-4 md:mt-0">
                    <Image
                    className="mx-auto md:mx-0"
                    style={{ width: '350px', height: '250px' }}
                    src={AcademicImg}
                    alt="NYU image"
                    />
                </div>
                </div>
            </div>
            </div>
        </div>
        

    );
}
