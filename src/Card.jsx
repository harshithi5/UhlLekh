import React, { useEffect } from 'react'
import Border from './assets/border.svg';
import Arrow from './assets/arrow.svg';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

function Card(props) {

    const controls10 = useAnimation();

    const [ref10, inView10] = useInView({ triggerOnce: true });

    useEffect(() => {
        if (inView10) {
            controls10.start({ y: 0, opacity: 1, transition: { delay: 0.3, duration: 0.6, ease: 'easeOut' } });
        }
    }, [inView10, controls10]);

    return (
        <div className="relative w-72 h-72 bg-white my-10 flex items-center justify-center flex-col lg:h-90 lg:w-90 ">
            <img
                src={Border}
                className="absolute top-0 left-0 w-full h-full pointer-events-none"
            />

            <div className='h-30 w-30 rounded-full bg-amber-300 border-3 border-amber-300 relative shadow-[8px_6px_0px_#bebfb4]'>
                <motion.img src={props.src} className='h-40 absolute bottom-0' ref={ref10}
                    initial={{ y: -30, opacity: 0 }}
                    animate={controls10} />
            </div>
            <div className='flex w-55 pt-4 gap-3'>
                <div>
                    <div className='w-max font-semibold'>{props.name}</div>
                    <div className='text-xs'>{props.genre}</div>
                </div>
                <a href="https://www.linkedin.com/in/harshithi5/" target="_blank" rel="noopener noreferrer">
                <div><img src={Arrow} className='h-10 cursor-pointer' /></div>
                </a>
            </div>
        </div>
    )
}

export default Card
