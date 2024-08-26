import { useState } from 'react'
import './App.css'
import { Outlet } from 'react-router-dom'
import Header from './component/Header'
import Footer from './component/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='back w-[99vw] '>

      <Header/>
      <Outlet/>
      <Footer/>
    </div>
    </>
  )
}

export default App
