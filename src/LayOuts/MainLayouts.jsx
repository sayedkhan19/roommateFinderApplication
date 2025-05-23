import React from 'react';
import { Outlet, useNavigation } from 'react-router';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const MainLayouts = () => {
    const {state} = useNavigation();
    return (
        <div className='w-11/12 mx-auto '>
            <Navbar></Navbar>
            {import.meta.env.VITE_name}
            
       {state=="loading" ? <span className="loading loading-bars loading-xl"></span> :<Outlet></Outlet>}     

            <Footer></Footer>
        </div>
    );
};

export default MainLayouts;