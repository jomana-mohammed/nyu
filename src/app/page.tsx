import React from "react";
import Image from 'next/image';
import HelloImg from './assets/imgs/18-0117-023-scaled.jpg';
import AdmissionsImg from './assets/imgs/admissions.jpeg';
import AcademicImg from './assets/imgs/maxresdefault.jpg';
import Link from "next/link";


export default function Home() {

  return (
    <div>
      <div className="flex items-center justify-center mt-40">
        <div className="flex space-x-4" style={{ width: '1000px', height: '400px' }}>
          <Image style={{ width: '600px', height: '400px' }} src={HelloImg} alt="NYU image" />
              <div className="bg-neutral-800 hover:bg-purple-900 transition-colors duration-500 m-8" style={{ width: '600px', height: '300px' }}>
                  <div style={{ width: '400px', height: '200px'}} className="m-6">
                    <p className="text-white text-2xl">
                      We're here to support you as you explore your personal, academic, and professional interests while at NYU. Here's where you can find our top tools, services, resources, and opportunities.
                    </p>
                  </div>
                  <div className="bg-neutral-900 hover:bg-purple-900 transition-colors duration-500 rounded-[6px] mb-4" style={{ width: '150px', marginLeft: '50px' }}>
                    <Link className="text-white text-xl mx-4"
                    href={'https://www.nyu.edu/about.html'}>
                      Learn more 
                    </Link>
                  </div>
              </div>
        </div>
      </div>

      <div className="mt-40 text-white" >

        <div className="flex items-center justify-center" >
            <div className="m-8 bg-sky-900 flex hover:bg-purple-900 transition-colors duration-500" style={{ width:'800px', height: '350px'}}>
              <div style={{width:'500px' , height:'300px'}}>
                <h1 className="text-4xl m-4">Admissions</h1>
                <p className="text-xl m-4">Since its inception, NYU has been a distinctly urban university, one that NYU founder, Albert Gallatin, called a university that is "in and of the city." Today, the University has evolved into a university that is "in and of the great cities of the world." NYU's global network comprises three degree-granting portal campuses: one in the heart of New York City, a second in Abu Dhabi, and a third in Shanghai.</p>
              </div>
              <div className="ml-4">
                <Image style={{ width: '300px', height: '300px' , marginLeft:'70px' , marginTop:'-60px' }}  src={AdmissionsImg} alt="NYU image"></Image>
              </div>
            </div>
        </div>

        <div className="flex items-center justify-center mt-8" >
            <div className="m-8 bg-neutral-500 flex hover:bg-purple-900 transition-colors duration-500" style={{ width:'800px', height: '350px' }}>
              <div className="ml-4">
                <Image style={{ width: '400px', height: '300px' , marginLeft:'-60px' ,marginTop:'80px' }}  src={AcademicImg} alt="NYU image"></Image>
              </div>
              <div style={{width:'500px' , height:'300px'}}>
                <h1 className="text-4xl m-4">Academics</h1>
                <p className="text-xl m-4">The core of New York University is the academic enterprise. The best students and faculty are drawn to the University by the allure of being part of a compelling intellectual and creative enterprise — a community of scholars characterized by collaboration, innovation, and incandescent teaching. NYU students get the experience of attending a truly global university.</p>
              </div>

            </div>
        </div>
      </div>


    </div>

  );
}

