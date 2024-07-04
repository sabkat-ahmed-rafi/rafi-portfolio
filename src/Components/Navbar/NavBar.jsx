import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import 'animate.css';


const NavBar = () => {

  const location = useLocation();

    const li = <>
      <li><NavLink  to='/'>Home</NavLink></li>
      <li><NavLink to={'/education'}>Education</NavLink></li>
      <li><NavLink to={'/projects'}>Projects</NavLink></li>
      <li><NavLink to={'/contact'}>Contact Me</NavLink></li>
    </>

    return (
        <>
            <section key={location.pathname} className='pt-4 lg:animate__animated lg:animate__fadeInDown'>
            <div className="navbar">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        id='sidebar2'
        className="menu menu-sm dropdown-content z-50 bg-base-100 rounded-box mt-3 w-52 p-2 shadow">
        {li}        
      </ul>
    </div>
    <a className="btn btn-ghost text-[30px] hover:bg-[#EDF9FE] font-playfair italic font-extrabold text-[#001C55] animate-pulse">{'<  />'}</a>
  </div>
  <div className="navbar-end hidden lg:flex">
    <ul className="menu menu-horizontal space-x-6 font-roboto text-[#193a7d]  text-[16px]" id='sidebar'>
      {li}
    </ul>
  </div>
</div>
            </section>
        </>
    );
};

export default NavBar;