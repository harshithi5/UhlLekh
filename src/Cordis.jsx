import React from 'react'
import Sun02 from './assets/sun02.svg';
import Underline from './assets/underline.svg';
import Card from './Card';
import Avatar01 from './assets/avatar01.svg';
import Avatar02 from './assets/avatar02.svg';
import Avatar03 from './assets/avatar03.svg';
import Avatar04 from './assets/avatar04.svg';
import { easeInOut, motion } from 'framer-motion';

function Cordis() {
  return (
    <div className='flex flex-col justify-center items-center w-full bg-[#fefff0]'>
      <div className='w-fit mt-20 ml-5  relative flex items-center'>
        <div className='text-3xl font-semibold md:text-5xl lg:text-7xl'>Meet The Cordis</div>
        <div><motion.img
          src={Sun02}
          className="h-20 md:h-30"
          initial={{ width: 0 }}
          whileInView={{ width: "100%" }}
          transition={{ ease: "easeInOut", duration: 1 }}
        />
        </div>
        <img src={Underline} className='absolute bottom-2 left-1/4 h-2 md:h-3 lg:h-4 lg:-bottom-5' />
      </div>
      <div >
        <div className='flex items-center justify-center flex-col md:flex-row md:gap-6'>
          <div><Card src={Avatar01} name="Harshit Kumar Singh" genre="Slam Poetry - Story Writing - Drama Writing" /></div>
          <div><Card src={Avatar02} name="Paresh Chourasiya" genre="Story Telling - Story Writing - Word Games" /></div>
        </div>
        <div className='flex items-center justify-center flex-col md:flex-row md:gap-6'>
          <div><Card src={Avatar03} name="Hema Khan" genre="Slam Poetry - Story Writing - Mushaira" /></div>
          <div><Card src={Avatar04} name="Aryan Prakash" genre="Slam Poetry - Story Reading - Content Creator" /></div>
        </div>
      </div>
    </div>
  )
}

export default Cordis
