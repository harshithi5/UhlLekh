import React, { useEffect, useRef } from 'react'
import Prizecard from './Prizecard'
import { motion, useAnimation, useInView } from 'framer-motion'

// Simple pop-in animation
const cardVariants = {
    offscreen: {
        y: 60,
        opacity: 0,
        scale: 0.95,
    },
    onscreen: {
        y: 0,
        opacity: 1,
        scale: [0.95, 1.1, 1],
        transition: {
            y: { type: "spring", bounce: 0.4, duration: 0.6 },
            opacity: { duration: 0.4 },
            scale: { duration: 0.4, ease: "easeOut" }
        },
    }
}

function AnimatedCard({ card }) {
    const controls = useAnimation()
    const ref = useRef(null)
    const isInView = useInView(ref, { amount: 0.3 })

    useEffect(() => {
        if (isInView) {
            controls.start("onscreen")
        } else {
            controls.start("offscreen")
        }
    }, [isInView, controls])

    return (
        <motion.div
            ref={ref}
            variants={cardVariants}
            initial="offscreen"
            animate={controls}
        >
            <Prizecard {...card} />
        </motion.div>
    )
}

function Achievements() {
    const leftCards = [
        { head: "Inter IIT Slam Poetry'24", name: "Harshit Singh", rotate: 5 },
        { head: "Miraz Rant Poetry'24", name: "Nilay Arora", rotate: -3 },
        { head: "Hindi Pakhwada Poetry'24", name: "Rishabh Shukla", rotate: 8 },
        { head: "Inter IIT Story Writing'23", name: "Prashant Tiwary", rotate: -5 },
        { head: "Exodia Storytelling'25", name: "Lalita Jaiswal", rotate: 3 },
        { head: "National Poetry Contest'25", name: "Kumari Shreenidhi", rotate: -8 },
        { head: "Inter IIT Mushaira'24", name: "Aman Raj Shukla", rotate: 5 },
    ]

    const rightCards = [
        { head: "Inter IIT Mushaira'24", name: "Aman Raj Shukla", rotate: 5 },
        { head: "National Poetry Contest'25", name: "Kumari Shreenidhi", rotate: -8 },
        { head: "Exodia Storytelling'25", name: "Lalita Jaiswal", rotate: 3 },
        { head: "Inter IIT Story Writing'23", name: "Prashant Tiwary", rotate: -5 },
        { head: "Hindi Pakhwada Poetry'24", name: "Rishabh Shukla", rotate: 8 },
        { head: "Miraz Rant Poetry'24", name: "Nilay Arora", rotate: -3 },
        { head: "Inter IIT Slam Poetry'24", name: "Harshit Singh", rotate: 5 },
    ]

    return (
        <div className='mt-20 ml-5 mr-5 pt-5 pb-10 rounded-xl bg-amber-300 tracking-wide bg-[radial-gradient(rgba(75,70,182,0.7)_1.2px,transparent_1.2px)] bg-[length:30px_30px]' data-scroll data-scroll-speed="-.6">
            <div className='text-center font-semibold text-[7vw]'>Here are some of </div>
            <div className='text-center font-semibold text-[7vw] mb-17'>our Achievements</div>
            <div className='flex flex-col sm:flex-row items-center justify-center gap-3'>
                <div>
                    {leftCards.map((card, index) => (
                        <AnimatedCard key={index} card={card} />
                    ))}
                </div>
                <div>
                    {rightCards.map((card, index) => (
                        <AnimatedCard key={index + leftCards.length} card={card} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Achievements
