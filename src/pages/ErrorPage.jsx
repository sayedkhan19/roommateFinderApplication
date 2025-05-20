import React from 'react';
import errorImg from "../assets/download.png";
import { NavLink } from 'react-router';

const ErrorPage = () => {
    return (
        <div className='w-11/12 mx-auto flex justify-center items-center mt-5 flex-col gap-4'>
            <img className='rounded-xl' src={errorImg} alt="" />
            <NavLink to={"/"} className="btn btn-primary">Go to home</NavLink>
        </div>
    );
};

export default ErrorPage;