import React from 'react';
import NavBar from '../Navbar/NavBar';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';

const Root = () => {
    return (
        <>
            <NavBar></NavBar>
            <Outlet></Outlet>
            <Footer className=""></Footer>
        </>
    );
};

export default Root;