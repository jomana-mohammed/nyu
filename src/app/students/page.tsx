import React from 'react';
import Image from 'next/image';
import studentsImg from '@/app/assets/imgs/images.jpeg';
import { ScrollArea } from '@radix-ui/react-scroll-area';
import { ScrollBar } from '@/components/ui/scroll-area';
import firstImg from '@/app/assets/imgs/GAIG3bXWUAA0Ref.jpg';
import secondImg from '@/app/assets/imgs/F9THch-XMAAYtOU.jpg';
import thirdImg from '@/app/assets/imgs/F-loOb8WMAAeXUy.jpg';
import fourthImg from '@/app/assets/imgs/1696432939707.png';
import fifthImg from '@/app/assets/imgs/GFl8XrAWIAALS_W.jpg';
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
        {
            scrolledImg: fourthImg,
            imgKey: '4',
        },
        {
            scrolledImg: fifthImg,
            imgKey: '5',
        }
    ];

    return (
        <div className='flex flex-col items-center justify-center'>
        <div className="flex flex-col items-center justify-center mt-16 md:flex-row">
            <Image src={studentsImg} alt='students img' className="w-48 h-52" />
            <div className="text-white m-4 bg-sky-900 flex hover:bg-purple-900 transition-colors duration-500 w-full max-w-4xl h-52">
                <div className="flex flex-col justify-center h-full">
                    <h1 className="text-4xl m-4">Students Guides</h1>
                    <p className="text-xl m-4">We&apos;re here to support you as you explore your personal, academic, and professional interests while at NYU. Here&apos;s where you can find our top tools, services, resources, and opportunities.</p>
                </div>
            </div>
        </div>
    
        <div className='bg-gray-200 p-8 mt-24 w-full'>
            <h1 className='text-4xl font-bold text-center p-2'>
                Meet The NYU Global Programs
            </h1>
    
            <ScrollArea className="scroll-area w-full max-w-8xl overflow-x-auto whitespace-nowrap rounded-md mt-12">
                <div className="flex space-x-4 p-4">
                    {ScrolledImgs.map((ScrolledImg) => (
                        <figure key={ScrolledImg.imgKey} className="shrink-0">
                            <div className="overflow-hidden rounded-md">
                                <Image
                                    src={ScrolledImg.scrolledImg}
                                    alt='hello'
                                    className="aspect-[3/4] h-fit w-fit object-cover"
                                    style={{ width: '400px', height: '400px' }}
                                />
                            </div>
                        </figure>
                    ))}
                </div>
                <ScrollBar className="scroll-bar" orientation="horizontal" />
            </ScrollArea>
        </div>
    </div>
    
    );
};

export default StudentsPage;
