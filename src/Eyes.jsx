import React, { useEffect, useState, useRef } from 'react'

function Eyes() {
    const [angle, setangle] = useState(90);
    const [offset, setOffset] = useState({ x: 0, y: 0 });
    const eyeRef = useRef(null);

    useEffect(() => {
        const handler = (e) => {
            if (!eyeRef.current) return;

            const rect = eyeRef.current.getBoundingClientRect();
            const centerX = rect.left + rect.width / 2;
            const centerY = rect.top + rect.height / 2;

            const dx = e.clientX - centerX;
            const dy = e.clientY - centerY;

            const theta = Math.atan2(dy, dx) * (180 / Math.PI);
            setangle(theta);

            // ---- Translation Logic ----
            const distance = Math.sqrt(dx * dx + dy * dy);
            const maxDistance = 0.3 * parseFloat(getComputedStyle(document.documentElement).fontSize); // 1rem in px

            if (distance !== 0) {
                const unitX = dx / distance;
                const unitY = dy / distance;

                const tx = unitX * maxDistance;
                const ty = unitY * maxDistance;

                setOffset({ x: tx, y: ty });
            }
        };

        window.addEventListener("mousemove", handler);
        return () => window.removeEventListener("mousemove", handler);
    }, []);

    return (
        <div className='flex gap-2.5'>
            <div
                ref={eyeRef}
                className="h-15 w-15 rounded-full bg-white flex items-center justify-center border-2 shadow-[3px_3px_10px_black]"
            >
                <div
                    className="h-8 w-8 rounded-full bg-black flex items-center justify-center transition-transform duration-300 ease-linear"
                    style={{
                        transform: `translate(${offset.x}px, ${offset.y}px)`,
                        transition: 'transform 0.5s ease-out'
                    }}
                >
                    <div
                        className="h-1.5 w-full"
                        style={{
                            transform: `rotate(${angle+180}deg)`,
                            transition: 'transform 0.5s linear'
                        }}
                    >
                        <div className='h-1.5 w-1.5 rounded-full bg-white ml-1'></div>
                    </div>
                </div>
            </div>

            <div
                ref={eyeRef}
                className="h-15 w-15 rounded-full bg-white flex items-center justify-center border-2 shadow-[3px_3px_10px_black]"
            >
                <div
                    className="h-8 w-8 rounded-full bg-black flex items-center justify-center transition-transform duration-300 ease-linear"
                    style={{
                        transform: `translate(${offset.x}px, ${offset.y}px)`,
                        transition: 'transform 0.5s ease-out'
                    }}
                >
                    <div
                        className="h-1.5 w-full"
                        style={{
                            transform: `rotate(${angle+180}deg)`,
                            transition: 'transform 0.5s linear'
                        }}
                    >
                        <div className='h-1.5 w-1.5 rounded-full bg-white ml-1'></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Eyes;
