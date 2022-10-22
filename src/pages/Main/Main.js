import React from 'react';
import { Outlet } from 'react-router-dom';
import LeftSideNav from '../Navbar/LeftSideNav';
import Navbar from '../Navbar/Navbar';
import RightSideNav from '../Navbar/RightSideNav';

const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className='grid grid-cols-12 gap-4 p-4'>
                    <div className='col-span-12 lg:col-span-3 hidden lg:block'>
                        <LeftSideNav></LeftSideNav>
                    </div>
                    <div className='col-span-12 lg:col-span-6 '>
                        <Outlet></Outlet>
                    </div>
                    <div className='col-span-12 lg:col-span-3 '>
                        <RightSideNav></RightSideNav>
                    </div>
            </div>
        </div>
    );
};

export default Main;