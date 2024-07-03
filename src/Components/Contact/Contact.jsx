import Lottie from 'lottie-react';
import React from 'react';
import ContactPhoto from '../../../public/Contact.json';
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter, FaStar } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";



const Contact = () => {
    return (
        <>
           <section className='flex lg:flex-row flex-row-reverse lg:justify-center  justify-between'>
            <div>
            <Lottie className='lg:w-[550px] rounded-full w-[200px]' animationData={ContactPhoto} loop={true} />
            </div>
            <div className='lg:pl-0 pl-4  lg:text-center lg:space-y-4 space-y-2 w-[530px] lg:pt-[150px] pt-5'>
                <h1 className='lg:text-5xl text-2xl font-semibold font-roboto text-[#001C55]'>Contact Me</h1>
                <p className='font-[400] text-slate-500 font-roboto lg:text-xl'>I am available on almost every social media. You can message me, I will reply within 24 hours. I can help you with React, Javascript, Mern stack Development. </p>
                <div className='lg:flex justify-center space-x-4 text-center lg:mt-0 mt-4 hidden'>
            <a href="https://github.com/sabkat-ahmed-rafi" target='_blank'><FaGithub size={40} /></a>
            <a href="https://www.linkedin.com/in/sabkat-ahmed-rafi" target='_blank'><FaLinkedin size={40} color='#0964BF' /></a>
            <a href="https://x.com/SabkatAhmedRafi" target='_blank'><FaSquareXTwitter size={40} color='#000000' /></a>
            <a href="https://www.facebook.com/sabkatahmedrafi" target='_blank'> <FaFacebookSquare size={40} color='#0765FE' /></a>
            <a href="https://www.instagram.com/sabkatahmedrafi" target='_blank'><FaSquareInstagram size={40} color='#E9286A' /></a>
            <a href="mailto:sabkatahmedrafi@gmail.com" target='_blank'><MdEmail  size={40} color='#D44638' /></a>
            </div>
            <div>
            <a href="deedyResume.pdf" download="Sabkat_Ahmed_Rafi_Resume.pdf" target='_blank' className='btn bg-[#001C55] text-white hover:text-[#001C55] hover:bg-transparent hover:border hover:border-[#001C55] font-[300] mb-4 mt-4 font-roboto text-xl lg:flex ml-[180px] lg:w-[176px] hidden'><button>See My Resume</button></a>
            </div>
            </div>
            </section>
            <div className='flex justify-center'>
            <a href="deedyResume.pdf" download="Sabkat_Ahmed_Rafi_Resume.pdf" target='_blank' className='btn bg-[#001C55] text-white hover:text-[#001C55] hover:bg-transparent hover:border hover:border-[#001C55] font-[300] mb-0 mt-4 font-roboto text-xl  lg:hidden'><button>See My Resume</button></a>
            </div>
            <div className='flex justify-center space-x-4 text-center lg:mt-0 mt-4 lg:hidden'>
            <a href="https://github.com/sabkat-ahmed-rafi" target='_blank'><FaGithub size={40} /></a>
            <a href="https://www.linkedin.com/in/sabkat-ahmed-rafi" target='_blank'><FaLinkedin size={40} color='#0964BF' /></a>
            <a href="https://x.com/SabkatAhmedRafi" target='_blank'><FaSquareXTwitter size={40} color='#000000' /></a>
            <a href="https://www.facebook.com/sabkatahmedrafi" target='_blank'> <FaFacebookSquare size={40} color='#0765FE' /></a>
            <a href="https://www.instagram.com/sabkatahmedrafi" target='_blank'><FaSquareInstagram size={40} color='#E9286A' /></a>
            <a href="mailto:sabkatahmedrafi@gmail.com" target='_blank'><MdEmail  size={40} color='#D44638' /></a>
            </div>
        </>
    );
};

export default Contact;