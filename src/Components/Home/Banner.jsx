import React from 'react';
import { FaStar  } from "react-icons/fa6";
import { Typewriter } from 'react-simple-typewriter'



const Banner = () => {
    return (
        <>
          <section className='flex justify-between items-center'>
            <div>
                <h1  className='lg:text-[120px] text-[57px] font-semibold text-[#001C55] font-roboto '>Sabkat Ahmed Rafi</h1>
                <p className='text-4xl font-light pb-4 lg:text-left text-center'>A <Typewriter words={['Programmer', 'Developer']} cursor={true} cursorBlinking={true} loop={0} /></p>
                <p className='pb-4 lg:text-left text-center font-extralight lg:w-[600px] text-xl'>A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.</p>
                <div className='flex lg:flex-none justify-center lg:justify-start items-center lg:items-start'>
                <a href="https://github.com/sabkat-ahmed-rafi" target='_blank' className='btn bg-[#001C55] text-white hover:text-[#001C55] hover:bg-transparent hover:border hover:border-[#001C55] '><button className='flex space-x-2 items-center'><FaStar  color='yellow' size={20} className='' /><span className='text-xl '> Star Me On Github</span></button></a>
                </div>
            </div>
            <div>

            </div>
          </section>
        </>
    );
};

export default Banner;