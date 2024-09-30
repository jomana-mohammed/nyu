import React from 'react';
import Image from 'next/image';
import studentsImg from '@/app/assets/imgs/images.jpeg';
import { ScrollArea } from '@radix-ui/react-scroll-area';
import { ScrollBar } from '@/components/ui/scroll-area';
import firstImg from '@/app/assets/imgs/GAIG3bXWUAA0Ref.jpg';
import secondImg from '@/app/assets/imgs/F9THch-XMAAYtOU.jpg';
import thirdImg from '@/app/assets/imgs/F-loOb8WMAAeXUy.jpg';
import { StaticImageData } from 'next/image';
import '@/app/students/students.css';


interface ScrollBarProps {
    scrolledImg: StaticImageData;
    imgKey: string;
}

const StudentsPage = () => {
    const ScrolledImgs: ScrollBarProps[] = [
        {
            scrolledImg: firstImg,
            imgKey: '1',
        },
        {
            scrolledImg: secondImg,
            imgKey: '2',
        },
        {
            scrolledImg: thirdImg,
            imgKey: '3',
        },
    ];

    return (
        <div className='items-center justify-center'>
            <div className="flex items-center justify-center" style={{ marginTop: '70px' }}>
                <Image src={studentsImg} alt='students img' style={{ width: '200px', height: '200px' }} />
                <div className="text-white m-8 bg-sky-900 flex hover:bg-purple-900 transition-colors duration-500" style={{ width: '800px', height: '200px' }}>
                    <div style={{ width: '800px', height: '200px' }}>
                        <h1 className="text-4xl m-4">Students Guides</h1>
                        <p className="text-xl m-4">We're here to support you as you explore your personal, academic, and professional interests while at NYU. Here's where you can find our top tools, services, resources, and opportunities.</p>
                    </div>
                </div>
            </div>

            <div style={{marginTop:'100px'}} className='bg-gray-200 p-8'>

                <div style={{  display: 'inline-block', marginLeft:'450px'}}>
                    <h1 className='text-4xl font-bold p-2' >
                        Meet The NYU Global Programs
                    </h1>
                </div>

                <ScrollArea className="scroll-area w-full max-w-5xl overflow-x-auto whitespace-nowrap rounded-md mt-12" style={{marginLeft:'200px'}}>
                    <div className="flex space-x-4 p-4">
                        {ScrolledImgs.map((ScrolledImg) => (
                            <figure key={ScrolledImg.imgKey} className="shrink-0">
                                <div className="overflow-hidden rounded-md">
                                    <Image
                                        src={ScrolledImg.scrolledImg}
                                        alt='hello'
                                        className="aspect-[3/4] h-fit w-fit object-cover"
                                        style={{width:'400px' , height:'400px'}}
                                    />
                                </div>
                                {/* <figcaption className="pt-2 text-xs text-muted-foreground">
                                    Photo by{" "}
                                    <span className="font-semibold text-foreground">
                                        {ScrolledImg.imgKey}
                                    </span>
                                </figcaption> */}
                            </figure>
                        ))}
                    </div>
                    <ScrollBar className="scroll-bar" orientation="horizontal"  />
                </ScrollArea>
            </div>
        </div>
    );
};

export default StudentsPage;