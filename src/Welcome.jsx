import React, { useEffect } from 'react';
import Sun from './assets/sun.svg';
import Logo from './assets/Logo01.png';
import Eventbutton from './Eventbutton';
import { motion, useAnimation } from 'framer-motion';

// Text to animate
const text = "Welcome To";

// Animation variants for each letter
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.06,
    },
  },
};

const letterVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 30,
    },
  },
};

function Welcome() {
  const controls = useAnimation();

  useEffect(() => {
    const loopRotation = async () => {
      while (true) {
        await new Promise(res => setTimeout(res, 5000));
        await controls.start({ y: -15, transition: { duration: 0.3, ease: "easeOut" } });
        await controls.start({ rotate: 430, transition: { duration: 0.4, ease: "linear" } });
        await controls.start({ rotate: 0, transition: { duration: 0.4, ease: "linear" } });
        await controls.start({ y: 0, transition: { duration: 0.2, ease: "easeIn" } });
      }
    };
    loopRotation();
  }, [controls]);

  return (
    <div className='p-5 flex flex-col gap-3'>
      <div className='flex items-center ml-3'>
        <motion.img
          src={Sun}
          className='h-30 sm:h-50'
          animate={controls}
        />
      </div>

      <motion.div
        className='text-3xl font-bold ml-4 sm:text-6xl flex'
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {text.split("").map((char, i) => (
          <motion.span key={i} variants={letterVariants}>
            {char === " " ? "\u00A0" : char}
          </motion.span>
        ))}
      </motion.div>

      <div>
        <img src={Logo} className='w-full sm:w-4/5 md:w-7/8' />
      </div>

      <div className='ml-5'>
        <Eventbutton />
      </div>
    </div>
  );
}

export default Welcome;
