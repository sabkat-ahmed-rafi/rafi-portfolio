import React from 'react';
import { GoProjectRoadmap } from "react-icons/go";


const Project = () => {
    return (
        <>
            <section className='flex gap-5 pb-5 flex-wrap justify-center'>
                <div className='border bg-[#A6E1FA] p-5 w-[400px] space-y-3'>
                    <h1 className='flex font-semibold space-x-2 items-center text-2xl text-[#001C55]'><GoProjectRoadmap /> <span>MediMarketHub</span></h1>
                    <p className='font-roboto text-[#001C55]'>MediMarketHub is a Multi-Vendor <b>E-commerce</b> Platform for Medicines and Healthcare Products which is built with <b>MERN</b> stack.</p>
                    <div className='flex space-x-4 text-blue-600 underline'>
                    <p><a href="https://zesty-florentine-44a022.netlify.app" target="_blank" >Live Site</a></p>
                    <p><a href="https://github.com/sabkat-ahmed-rafi/MediMarketHub-Frontend" target="_blank" >Frontend</a></p>
                    <p><a href="https://github.com/sabkat-ahmed-rafi/MediMarketHub-Backend" target="_blank" >Backend</a></p>
                    </div>
                    <div className='flex flex-wrap space-x-3'>
                        <img className='lg:w-[30px] w-[30px]' src="html.png" alt="" />
                        <img className='lg:w-[30px] w-[30px]' src="css.png" alt="" />
                        <img className='lg:w-[30px] w-[30px]' src="js.png" alt="" />
                        <img className='lg:w-[30px] w-[30px]' src="tailwind.png" alt="" />
                        <img className='lg:w-[30px] w-[30px]' src="react.png" alt="" />
                        <img className='lg:w-[30px] w-[30px]' src="nodejs.png" alt="" />
                        <img className='lg:w-[30px] w-[30px]' src="express.png" alt="" />
                        <img className='lg:w-[30px] w-[30px]' src="mongodb.png" alt="" />
                    </div>
                </div>
                <div className='border bg-[#A6E1FA] p-5 w-[400px] space-y-3'>
                    <h1 className='flex font-semibold space-x-2 items-center text-2xl text-[#001C55]'><GoProjectRoadmap /> <span>CareerCove</span></h1>
                    <p className='font-roboto text-[#001C55]'>CareerCove is a <b>Job Marketplace</b> where user can post and apply for a jobs.</p>
                    <div className='flex space-x-4 text-blue-600 underline'>
                    <p><a href="https://sparkly-scone-67107e.netlify.app" target="_blank" >Live Site</a></p>
                    <p><a href="https://github.com/sabkat-ahmed-rafi/CareerCove-Frontend" target="_blank" >Frontend</a></p>
                    <p><a href="https://github.com/sabkat-ahmed-rafi/CareerCove-Backend" target="_blank" >Backend</a></p>
                    </div>
                    <div className='flex flex-wrap space-x-3'>
                        <img className='lg:w-[30px] w-[30px]' src="html.png" alt="" />
                        <img className='lg:w-[30px] w-[30px]' src="css.png" alt="" />
                        <img className='lg:w-[30px] w-[30px]' src="js.png" alt="" />
                        <img className='lg:w-[30px] w-[30px]' src="tailwind.png" alt="" />
                        <img className='lg:w-[30px] w-[30px]' src="react.png" alt="" />
                        <img className='lg:w-[30px] w-[30px]' src="nodejs.png" alt="" />
                        <img className='lg:w-[30px] w-[30px]' src="express.png" alt="" />
                        <img className='lg:w-[30px] w-[30px]' src="mongodb.png" alt="" />
                    </div>
                </div>
            </section>
        </>
    );
};

export default Project;