"use client"
import DesktopHome from './Home/DesktopPage';
import MobileHome from './Home/MobilePage';
import useWindowSize from '@/hooks/useWindowSize';

const FacultiesPage = () => {

    const size = useWindowSize();

    return (
        <div>
            {size.width !== undefined && size.width > 768 ? <DesktopHome /> : <MobileHome />}
        </div>
    );
};

export default FacultiesPage;

