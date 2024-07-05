import React from 'react'
import HeroImg from "../assets/hero.png"; 

const Hero = () => {
  return (
    <div className='h-[400px] bg-gradient-to-b from-light to-white flex pt-[50px] font-font1'>
   <div className='mx-auto w-[80vw] flex items-center '>
   <div className='w-[70%]'>
      <h1 className='text-4xl font-bold  text-black'>The Global Cryptocurrency Exchange</h1>
      <p className='text-xl py-2 text-grey font-semibold'>Making Crypto Trading Easier</p>

      <div className='gap-4 flex pt-6'>
        <input placeholder='Email Account' className='w-64 rounded-[30px] p-5 h-10 hover:border border-dark'/>
         <button className='rounded-[30px] px-5 h-10 bg-dark text-center m-0 text-white'>Register Now</button>
      </div>
    </div>
    <div>
      <img src={HeroImg} className='w-[300px] h-[300px]'/>
    </div>
   </div>
    </div>
  )
}

export default Hero
