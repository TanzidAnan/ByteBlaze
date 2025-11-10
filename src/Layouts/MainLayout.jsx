import React from 'react';
import Nav from '../Components/Nav';
import { Outlet } from 'react-router-dom';
import Footer from '../Components/Footer';

const MainLayout = () => {
    return (
        <div >
            <div className='h-16'>
                <Nav></Nav>
            </div>
            <div className='min-h-[calc(100vh-170px)]'>
                <Outlet></Outlet>
            </div>
            <div>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default MainLayout;