import React from 'react'

import Projects_ter from './Projects_ter'
import Contact_ter from './Contact_ter'
import About_ter from './About_ter'
import Help_tr from './Help_tr'
import { useSelector } from 'react-redux'
import { useState, useEffect } from 'react'
import Skill_ter from './Skill_ter'

export default function Terminal_body({ value ,index,size}) {

  const trimmedValue = value.trim().toLowerCase();

  const renderContent = () => {
    switch (trimmedValue) {
      case "help":
        return <Help_tr />;
        break;
      case "project":
        return <Projects_ter />;
        break;
      case "contact me":
        return <Contact_ter />;
        break;
      case "about me":
        return <About_ter />;
        break;
      case "skill":
        return <Skill_ter />;
        break;
      case "github":
        if(index===size-1)
         window.open("https://github.com/sourav-khilari/hackspire-crime_control", "_blank")

        
        return null; // Prevent further rendering
        break;
      default:
        return <div className='pl-1'><div className="text-red-500">Command not found. Please try again.</div><Help_tr /></div>; // Fallback for unexpected values
    }
  };




  const help_op = useSelector((state) => state.data.help_tr)
  
  value = value.trim()


  return (

    <div className='w-[90vw] max-w-full overflow-x-hidden overflow-y-auto'>
      {renderContent()}
    </div>

  )
}
