import React from 'react';
import NavBar from '../Navbar/NavBar';
import { Outlet } from 'react-router-dom';

const Root = () => {
    return (
        <>
            <NavBar></NavBar>
            <Outlet></Outlet>
        </>
    );
};

export default Root;