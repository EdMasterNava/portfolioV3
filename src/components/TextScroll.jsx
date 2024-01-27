import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import './style/TextScroll.css';

function TextScroll({ children, left, right, style }) {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["0 1", "50 1"]
    });
    const shift = useTransform(scrollYProgress, [0, 1], [left, right])
    return (
        <motion.div 
            className='text-scroll-container'
            ref={ref}
            style={{
                ...style,
                translateX: shift
            }}
        >
            <div className='text-scroll-left'>
                {Array.from(Array(5)).map((_, index) => {
                    return (
                        <span 
                            key={index}
                            className='outline'
                        >
                            {children}
                            <span className='outline-shadow'>{children}</span>
                        </span>
                    )
                })}
            </div>
            <div className='text-scroll-center'>
                {children}
            </div>
            <div className='text-scroll-right'>
                {Array.from(Array(7)).map((_, index) => {
                    return (
                        <span 
                            key={index}
                            className='outline'
                        >
                            {children}
                            <span className='outline-shadow'>{children}</span>
                        </span>
                    )
                })}
            </div>
        </motion.div>
    )
}

export default TextScroll