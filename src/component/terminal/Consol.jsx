import React, { useEffect } from 'react'
import { useRef } from 'react'
import Header_ter from './component_ter/Header_ter'
import { Outlet } from 'react-router-dom'
import Terminal from './component_ter/terminal'
import '../../App.css'
export default function Console() {


  return (
    
    <> 
    <div className='ter w-[100vw] min-h-[100vh] text-white overflow-x-hidden overflow-y-auto max-w-full' style={{
      background: 'rgb(2,0,36)',
      background: 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(3,3,41,1) 100%, rgba(0,212,255,1) 100%)'
    }} >
      <Header_ter />
      <Terminal />
      </div>

      
    </>
  )
}
