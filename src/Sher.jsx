import React from 'react'
import Open from './assets/openingcomma.svg';
import Close from './assets/closingcomma.svg';

function Sher() {
    return (
        <div className='bg-[#fefff0] p-5 flex items-center justify-center w-full text-md md:text-xl'>
            
            <div className='relative p-5 w-max'>
                <img src={Open} className='absolute top-0 left-0 h-4' />
            हज़ारों ख़्वाहिशें ऐसी कि 
            <br />
            हर ख़्वाहिश पे दम निकले,
            <br />
            बहुत निकले मेरे अरमाँ, 
            <br />
            लेकिन फिर भी कम निकले।
            <img src={Close} className='absolute bottom-0 right-0 h-4' />
            </div>
        </div>
    )
}

export default Sher
