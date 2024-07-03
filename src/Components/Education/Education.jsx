import React from 'react';
import EducationGif from '../../../public/Education.json';
import Lottie from 'lottie-react';


const Education = () => {
    return (
        <section className='flex flex-col lg:flex-row justify-between items-center font-robotox'>
            <div>
         <Lottie className='lg:w-[400px] w-[200px] lg:mx-0 mx-auto pb-12' animationData={EducationGif} loop={true} />
        </div>
        <div>
            <div className='flex items-center justify-normal lg:justify-center space-x-2'>
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