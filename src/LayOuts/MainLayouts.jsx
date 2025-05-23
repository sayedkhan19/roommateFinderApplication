import React, { useState } from 'react';
import { Outlet, useNavigation } from 'react-router';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';


const MainLayouts = () => {
    const [theme, setTheme] = useState('light')
    const {state} = useNavigation();
    return (
        <div className={`container ${theme}`}>
        <div className='w-11/12 mx-auto '>
            
            <div >
                <Navbar theme={theme} setTheme={setTheme}></Navbar>
            </div>
            
            
       {state=="loading" ? <span className="loading loading-bars loading-xl"></span> :<Outlet></Outlet>}     

            <Footer></Footer>
        </div>
        
        </div>
    );
};

export default MainLayouts;