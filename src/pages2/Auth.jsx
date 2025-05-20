import React from 'react';
import Navbar from '../components/Navbar';
import { Outlet } from 'react-router';

const Auth = () => {
    return (
        <div className='w-11/12 mx-auto'>
            <Navbar></Navbar>
            auth layoput
            <Outlet></Outlet>
        </div>
    );
};

export default Auth;