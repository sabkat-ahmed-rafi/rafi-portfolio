import React from 'react';
import 'animate.css';
import { useLocation } from 'react-router-dom';



const Education = () => {

    const location = useLocation();

    return (
        <section key={location.pathname} className='flex flex-col lg:flex-row justify-between items-center font-robotox pb-12'>
            <div key={location.pathname} className='animate__animated animate__fadeInLeftBig'>
         <img src="education.png" className='lg:w-[500px] w-[200px] lg:mx-0 mx-auto pb-16' alt="" />
        </div>
        <div>
            <div key={location.pathname} className='flex items-center justify-normal lg:justify-center space-x-2 animate__animated animate__fadeInRightBig'>
                <img className='w-[100px]' src="college.png" alt="" />
                <div><p className='text-2xl'>Government Rupnagar Model School and College</p>
                <h1>HSC 2021-2023</h1>
            <p>Commerce</p></div>
            </div>
            
        </div>
        </section>
    );
};

export default Education;