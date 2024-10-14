"use client"
import React, { useEffect, useState } from 'react';
import DesktopPage from './DesktopPage';
import MobilePage from './MobilePage';
import useWindowSize from '../../hooks/useWindowSize';

const FacultiesPage = () => {
    
    const size = useWindowSize();

    return (
        <div>
            {size.width !== undefined && size.width > 768 ? <DesktopPage /> : <MobilePage />}
        </div>
    );
};

export default FacultiesPage;
