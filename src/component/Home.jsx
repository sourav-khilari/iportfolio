import React, { useEffect, useState } from 'react';
import own_ph from "../assets/my_photo/SOURAV PHOTO.jpg";
import { useNavigate } from "react-router-dom";
import Linkedin from './contacts_link/Linkedin';
import Github from './contacts_link/Github';
import Twitter from './contacts_link/Twitter';

export default function Home() {
    const [isVisible, setIsVisible] = useState(false);
    const navigate = useNavigate();
    useEffect(() => {
        const timer = setTimeout(() => setIsVisible(true), 100); // Delay for fade-in effect
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className={`flex flex-col md:flex-row transition-opacity duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className='h-[50vh] md:h-[90vh] w-full md:w-[50vw] flex justify-center items-center'>
                <div className={`flex flex-col gap-4 transition-opacity duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    <div className="text-3xl font-bold">
                        <h3>Hello, <span className="text-blue-500">I am</span></h3>
                    </div>
                    <h1 className="text-5xl font-extrabold text-blue-500">Sourav Khilari</h1>
                    <h2 className="text-3xl font-semibold text-gray-300">Web Developer</h2>
                    <div className="flex gap-4 mt-4">
                        {/* LinkedIn Icon */}
                        
                        <Linkedin/>
                        {/* Twitter Icon */}
                        <Twitter></Twitter>

                        {/* GitHub Icon */}
                        <Github></Github>
                    </div>
                </div>
            </div>
            <div className={`h-[50vh] md:h-[90vh] w-full md:w-[50vw] flex justify-center items-center overflow-hidden transition-opacity duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <div className='relative w-[80%] h-[80%] md:w-[70%] md:h-[70%] rounded-full bg-gradient-to-r from-blue-400 to-purple-600 p-2 animate-pulse'>
                    <div className='w-full h-full rounded-full bg-white flex justify-center items-center shadow-lg'>
                        <img src={own_ph} alt="Sourav Khilari" className="rounded-full w-[95%] h-[95%] object-cover border-4 border-blue-500 transition-transform duration-500 transform hover:scale-105" />
                    </div>
                    {/* Decorative circles */}
                    <div className='absolute top-0 left-0 w-4 h-4 md:w-8 md:h-8 rounded-full bg-blue-300 opacity-70 animate-ping'></div>
                    <div className='absolute bottom-0 right-0 w-4 h-4 md:w-8 md:h-8 rounded-full bg-purple-300 opacity-70 animate-ping'></div>
                </div>
            </div>
        </div>
    );
}

