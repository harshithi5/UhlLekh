import React, { useEffect } from 'react';
import { FaCircleArrowUp } from "react-icons/fa6";
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

function Textcard(props) {
  const controls10 = useAnimation();
  const imgControls = useAnimation();

  const [ref10, inView10] = useInView({ triggerOnce: true });

  useEffect(() => {
    if (inView10) {
      controls10.start({
        x: 0,
        opacity: 1,
        transition: { delay: 0.2, duration: 0.6, ease: 'easeOut' }
      });
    }
  }, [inView10, controls10]);

  const runAnimationOnce = async () => {
    await imgControls.start({ y: -15, transition: { duration: 0.3, ease: "easeOut" } });
    await imgControls.start({ rotate: 430, transition: { duration: 0.3, ease: "linear" } });
    await imgControls.start({ rotate: 0, transition: { duration: 0.3, ease: "linear" } });
    await imgControls.start({ y: 0, transition: { duration: 0.2, ease: "easeIn" } });
  };

  return (
    <div className='w-72 p-3 border-l-3 border-r-3 border-b-3 border-t-3 pt-8 pb-10 md:w-58 lg:w-85 md:border-r-0 md:border-b-0'>
      <motion.img
        src={props.src}
        className='h-15'
        animate={imgControls}
      />
      <motion.div
        className='font-medium text-4xl mt-2'
        ref={ref10}
        initial={{ x: 50, opacity: 0 }}
        animate={controls10}
      >
        {props.head}
      </motion.div>
      <div className='text-lg font-medium mt-2'>{props.content}</div>
      <hr className="border-t-1 border-zinc-500 mt-4 w-4/5" />

      {/* Hover target — triggers animation ONCE */}

      <a href={props.link} target="_blank" rel="noopener noreferrer" className="inline-block">
        <div
          className='mt-5 font-medium text-2xl cursor-pointer w-max flex items-center gap-3'
          onMouseEnter={runAnimationOnce}
        >
          <div className='text-shadow-lg'>Read Some</div>
          <div className="rotate-[45deg]"><FaCircleArrowUp /></div>
        </div>
      </a>
    </div>
  );
}

export default Textcard;
