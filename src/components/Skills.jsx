import React, { useState, useEffect } from 'react';
import TextScroll from './TextScroll';
import Carousel from './Carousel';
import html from './media/html.png';
import css from './media/css.png';
import js from './media/JS.png';
import python from './media/python.png';
import huggingface from './media/huggingface.png';
import aws from './media/aws.png';
import figma from './media/figma.png';
import './style/Skills.css';

const images = [
    {
        name: 'Figma',
        image: figma,
    },
    {
        name: 'HTML',
        image: html,
    },
    {
        name: 'CSS',
        image: css,
    },
    {
        name: 'JavaScript',
        image: js,
    },
    {
        name: 'Python',
        image: python,
    },
    {
        name: 'HuggingFace',
        image: huggingface,
    },
    {
        name: 'AWS',
        image: aws,
    },
]

function Skills({
    skillsRef
}) {
    const breakpoint = 1400;
    const bp2 = 1115
    const [isMacbook, setIsMacbook] = useState(window.innerWidth < breakpoint);
    const [isSquare, setIsSquare] = useState(window.innerWidth < bp2);

    useEffect(() => {
        function handleResize() {
            setIsMacbook(window.innerWidth < breakpoint);
            setIsSquare(window.innerWidth < bp2);
        }
    
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    return (
        <div className='skills-container' ref={skillsRef}>
            <TextScroll left={isSquare ? -850 : isMacbook ? -1100 : -1400} right={500}>
                Skills
            </TextScroll>
            <Carousel images={images}/>
        </div>
    )
}

export default Skills