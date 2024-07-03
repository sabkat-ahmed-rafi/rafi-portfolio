import Lottie from 'lottie-react';
import React from 'react';
import ProjectsPhoto from '../../../public/Projects.json';
import Project from './Project';


const Projects = () => {
    return (
        <>
            <section className='flex lg:flex-row flex-row-reverse lg:justify-center  justify-between'>
            <div>
            <Lottie className='lg:w-[600px] w-[200px] ' animationData={ProjectsPhoto} loop={true} />
            </div>
            <div className='lg:pl-0 pl-4  lg:text-center  lg:space-y-4 space-y-2 w-[530px] lg:pt-[150px] pt-5'>
                <h1 className='lg:text-5xl text-2xl font-semibold font-roboto text-[#001C55]'>Projects</h1>
                <p className='font-[400] text-slate-500 font-roboto lg:text-xl'>My projects makes use of vast variety of latest technology tools. My best experience is to create E-commerce projects and deploy them. </p>
            </div>
            </section>
            <Project></Project>
        </>
    );
};

export default Projects;