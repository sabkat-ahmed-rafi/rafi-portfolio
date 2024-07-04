import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';
import AOS from 'aos';
import 'aos/dist/aos.css';



const Email = () => {

  AOS.init();

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs
        .sendForm('service_ytl3hrc', 'template_jkwmb0z', form.current, {
          publicKey: 'kyzVsV5LEHpltpnis',
        })
        .then(
          () => {
            console.log('SUCCESS!');
            setName('')
            setEmail('')
            setMessage('')
            Swal.fire("Message sent successfully!");
          },
          (error) => {
            console.log('FAILED...', error.text);
          },
        );
    };
  

    return (
        <>
          <div data-aos="zoom-in-up" className="grid max-w-screen-xl grid-cols-1 gap-8 px-8 py-16 mx-auto rounded-lg md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 shadow-lg shadow-sky-300 mb-10">
	<div className="flex flex-col justify-between">
		<div className="space-y-2 lg:pl-14">
			<h2 className="text-4xl font-bold leading-tight lg:text-5xl text-[#001C55] ">Let's talk!</h2>
			<div className="dark:text-gray-600">Connect with me through message.</div>
		</div>
        {/* <Lottie className='lg:w-[400px] ' animationData={EmailPhoto} loop={true} /> */}
        <img src="contact.png" className='lg:w-[400px]' alt="" />
	</div>
	<form ref={form} onSubmit={sendEmail} className="space-y-6">
		<div>
			<label htmlFor="name" className="text-sm font-semibold">Full name</label>
			<input onChange={(e) => setName(e.target.value)} id="name" type="text" name='user_name' placeholder="" value={name} className="w-full p-3 rounded dark:bg-gray-100 border border-slate-300" />
		</div>
		<div>
			<label htmlFor="email" className="text-sm font-semibold">Email</label>
			<input onChange={(e) => setEmail(e.target.value)} value={email} id="email" type="email" name='user_email' className="w-full p-3 rounded dark:bg-gray-100 border border-slate-300" />
		</div>
		<div>
			<label htmlFor="message" className="text-sm font-semibold">Message</label>
			<textarea onChange={(e) => setMessage(e.target.value)} value={message} id="message" name='message' rows="3" className="w-full p-3 rounded dark:bg-gray-100 border border-slate-300"></textarea>
		</div>
		<button type="submit" className="w-full p-3 text-sm font-bold tracking-wide uppercase rounded bg-[#001C55] dark:text-gray-50 border border-slate-300">Send Message</button>
	</form>
</div>  
        </>
    );
};

export default Email;