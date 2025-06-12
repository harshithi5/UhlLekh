import React from 'react'
import Navbar from './Navbar'
import Welcome from './Welcome'
import Profile from './Profile'
import Eyes from './Eyes'
import Genre from './Genre'
import Cordis from './Cordis'
import Achievements from './Achievements'
import Checkout from './Checkout'
import Sher from './Sher'
import Footer from './Footer'
import LocomotiveScroll from 'locomotive-scroll';
import Wordle from './Wordle'

function App() {

const locomotiveScroll = new LocomotiveScroll();
  return (
    <div className='bg-[#fefff0]'>
      <Navbar />
      <div className="flex flex-col md:flex-row items-center">
        <div className='w-full md:w-4/8'><Welcome /></div>
        <div className='w-full md:w-5/8'><Profile /></div>
      </div>
      <Genre />
      <div className='z-10 relative'><Cordis /></div>
      <div className='z-0 relative'><Achievements /> </div>
      <div className='z-10 relative bg-[#fefff0] p-10 flex flex-col items-center pt-25 gap-3'>
        <div className='text-3xl md:text-5xl lg:text-6xl font-bold text-center w-max bg-[#5eccfb] shadow-[4px_4px_0px_#bebfb4] p-3 md:p-4 lg:p-5 border-gray-400 border-2 rounded-2xl'>Play Wordle</div>
        <Wordle />
      </div>
      <div className='z-10 relative'><Checkout /></div>
      <div className='w-full h-1 border-3 z-10 relative'></div>
      <div className='z-10 relative'><Sher /></div>
      <Footer />
    </div>
  )
}

export default App

