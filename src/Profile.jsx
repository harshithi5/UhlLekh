import React from 'react'
import Border from './assets/border.svg';
import Shell01 from './assets/profileshell.svg';
import Curve from './assets/borderpart.svg';
import { FaAward } from "react-icons/fa";
import Eyes from './Eyes';

function Profile() {
  return (
    <div className="relative w-72 h-72 bg-white mx-auto my-10 flex items-center justify-center scale-100 md:scale-150 sm:scale-120 sm:mt-20">
      <img
        src={Border}
        className="absolute top-0 left-0 w-full h-full pointer-events-none"
      />
      <img
        src={Shell01}
        className="absolute bottom-0 right-0 pointer-events-none"
      />
      <img
        src={Curve}
        className="absolute top-[-1rem] right-5 pointer-events-none"
      />
      <div className='absolute top-0'>
        <Eyes/></div>

      <div className='h-10 w-10 bg-[#ffdc58] absolute left-0 top-15 flex items-center justify-center rounded-full border-2 shadow-[2px_2px_0px_black]'>
        <FaAward className='h-15 text-zinc-950'/>
      </div>

      <div className='h-55 w-55 bg-zinc-400 border-3 bg-[url("assets/book.jpg")] bg-center bg-contain bg-no-repeat'></div>
    </div>
  )
}

export default Profile
