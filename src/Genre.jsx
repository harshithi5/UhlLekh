import React from 'react'
import Smile from './assets/smile.svg';
import Shell02 from './assets/cutshell02.svg';
import Grid from './Grid';

function Genre() {
    return (
        <div>
            <div className='mt-20 ml-5 w-max relative font-semibold text-lg lg:text-5xl md:text-3xl sm:text-2xl md:pl-15 md:pr-15 md:pt-10 bg-[#fefff0] tracking-wide'>
                <div>Genres We Explore</div>
                <div>Driving Enthusiasm With Results</div>
                <img src={Smile} className='absolute top-0 right-2 h-8 md:h-15' />
                <img src={Shell02} className='absolute -top-12 -left-5 h-18 md:h-30'/>
            </div>
            <Grid /> 
        </div>
    )
} 

export default Genre
