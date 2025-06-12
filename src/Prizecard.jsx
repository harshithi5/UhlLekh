import React from 'react'
import Trophy from './assets/trophyy.svg';

function Prizecard(props) {
    return (
        <div className='bg-[#fefff0] flex gap-2 w-70 sm:w-70 md:w-90 mx-auto mt-5 p-3 border-2 rounded-md items-start shadow-[4px_4px_0px_#9b9494]' style={{ transform: `rotate(${props.rotate}deg)` }}>
            <div className='rounded-full h-12 w-12 bg-zinc-400 border-2 shrink-0 overflow-hidden flex items-center justify-center'>
                <img src={Trophy} className='h-full w-full object-cover' />
            </div>
            <div className='flex flex-col justify-center'>
                <div className='font-semibold break-words'>{props.head}</div>
                <div className='text-sm text-[#565656]'>~ {props.name}</div>
            </div>
        </div>

    )
}

export default Prizecard
