import React, { useEffect } from 'react';
import Shell03 from './assets/cutshell03.svg';
import Textcard from './Textcard';
import Star from './assets/star.svg';
import Hash from './assets/hash.svg';
import Asterick from './assets/asterick.svg';
import Heart from './assets/heart.svg';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

function Grid() {
  const controls10 = useAnimation();
  const controls40 = useAnimation();

  const [ref10, inView10] = useInView({ triggerOnce: true });
  const [ref40, inView40] = useInView({ triggerOnce: true });

  useEffect(() => {
    if (inView10) {
      controls10.start({ x: 0, opacity: 1, transition: {delay:0.2, duration: 0.6, ease: 'easeOut' } });
    }
    if (inView40) {
      controls40.start({ x: 0, opacity: 1, transition: {delay:0.2, duration: 0.6, ease: 'easeOut' } });
    }
  }, [inView10, inView40, controls10, controls40]);

  return (
    <div className='bg-[#fefff0] mt-15 relative flex flex-col md:flex-row w-full md:justify-center'>
      <img src={Shell03} className='absolute right-0 -top-12 h-18 md:h-30' />
      <div className='flex items-center flex-col'>
        <div className='w-72 p-4 border-3 md:h-2/6 lg:w-90 md:border-l-0 md:border-r-0'>
          <motion.div
            ref={ref10}
            initial={{ x: -50, opacity: 0 }}
            animate={controls10}
            className="text-5xl font-semibold"
          >
            10+
          </motion.div>
          <div className='text-4xl'>genres</div>
        </div>
        <div className='w-72 p-4 border-l-3 border-r-3 border-b-3 md:h-4/6 lg:w-90 md:border-l-0 md:border-r-0'>
          <motion.div
            ref={ref40}
            initial={{ x: -50, opacity: 0 }}
            animate={controls40}
            className="text-5xl font-semibold"
          >
            40+
          </motion.div>
          <div className='text-4xl'>awards</div>
        </div>
      </div>
      <div>
        <div className='flex flex-col md:flex-row items-center'>
          <Textcard src={Star} head="Stories" content="we write stories as the idea flows out through nip" link="https://www.instagram.com/p/DEz2bmiNAFn/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" />
          <Textcard src={Hash} head="Poetries" content="we write poems, sparking the emotion in one and all" link="https://www.instagram.com/p/C4yULtqPDZt/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" />
        </div>
        <div className='flex flex-col md:flex-row items-center md:border-b-3'>
          <Textcard src={Heart} head="Ghazals" content="we write ghazals to let the people feel love once more" link="https://www.instagram.com/reel/DEW7HKMxvBfejt7wmSUTGZQuSOvZcrh_JKUNTo0/?igsh=MWt3ZnlxOXNkY3NoMg=="/>
          <Textcard src={Asterick} head="Wordles" content="we play word games, sharpening minds and vocab" link="https://www.instagram.com/p/CsJ_GgKrFsg/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" />
        </div>
      </div>
    </div>
  );
}

export default Grid;
