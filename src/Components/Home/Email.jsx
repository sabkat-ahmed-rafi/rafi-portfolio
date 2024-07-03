import React from 'react';
import EmailPhoto from '../../../public/Email.json';
import Lottie from 'lottie-react';


const Email = () => {
    return (
        <>
          <div className="grid max-w-screen-xl grid-cols-1 gap-8 px-8 py-16 mx-auto rounded-lg md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 border border-b-0">
	<div className="flex flex-col justify-between">
		<div className="space-y-2 lg:pl-14">
			<h2 className="text-4xl font-bold leading-tight lg:text-5xl text-[#001C55] ">Let's talk!</h2>
			<div className="dark:text-gray-600">Connect with me through message.</div>
		</div>
        <Lottie className='lg:w-[400px] ' animationData={EmailPhoto} loop={true} />
	</div>
	<form noValidate="" className="space-y-6">
		<div>
			<label htmlFor="name" className="text-sm font-semibold">Full name</label>
			<input id="name" type="text" placeholder="" className="w-full p-3 rounded dark:bg-gray-100 border border-slate-300" />
		</div>
		<div>
			<label htmlFor="email" className="text-sm font-semibold">Email</label>
			<input id="email" type="email" className="w-full p-3 rounded dark:bg-gray-100 border border-slate-300" />
		</div>
		<div>
			<label htmlFor="message" className="text-sm font-semibold">Message</label>
			<textarea id="message" rows="3" className="w-full p-3 rounded dark:bg-gray-100 border border-slate-300"></textarea>
		</div>
		<button type="submit" className="w-full p-3 text-sm font-bold tracking-wide uppercase rounded bg-[#001C55] dark:text-gray-50 border border-slate-300">Send Message</button>
	</form>
</div>  
        </>
    );
};

export default Email;