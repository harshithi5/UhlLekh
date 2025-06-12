import React from 'react'
import Bloom from './assets/bloom.svg';
import { motion } from 'framer-motion';

function Eventbutton() {
    return (
        <a href="https://linktr.ee/litsoc.iitmandi?fbclid=PAZXh0bgNhZW0CMTEAAaddp-LmTkP6Uyhb9MoBoyZdCtZOYpzYWmUvInsSsUK-D4VgDYL4ZgQ2_YIxfQ_aem_beN5P_SGpzrZOiX5jofxvw" target="_blank" rel="noopener noreferrer" className="inline-block">
            <motion.div
                className='p-3 bg-[#5eccfb] mt-5 font-semibold w-fit rounded-4xl border-4 relative cursor-pointer'
                animate={{ scale: [1, 1.2, 1.2, 1, 1] }}
                transition={{
                    duration: 2, // total duration = 2s
                    times: [0, 0.01, 0.5, 0.51, 1], // instant jumps + holding positions
                    repeat: Infinity,
                    ease: "linear" // no easing for sharp jumps
                }}
            >Check Events
                <img src={Bloom} className='absolute bottom-[-30px] right-[-30px]' />
            </motion.div>
        </a>
    )
}

export default Eventbutton
