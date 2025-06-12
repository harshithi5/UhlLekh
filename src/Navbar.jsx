import React, { useState } from 'react'
import cutShell from './assets/cutshell.svg';
import { ImPencil2 } from "react-icons/im";


function navbar() {
    const [name, setname] = useState("UhlLekhite") 
    return (
        <div className='bg-[#fefff0] h-20 w-screen relative flex justify-center items-center'>
            <img
                src={cutShell}
                className="absolute top-0 right-0 h-[15vw]"
            />
            <div className='h-1/2 w-7/10 bg-white border-2 flex items-center relative shadow-[4px_4px_0px_#bebfb4]'>
                <ImPencil2 className='ml-3'/>
                <div className='m-auto'>Hello dear {name}</div>
                <div className=' z-50 absolute  bg-[#5eccfb] h-2 w-2 top-[-5px] left-[-5px] border-2'></div>
                <div className=' z-50 absolute  bg-[#5eccfb] h-2 w-2 top-[-5px] right-[-5px] border-2'></div>
                <div className=' z-50 absolute  bg-[#5eccfb] h-2 w-2 bottom-[-5px] left-[-5px] border-2'></div>
                <div className=' z-50 absolute  bg-[#5eccfb] h-2 w-2 bottom-[-5px] right-[-5px] border-2'></div>
            </div>
        </div>
    )
}

export default navbar



