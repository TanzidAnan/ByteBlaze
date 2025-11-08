import React from 'react';
import Nav from '../Components/Nav';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
    return (
        <div>
            <Nav></Nav>
            <div>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default MainLayout;