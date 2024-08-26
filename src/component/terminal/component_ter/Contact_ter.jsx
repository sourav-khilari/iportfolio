import React from 'react'
import Linkedin from '../../contacts_link/Linkedin';
import Github from '../../contacts_link/Github';
import Twitter from '../../contacts_link/Twitter';
export default function Contact_ter() {
    return (
        <div className='p-6 w-[90vw] overflow-x-hidden'>
            <div className="text-white text-xl font-semibold mb-4 transition-colors duration-300 hover:text-yellow-400 w-fit">
                Email: <a href="mailto:Souravkhilari123456@gmail.com" className="underline">Souravkhilari123456@gmail.com</a>
            </div>
            <div className="flex gap-6 mt-4">
                {/* LinkedIn Icon */}
                <Linkedin></Linkedin>

                {/* Twitter Icon */}
                <Twitter></Twitter>

                {/* GitHub Icon */}
                <Github></Github>
            </div>
        </div>
    )
}
