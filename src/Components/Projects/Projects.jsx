import React from 'react';
import Project from './Project';
import 'animate.css';
import { useLocation } from 'react-router-dom';


const Projects = () => {

    const location = useLocation();


    return (
        <>
            <section className='flex lg:pb-3 pb-12 lg:flex-row flex-row-reverse lg:justify-center  justify-between '>
            <div key={location.pathname} className='animate__animated animate__fadeInLeftBig'>
            <img src="project.png" className='lg:w-[600px] w-[300px]' alt="" />
            </div>
            <div key={location.pathname} className='lg:pl-0 pl-4  lg:text-center  lg:space-y-4 space-y-2 w-[530px] lg:pt-[150px] pt-5 animate__animated animate__fadeInRightBig'>
                <h1 className='lg:text-5xl text-2xl font-semibold font-roboto text-[#001C55]'>Projects</h1>
                <p className='font-[400] text-slate-500 font-roboto lg:text-xl'>My projects makes use of vast variety of latest technology tools. My best experience is to create E-commerce projects and deploy them. </p>
            </div>
            </section>
            <Project></Project>
        </>
    );
};

export default Projects;