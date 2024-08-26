// import React from 'react'
// import { useState } from 'react';
// import Terminal_sty from './terminal_sty'
// import Help from './Help'
// import Terminal_body from './Terminal_body';
// import { nanoid } from '@reduxjs/toolkit';

// export default function Terminal() {
//     const [Input, setInput] = useState([])
//     const [value, setvalue] = useState("")

//     return (
//         <div className='w-full '>
//             <Help />
//             {
//                 Input.map((value) => (
//                     <div key={nanoid()}>
//                         <Terminal_sty value={value} readonly={true} />
//                         <Terminal_body value={value} />
//                     </div>))

//             }
//             <Terminal_sty value={value} setvalue={setvalue} setInput={setInput}/>
//         </div>
//     )
// }

import React from 'react'
import { useState,useRef,useEffect} from 'react';
import Terminal_sty from './Terminal_sty'
import Help from './Help'
import Terminal_body from './Terminal_body';
import { nanoid } from '@reduxjs/toolkit';

export default function Terminal() {
    const [Input, setInput] = useState([])
    const [value, setvalue] = useState("")
    const consoleRef = useRef(null);
    const bottomRef = useRef(null);
    let size=Input.length

    const terminalEndRef = useRef(null);

    useEffect(() => {
      terminalEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [Input]); 

    return (
        <>
            <div className='w-[95vw] p-3 text-white rounded-lg shadow-lg overflow-x-hidden overflow-y-auto '>
                <Help />
                <div className='space-y-4'>
                    {
                        Input.map((inputValue,index) => (
                            <div key={nanoid()} className='transition-all duration-100 ease-in-out transform '>
                                <Terminal_sty value={inputValue} readonly={true} />
                                <Terminal_body value={inputValue} index={index} size={size} />
   
                            </div>
                        ))
                    }
                </div>
                <Terminal_sty
                    value={value}
                    setvalue={setvalue}
                    setInput={setInput}
                    className='mt-4 transition-all duration-300 ease-in-out transform hover:scale-105'
                />
            </div>
            <div ref={terminalEndRef} />
        </>
    )
}
