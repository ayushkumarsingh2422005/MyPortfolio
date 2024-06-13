import React, { useState } from 'react'
import logo from "../assets/logo.jpg"
import { FaBars, FaCross, FaXmark } from 'react-icons/fa6';
import { FaCut } from 'react-icons/fa';

export default function Nev() {
  const [toggelNev, setToggelNev] = useState(false);
  return (
    <div className='flex justify-center bg-[#00061b]'>
      <div className='flex p-4  justify-between container lg:w-3/4'>
        <div className='flex items-center gap-3 font-bold text-gray-200'>
          <img src={logo} alt="profile logo" className='w-10 rounded-full' />
          Ayush | Full Stack devloper
        </div>
        <div className='text-gray-400 items-center flex'>
          <ul className='md:flex hidden gap-10 font-bold'>
            <li><a href="#" className='hover:text-gray-100'>Home</a></li>
            <li><a href="#" className='hover:text-gray-100'>Work</a></li>
            <li><a href="#" className='hover:text-gray-100'>Contact</a></li>
          </ul>
          <div className='items-center md:hidden flex text-2xl cursor-pointer text-white' onClick={()=>setToggelNev(!toggelNev)}>
            {!toggelNev ? <FaBars /> : <FaXmark/>}
          </div>
          <ul className={`md:hidden flex gap-2 fixed top-16 ${toggelNev ? "right-5" : "left-full"} flex-col bg-gradient-to-b to-black from-slate-700 p-5 font-bold rounded-md text-gray-300`}>
            <li><a href="#" className='hover:text-gray-50'>Home</a></li>
            <li><a href="#" className='hover:text-gray-50'>Work</a></li>
            <li><a href="#" className='hover:text-gray-50'>Contact</a></li>
          </ul>
        </div>
      </div>
    </div>
  )
}
