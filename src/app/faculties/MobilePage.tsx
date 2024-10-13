import React from 'react';
import Link from 'next/link';
import '@/app/faculties/facultiesPage.css'


const MobilePage = () => {

    return (
        <div className='flex flex-col md:flex-row md:ml-0 sm:max-w-[425px] mx-auto'>
            <div className='flex flex-col md:flex-row w-full justify-center items-center gap-4 p-4'>
                <div className='border-4 border font-bold text-3xl text-gray-50 w-full max-w-[350px] h-[450px]'>
                    <p className='mt-6 ml-10'>Faculty of Science</p>
                    <div className="hover-div">
                        <p className='text-xl'>Arts & Science is the founding school and academic heart of New York University, comprising the College of Arts & Science, the Graduate School of Arts & Science, and Liberal Studies.</p>
                        <p className='text-xl'>Areas of study and research span science, the social sciences, and the humanities.</p>
                        <div>
                            <Link href={'https://cas.nyu.edu/'} className='fade-in-link mt-2'>College of Arts and Science</Link>
                        </div>
                    </div>
                </div>
    
                <div className='border-4 border font-bold text-3xl text-gray-50 w-full max-w-[350px] h-[450px]'>
                    <p className='mt-6 ml-10'>Faculty of Nursing</p>
                    <div className="hover-div-2">
                        <p className='text-lg'>College of Nursing is committed to producing lifelong learners who will excel in their nursing careers and be recognized as leaders who keep patient-centered care and the health of society at the forefront of their values.</p>
                        <p className='text-lg'>Founded in 1932, NYU Meyers is the second-largest private university college of nursing in the US, & the quality characteristic of NYU.</p>
                        <div>
                            <Link href={'https://nursing.nyu.edu/'} className='fade-in-link mt-2'>College of Nursing</Link>
                        </div>
                    </div>
                </div>
            </div>
    
            <div className='flex flex-col md:flex-row w-full justify-center items-center gap-4 p-4'>
                <div className='border-4 border font-bold text-3xl text-gray-50 w-full max-w-[350px] h-[450px]'>
                    <p className='mt-6 ml-10'>Faculty of Dentistry</p>
                    <div className="hover-div-3">
                        <p className='text-xl'>The NYU College of Dentistry (NYU Dentistry) educates nearly ten percent of our nation's dentists. An evidence-based curriculum teaches students to rely on solid data to treat people throughout the lifespan.</p>
                        <div>
                            <Link href={'https://dental.nyu.edu/'} className='fade-in-link mt-2'>College of Dentistry</Link>
                        </div>
                    </div>
                </div>
    
                <div className='border-4 border font-bold text-3xl text-gray-50 w-full max-w-[350px] h-[450px]'>
                    <p className='mt-6 ml-10'>Faculty of Fine Arts</p>
                    <div className="hover-div-4">
                        <p className='text-lg'>The Institute of Fine Arts is dedicated to graduate teaching and advanced research in the history of art, archaeology, and the conservation and technology of works of art.</p>
                        <p className='text-lg'>Founded in 1932, NYU Meyers is the second-largest private university college of nursing in the US, & the quality characteristic of NYU.</p>
                        <div>
                            <Link href={'https://ifa.nyu.edu/'} className='fade-in-link mt-2'>College of Fine Arts</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
    
};


export default MobilePage ; 