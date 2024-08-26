import React from 'react'
import { useState } from 'react'

export default function Terminal_sty({ value = "", readonly = false, setvalue = () => {},setInput=()=>{} }) {
    const [value_com, setvalue_com] = useState(value)
    const handleKeyDown=(e)=>{

        if(e.key==="Enter")
        {
            setvalue(value_com)
            let val=value_com.trim()
            // if(val=="github")
            // {
            //     setInput((data)=>[...data,{pro:val,ren:false}])
            // }
            // else
            if(val=="clear")
            {
                setInput([])
            }
            else
            setInput((data)=>[...data,val])
            setvalue((data)=>data="")
            setvalue_com((data)=>data="")
        }
    }
    return (
        <div className='flex text-white items-center w-[90vw] max-w-full overflow-x-hidden overflow-y-auto'>
            <span className='text-green-400 text-base md:text-lg animate-pulse'>
                Sourav@portfolio:~$
            </span>
            <div className='w-full md:w-[60%] ml-2 md:ml-6'>
                <input 
                    type="text" 
                    className='bg-transparent outline-none w-full text-sm md:text-lg transition-all duration-300 ease-in-out transform focus:scale-105 focus:text-pink-500' 
                    onChange={(e) => setvalue_com(e.target.value)} 
                    value={value_com} 
                    readOnly={readonly} 
                    onKeyDown={handleKeyDown}
                />
            </div>
        </div>
    )
}
