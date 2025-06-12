import React from 'react'
import Logo from './assets/Logo01.png';
import Linkedin from './assets/linkedin.svg';
import Web from './assets/website.svg';
import Insta from './assets/insta.svg';

function Footer() {
  return (
    <div className='flex flex-col mt-10 items-center w-full pb-10 gap-5 bg-[#fefff0]'>
      <img src={Logo} className='w-40' />
      <div className='w-full flex items-center justify-around'>
        <a href="#" target="_blank" rel="noopener noreferrer" className="inline-block">
          <img src={Web} className='h-10 cursor-pointer' />
        </a>
        <a href="https://www.instagram.com/litcouncil_iitmandi/" target="_blank" rel="noopener noreferrer" className="inline-block">
          <img src={Insta} className='h-10 cursor-pointer' />
        </a>
        <a href="https://www.linkedin.com/company/uhllekh/posts/?feedView=all" target="_blank" rel="noopener noreferrer" className="inline-block">
          <img src={Linkedin} className='h-10 cursor-pointer' />
        </a>
      </div>
    </div>
  )
}

export default Footer
