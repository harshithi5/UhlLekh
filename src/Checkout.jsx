import React from 'react'
import Eventbutton from './Eventbutton'
import Shell01 from './assets/profileshell.svg';
import { div } from 'framer-motion/client';

function Checkout() {
  return (
    <div className='bg-[#fefff0] w-full pt-20 pb-20'>
      <div className='bg-[#fefff0] w-75 md:w-110 lg:w-140 p-5 mx-auto border-3 relative flex flex-col gap-4 text-center items-center justify-center shadow-[8px_8px_0px_#bebfb4]'>
        <div className='font-semibold text-2xl mt-10 lg:text-3xl md:text-2xl'>Let's dive into the world of words</div>
        <div>Want to see how well your emotions flow out, what are you waiting for, participate now in the ongoing events.</div>
        <div><Eventbutton /></div>
        <img src={Shell01} className='-top-8 left-1/3 absolute ' />
      </div>
    </div>
  )
}

export default Checkout
