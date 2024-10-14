"use client"
import React, { useEffect, useState } from 'react';
import DesktopHome from './Home/DesktopPage';
import MobileHome from './Home/MobilePage';

const FacultiesPage = () => {

    const [windowSize, setWindowSize] = useState<{ width: number | undefined; height: number | undefined }>({
        width: undefined,
        height: undefined,
    });

    useEffect(() => {
        const handleResize = () => {
            setWindowSize({ width: window.innerWidth, height: window.innerHeight });
        };

        window.addEventListener('resize', handleResize);
        handleResize();

        return () => window.removeEventListener('resize', handleResize);
    }, []);
    const size = windowSize;

    return (
        <div>
            {size.width !== undefined && size.width > 768 ? <DesktopHome /> : <MobileHome />}
        </div>
    );
};

export default FacultiesPage;

