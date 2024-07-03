import React from 'react';
import Lottie from 'lottie-react';
import animationData from '../../../public/Animation.json';
import animationData2 from '../../../public/Animation2.json';

const WhatKnow = () => {
    return (
        <>
            <h1 className='text-[#001C55] font-semibold text-center text-5xl font-roboto mt-[170px]'>What I Do?</h1>

            <section className='lg:flex lg:justify-between items-center'>
                <div>
                <Lottie className='lg:w-[600px] pb-12' animationData={animationData} loop={true} />
                </div>
                <div className=' space-y-8'>
                    <h1 className='lg:text-left text-center  text-4xl'>Frontend Development</h1>
                    <div className='flex lg:justify-normal justify-center flex-wrap space-x-3'>
                        <img className='w-[50px]' src="html.png" alt="" />
                        <img className='w-[50px]' src="css.png" alt="" />
                        <img className='w-[50px]' src="js.png" alt="" />
                        <img className='w-[50px]' src="tailwind.png" alt="" />
                        <img className='w-[50px]' src="bootstrap.png" alt="" />
                        <img className='w-[50px]' src="react.png" alt="" />
                    </div>
                    <div className='space-y-5'>
                        <p className='flex'><img className='w-[30px]' src="energy.png" alt="" /> <span>Responsive Design: Creating user-friendly interfaces that work on all devices.</span></p>
                        <p className='flex'><img className='w-[30px]' src="energy.png" alt="" /> <span>Modern Technologies: Using React, Tailwind for efficient web apps.
                        </span></p>
                        <p className='flex'><img className='w-[30px]' src="energy.png" alt="" /> <span>Performance Optimization: Enhancing website speed and performance.</span></p>
                    </div>
                </div>
            </section>
            <section className='flex flex-col-reverse lg:flex-row lg:justify-between items-center lg:pb-0 pb-14'>
            <div className=' space-y-8'>
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
                    <div className='space-y-5'>
                        <p className='flex'><img className='w-[30px]' src="energy.png" alt="" /> <span>End-to-End Solutions: Building complete web applications with MongoDB, Express, React, and Node.js.</span></p>
                        <p className='flex'><img className='w-[30px]' src="energy.png" alt="" /> <span>Seamless Integration: Ensuring smooth communication between frontend and backend.
                        </span></p>
                        <p className='flex'><img className='w-[30px]' src="energy.png" alt="" /> <span>Database Management: Handling data storage and retrieval efficiently with MongoDB.</span></p>
                    </div>
                </div>
                <div>
                <Lottie className='lg:w-[600px] pb-12' animationData={animationData2} loop={true} />
                </div>
            </section>
        </>
    );
};

export default WhatKnow;