// import React from 'react';
// import { useNavigate } from "react-router-dom";

// const Header_svg = () => {
//     const navigate = useNavigate();
//     return (
//         <header className="bg-black p-3 text-white flex items-center justify-between w-[95vw] overflow-x-hidden">
//             <div className="flex items-center space-x-4">
//                 <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     xmlnsXlink="http://www.w3.org/1999/xlink"
//                     width="15vw"
//                     height="12vh"
//                     viewBox="0 0 500 150"
//                     className="transform transition-transform duration-500 ease-in-out hover:scale-105"
//                 >
//                     <defs>
//                         <linearGradient id="text-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
//                             <stop offset="0%" style={{ stopColor: "#ff7e5f", stopOpacity: 1 }} />
//                             <stop offset="100%" style={{ stopColor: "#feb47b", stopOpacity: 1 }} />
//                         </linearGradient>
//                         <filter id="neon">
//                             <feGaussianBlur stdDeviation="3" result="blur" />
//                             <feFlood floodColor="rgba(255, 126, 95, 0.7)" result="color" />
//                             <feComposite in2="blur" operator="in" />
//                             <feMerge>
//                                 <feMergeNode />
//                                 <feMergeNode in="SourceGraphic" />
//                             </feMerge>
//                         </filter>
//                     </defs>
//                     <rect x="10" y="10" width="480" height="130" fill="none" stroke="url(#text-gradient)" strokeWidth="5" rx="20" />
//                     <text
//                         x="50%"
//                         y="40%"
//                         textAnchor="middle"
//                         fill="url(#text-gradient)"
//                         fontSize="28"
//                         fontWeight="bold"
//                         fontFamily="Verdana, Geneva, sans-serif"
//                         filter="url(#neon)"
//                     >
//                         <tspan x="50%" dy="0">Welcome to</tspan>
//                         <tspan x="50%" dy="35">Sourav Khilari</tspan>
//                         <tspan x="50%" dy="35">Portfolio</tspan>
//                     </text>
//                 </svg>
//             </div>
//             <div>
//                 <button onClick={() => navigate("/")} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300">
//                     Exit
//                 </button>
//             </div>
//         </header>
//     )
// };

// export default Header_svg;

import React from 'react';
import { useNavigate } from "react-router-dom";

const Header_svg = () => {
    const navigate = useNavigate();
    return (
        <header className="bg-black p-3 text-white flex items-center justify-between w-[95vw] overflow-x-hidden">
            <div className="flex items-center space-x-4">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    width="20vw" // Increased width for better visibility on mobile
                    height="10vh" // Adjusted height for a balanced look
                    viewBox="0 0 500 150"
                    className="transform transition-transform duration-500 ease-in-out hover:scale-105"
                >
                    <defs>
                        <linearGradient id="text-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" style={{ stopColor: "#ff7e5f", stopOpacity: 1 }} />
                            <stop offset="100%" style={{ stopColor: "#feb47b", stopOpacity: 1 }} />
                        </linearGradient>
                        <filter id="neon">
                            <feGaussianBlur stdDeviation="3" result="blur" />
                            <feFlood floodColor="rgba(255, 126, 95, 0.7)" result="color" />
                            <feComposite in2="blur" operator="in" />
                            <feMerge>
                                <feMergeNode />
                                <feMergeNode in="SourceGraphic" />
                            </feMerge>
                        </filter>
                    </defs>
                    <rect x="10" y="10" width="480" height="130" fill="none" stroke="url(#text-gradient)" strokeWidth="5" rx="20" />
                    <text
                        x="50%"
                        y="40%"
                        textAnchor="middle"
                        fill="url(#text-gradient)"
                        fontSize="24" // Adjusted font size for clarity on mobile
                        fontWeight="bold"
                        fontFamily="Verdana, Geneva, sans-serif"
                        filter="url(#neon)"
                    >
                        <tspan x="50%" dy="0">Welcome to</tspan>
                        <tspan x="50%" dy="35">Sourav Khilari</tspan>
                        <tspan x="50%" dy="35">Portfolio</tspan>
                    </text>
                </svg>
            </div>
            <div>
                <button onClick={() => navigate("/")} className="bg-blue-500 text-white px-3 py-2 rounded hover:bg-blue-700 transition duration-300 text-sm md:text-base">
                    Exit
                </button>
            </div>
        </header>
    )
};

export default Header_svg;
