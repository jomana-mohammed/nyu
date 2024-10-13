import '@/app/faculties/facultiesPage.css'
import Link from 'next/link';

const FacultiesPage = () => {
    return(
        <div className='flex flex-col items-center'>
        <div className='flex flex-wrap justify-center p-10'>

            <div className='border-4 border font-bold text-3xl text-gray-50 w-80 h-[450px] m-4' style={{marginLeft:'-200px'}}>
                <p className='mt-6 ml-4'>Faculty of Science</p>
                <div className="hover-div p-4">
                    <p className='text-xl'>Arts & Science is the founding school and academic heart of New York University, comprising the College of Arts & Science, the Graduate School of Arts & Science, and Liberal Studies.</p>
                    <p className='text-xl'>Areas of study and research span science, the social sciences, and the humanities.</p>
                    <div>
                        <Link href={'https://cas.nyu.edu/'} className='fade-in-link mt-2'>College of Arts and Science</Link>
                    </div>
                </div>
            </div>
    
            <div className='border-4 border font-bold text-3xl text-gray-50 w-80 h-[450px] m-4'>
                <p className='mt-6 ml-4'>Faculty of Nursing</p>
                <div className="hover-div-2 p-4">
                    <p className='text-lg'>College of Nursing is committed to producing lifelong learners who will excel in their nursing careers and be recognized as leaders who keep patient-centered care and the health of society at the forefront of their values.</p>
                    <p className='text-lg'>Founded in 1932, NYU Meyers is the second-largest private university college of nursing in the US, & the quality characteristic of NYU.</p>
                    <div>
                        <Link href={'https://nursing.nyu.edu/'} className='fade-in-link mt-2'>College of Nursing</Link>
                    </div>
                </div>
            </div>
        </div>
    
        <div className='flex flex-wrap justify-center p-10'>

            <div className='border-4 border font-bold text-3xl text-gray-50 w-80 h-[450px] m-4'>
                <p className='mt-6 ml-4'>Faculty of Dentistry</p>
                <div className="hover-div-3 p-4">
                    <p className='text-xl'>The NYU College of Dentistry (NYU Dentistry) educates nearly ten percent of our nation&apos;s dentists. An evidence-based curriculum teaches students to rely on solid data to treat people throughout the lifespan.</p>
                    <div>
                        <Link href={'https://dental.nyu.edu/'} className='fade-in-link mt-2'>College of Dentistry</Link>
                    </div>
                </div>
            </div>
    
            <div className='border-4 border font-bold text-3xl text-gray-50 w-80 h-[450px] m-4'>
                <p className='mt-6 ml-4'>Faculty of Fine Arts</p>
                <div className="hover-div-4 p-4">
                    <p className='text-lg'>The Institute of Fine Arts is dedicated to graduate teaching and advanced research in the history of art, archaeology, and the conservation and technology of works of art.</p>
                    <p className='text-lg'>The Institute offers the degrees of Master of Arts and Doctor of Philosophy, M.S. in the Conservation of Historic and Artistic Works.</p>
                    <div>
                        <Link href={'https://ifa.nyu.edu/'} className='fade-in-link mt-2'>College of Fine Arts</Link>
                    </div>
                </div>
            </div>

        </div>
    </div>

    )
}

export default FacultiesPage ; 
