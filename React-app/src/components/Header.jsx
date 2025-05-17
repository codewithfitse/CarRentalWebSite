import React from 'react'
import {Link} from "react-router-dom"


const Header = () => {
  return (
    <div className='flex w-full h-auto py-4 px-4 justify-between text-white-500 fixed z-1 container'>
      <h1 className='text-3xl font-bold pl-5'>TRAVEL-X</h1>

      <nav className='flex pr-10 justify-center items-center text-[15px] font-bold space-x-5.5'>
        <Link to='/'><h1 className='hover:text-[#16fe01]'>HOME</h1></Link>
        <Link to='/AboutUs'><h1 className='hover:text-[#16fe01]'>ABOUTUS</h1></Link>
        <Link to='/Services'><h1 className='hover:text-[#16fe01]'>SERVICES</h1></Link>
        <Link to='/Vehicles'><h1 className='hover:text-[#16fe01]'>VEHICLES</h1></Link>
        <Link to='/Contact'><h1 className='hover:text-[#16fe01]'>CONTACT</h1></Link>
      </nav>

      <nav className='flex pr-10 justify-center items-center text-[15px] font-bold space-x-5.5'>
        <Link to='/'><h1 className='hover:text-[#16fe01]'>SIGNUP</h1></Link>
        <Link to='/AboutUs'><h1 className='hover:text-[#16fe01]'>LOGIN</h1></Link>
      </nav>
    </div>
  )
}

export default Header