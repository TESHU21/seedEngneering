import React from 'react'
// import AzubiLogo1 from "../assets/svg/Azubi-Logo1.svg"
import { Copyright,ArrowUp } from 'lucide-react'
import { Link, NavLink } from 'react-router-dom'
import SeedLogo from "../../assets/SeedLogo.png" 
const Footer = () => {
  return (
    <div className=' bg-[#2c2d83] px-[30px] md:px-[200px] ' >
      <div className="grid grid-cols-1 md:grid-cols-2  md:h-[281px] ">
        <div className='pt-[46px]  '>
        <div className=' flex items-center gap-3 '><img src={SeedLogo} alt="Log of Letter CJ" className='w-[105.71px] h-[98.01px]'/> <span className=' font-bold text-[38.3px] leading-[100%] text-red-500 '>SeedEngineering</span></div>

        </div>
  

  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4  md:gap-[40px] text-white md:mt-[56px]">
    {/* Column 1 (auto width) */}
  <div>
  <ul className="flex flex-col gap-[14px]">
    <li className="font-semibold text-[20px] leading-8">Menu</li>
    <li className="font-base font-inter font-normal">
      <Link to="/">Home</Link>
    </li>
    <li>
      <Link to="/about">About</Link>
    </li>
    <li>
      <Link to="/services">Services</Link>
    </li>
    <li>
      <Link to="/contact">Contact</Link>
    </li>
  </ul>
</div>


    {/* Column 2 (auto width) */}
    <div  className='sm:col-span-2 md:col-span-2'>
      <ul className=' flex flex-col gap-[14px]'>
        <li className="font-semibold text-[20px] leading-8" >Contact</li>
        <li>+251921670994</li>
        <li>Addis Ababa,Ethiopia</li>
      </ul>
    </div>

    {/* Column 3 (takes remaining space) */}
    <div>
      <ul className='  flex flex-col gap-[14px]' >
        <li className="font-semibold text-[20px] leading-8">Social</li>
       <li>
  <a href="https://www.linkedin.com/in/teshome-mosneh-21240519a/" target="_blank" rel="noopener noreferrer">
    LinkedIn
  </a>
</li>
<li>Facebook</li>

      </ul>
    </div>
  </div>
  {/* Footer Botom part */}
  <div className="col-span-full my-4">
  <div className="h-[1px] w-full bg-white" />
 </div>
  

       </div>
      <div className=' flex justify-center md:justify-between text-white'>
        <div className=' flex items-center justify-center gap-2'>
          <Copyright/> <span className='text-[20px] leading-8 font-inter text-center'>copyright 2025 - SeedEngineering, All rights reserved</span>
        </div>
        <div className='hidden md:flex gap-2'>
          Back to top <span><ArrowUp className=' border border-white w-[24px] h-[24px]'/></span>
        </div>
      </div>
      

    </div>


  )
}

export default Footer