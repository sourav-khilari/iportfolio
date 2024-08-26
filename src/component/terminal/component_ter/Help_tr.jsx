// import React from 'react'
// import { nanoid } from '@reduxjs/toolkit';
// export default function Help_tr() {
//     let help = [
//         { name: "skill", des: "Showcase of my technical abilities." },
//         { name: "project", des: "A display of my completed work." },
//         { name: "github", des: "Link to my code repositories." },
//         { name: "contact me", des: "Get in touch with me directly." },
//         { name: "about me", des: "Brief introduction about who I am." }
//       ];
      
//   return (
//     <div>
//       {
//         help.map((item)=>(
//             <div key={nanoid()} className='flex gap-3 text-pink-600'>
//                 <div>
//                     {item.name}:
//                 </div>
//                 <div>
//                     {item.des}
//                 </div>
//             </div>
//         ))
//       }
//     </div>
//   )
// }

import React from 'react'
import { nanoid } from '@reduxjs/toolkit';
import { useSelector } from 'react-redux';
export default function Help_tr() {
    let help = useSelector((state) => state.data.help_tr)

    return (
        <div className="p-4 w-[90vw] overflow-x-hidden max-w-full">
            {help.map((item) => (
                <div key={nanoid()} className="flex flex-col sm:flex-row items-start sm:items-center gap-1 sm:gap-3 text-pink-600 mb-4 border-b border-pink-300 pb-2">
                    <div className="font-bold text-lg sm:text-xl">
                        {item.name}:
                    </div>
                    <div className="text-sm sm:text-base text-[#359db3]">
                        {item.des}
                    </div>
                </div>
            ))}
        </div>
    )
}

