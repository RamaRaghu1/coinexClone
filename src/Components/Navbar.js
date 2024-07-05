import React,{useState} from 'react';
import Logo from "../assets/logo-black.png"
import { BsGrid3X3GapFill } from "react-icons/bs";
import { GoDownload } from "react-icons/go";
import { IoMoonOutline } from "react-icons/io5";
import { IoIosGlobe } from "react-icons/io";

const Navbar = () => {
    const [active, setActive]=useState(false);


    if (typeof window !== "undefined") {
        window.addEventListener("scroll", () => {
          if (window.scrollY > 85) {
            setActive(true);
          } else {
            setActive(false);
          }
        });
      }


  return (
    <div className='relative font-font1 text-sm text-[#505656] font-semibold'>
        <div className={`h-[50px] fixed w-full flex justify-between ${ !active ? "bg-light" :"bg-white shadow-sm"}`}>
    <div className='p-2 px-3 flex gap-7 items-center'> 
        <img src={Logo} className='w-25 h-[35px]'/>
        <BsGrid3X3GapFill size={20}/>
      <ul className='flex gap-6'>
        <li>Flat</li>
        <li>Markets</li>
        <li>Exchange</li>
        <li>Finance</li>
        <li>Futures</li>
        <li>Promotion</li> 
        <li>More</li>
      </ul>
    </div>
    <div className='p-2 px-4 flex gap-7 items-center'>
        <p>Login</p>
        <button className='bg-dark p-1 px-3 text-[12px] rounded-md text-white'>Sign Up</button>
        <div className='flex border-gray-400 border-x-2 gap-4 px-4'>
        <GoDownload size={15}/>
        <IoMoonOutline size={15}/> 
        </div>
        <IoIosGlobe size={15}/>
    </div>
    </div>
    </div>
  )
}

export default Navbar
