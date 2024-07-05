import React from 'react'
import Navbar from '../Components/Navbar'
import Hero from '../Components/Hero'
import Marqueee from '../Components/Marquee'
import SliderComp from '../Components/Slider'
import Table from '../Components/Table'
import Footer from '../Components/Footer'
import Section from '../Components/Section'

const HomePage = () => {
  return (
    <div className='overflow-x-clip'>
      <Navbar/>
<Hero/>

<Marqueee/>
     <SliderComp/>
     <Table/>
     <Section/>
     <Footer/>
    </div>
  )
}

export default HomePage
