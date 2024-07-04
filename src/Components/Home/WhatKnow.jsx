import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';



const WhatKnow = () => {
    
    AOS.init();

    return (
        <>
            <h1 data-aos="fade-up" className='text-[#001C55] font-semibold text-center text-5xl font-roboto mt-[170px]'>What I Do?</h1>

            <section className='lg:flex lg:justify-between items-center'>
                <div data-aos="fade-right">
                <img src="front.png" className='lg:w-[600px] pb-12' alt="" />
                </div>
                <div data-aos="fade-left" className=' space-y-8'>
                    <h1 className='lg:text-left text-center  text-4xl'>Frontend Development</h1>
                    <div className='flex lg:justify-normal justify-center flex-wrap space-x-3'>
                        <img className='w-[50px]' src="html.png" alt="" />
                        <img className='w-[50px]' src="css.png" alt="" />
                        <img className='w-[50px]' src="js.png" alt="" />
                        <img className='w-[50px]' src="tailwind.png" alt="" />
                        <img className='w-[50px]' src="bootstrap.png" alt="" />
                        <img className='w-[50px]' src="react.png" alt="" />
                    </div>
                    <div className='space-y-5 font-roboto'>
                        <p className='flex'><img className='w-[30px]' src="energy.png" alt="" /> <span>Responsive Design: Creating user-friendly interfaces that work on all devices.</span></p>
                        <p className='flex'><img className='w-[30px]' src="energy.png" alt="" /> <span>Modern Technologies: Using React, Tailwind for efficient web apps.
                        </span></p>
                        <p className='flex'><img className='w-[30px]' src="energy.png" alt="" /> <span>Performance Optimization: Enhancing website speed and performance.</span></p>
                    </div>
                </div>
            </section>
            <section className='flex flex-col-reverse lg:flex-row lg:justify-between items-center lg:pb-0 pb-14'>
            <div data-aos="fade-right" className=' space-y-8'>
                    <h1 className='lg:text-left text-center  text-4xl'>Full Stack Development</h1>
                    <div className='flex lg:justify-normal justify-center flex-wrap space-x-5'>
                        <img className='lg:w-[50px] w-[30px]' src="html.png" alt="" />
                        <img className='lg:w-[50px] w-[30px]' src="css.png" alt="" />
                        <img className='lg:w-[50px] w-[30px]' src="js.png" alt="" />
                        <img className='lg:w-[50px] w-[30px]' src="tailwind.png" alt="" />
                        <img className='lg:w-[50px] w-[30px]' src="bootstrap.png" alt="" />
                        <img className='lg:w-[50px] w-[30px]' src="react.png" alt="" />
                        <img className='lg:w-[50px] w-[30px]' src="nodejs.png" alt="" />
                        <img className='lg:w-[50px] w-[30px]' src="express.png" alt="" />
                        <img className='lg:w-[50px] w-[30px]' src="mongodb.png" alt="" />
                    </div>
                    <div className='space-y-5 font-roboto'>
                        <p className='flex'><img className='w-[30px]' src="energy.png" alt="" /> <span>End-to-End Solutions: Building complete web applications with MongoDB, Express, React, and Node.js.</span></p>
                        <p className='flex'><img className='w-[30px]' src="energy.png" alt="" /> <span>Seamless Integration: Ensuring smooth communication between frontend and backend.
                        </span></p>
                        <p className='flex'><img className='w-[30px]' src="energy.png" alt="" /> <span>Database Management: Handling data storage and retrieval efficiently with MongoDB.</span></p>
                    </div>
                </div>
                <div data-aos="fade-left">
                <img src="back.png" className='lg:w-[600px] pb-12' alt="" />
                </div>
            </section>
        </>
    );
};

export default WhatKnow;