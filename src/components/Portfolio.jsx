import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll } from 'framer-motion';

import TextScroll from './TextScroll';

import touchstone from './media/touchstone.png';
import uiai from './media/uiai.png';
import aiReporter from './media/ai-reporter.png';
import rollroster from './media/rollroster.png';
import './style/Portfolio.css';

const projects = [
    {
        image: touchstone,
        title: 'TouchStone',
        subtitle: 'Building the most trusted sexual health platform',
        size: '110% 100%',
        link: "https://www.usetouchstone.com/"
    },
    {
        image: uiai,
        title: 'UiAi',
        subtitle: 'Create infitinite design inspiration from a sketch',
        size: '110% 110%',
        link: 'https://www.ui-ai.net/'
    },
    {
        image: aiReporter,
        title: 'AI Reporter',
        subtitle: 'Convert audio into a news article',
        size: '110% 100%',
        link: 'https://www.ai-reporter.net/'
    },
    {
        image: rollroster,
        title: 'Roll Roster',
        subtitle: 'Find all upcoming Jiu Jitsu events in one place',
        size: '100% 100%',
        link: 'https://therollroster.com/'
    }
];

function Portfolio({
    portfolioRef
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

    const project1Ref = useRef(null);
    const project2Ref = useRef(null);
    const project3Ref = useRef(null);
    const project4Ref = useRef(null);

    const project1Progress = useScroll({
        target: project1Ref,
        offset: ["0 1", "0.6 1"]
    }).scrollYProgress
    const project2Progress = useScroll({
        target: project2Ref,
        offset: ["0 1", "0.6 1"]
    }).scrollYProgress
    const project3Progress = useScroll({
        target: project3Ref,
        offset: ["0 1", "0.6 1"]
    }).scrollYProgress
    const project4Progress = useScroll({
        target: project4Ref,
        offset: ["0 1", "0.6 1"]
    }).scrollYProgress
    
    return (
        <div className='portfolio-container' ref={portfolioRef}>
            <TextScroll left={isSquare ? -1350 : isMacbook ? -1800 : -2350} right={500} style={{marginBottom: '150px'}}>
                Portfolio
            </TextScroll>
            {isSquare ? 
                <div className='project1'>
                    <div 
                        ref={project1Ref}
                        className='project-left'
                    >
                        <motion.div 
                            className='portfolio-img' 
                            style={{
                                backgroundImage: `url(${projects[0].image})`,
                                backgroundSize: `${projects[0].size}`,
                                opacity: project1Progress
                            }}
                        />
                    </div>
                    <div className='project-right'>
                        <motion.div 
                            className='project-info'
                            style={{
                                opacity: project1Progress
                            }}
                        >
                            <div className='project-title'>
                                {projects[0].title}
                            </div>
                            <div className='project-p'>
                                {projects[0].subtitle}
                            </div>
                            <div className='project-p'>
                                See it live <a 
                                    href={`${projects[0].link}`} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className='project-link'
                                >
                                    here
                                </a>
                            </div>
                        </motion.div>
                    </div>
                </div>
                :
                <div className='project1 space-between'>
                    <div 
                        ref={project1Ref}
                        className='project-left'
                    >
                        <motion.div 
                            className='portfolio-img' 
                            style={{
                                backgroundImage: `url(${projects[0].image})`,
                                backgroundSize: `${projects[0].size}`,
                                opacity: project1Progress
                            }}
                        />
                    </div>
                    <div className='project-right'>
                        <motion.div 
                            className='project-info'
                            style={{
                                opacity: project1Progress
                            }}
                        >
                            <div className='project-title'>
                                {projects[0].title}
                            </div>
                            <div className='project-p'>
                                {projects[0].subtitle}
                            </div>
                            <div className='project-p'>
                                See it live <a 
                                    href={`${projects[0].link}`} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className='project-link'
                                >
                                    here
                                </a>
                            </div>
                        </motion.div>
                    </div>
                </div>
            }
            {isSquare ? 
                <div className='project2'>
                    <div 
                        ref={project2Ref}
                        className='project-right'
                    >
                        <motion.div 
                            className='portfolio-img' 
                            style={{
                                backgroundImage: `url(${projects[1].image})`,
                                backgroundSize: `${projects[1].size}`,
                                opacity: project2Progress
                            }}
                        />
                    </div>
                    <div className='project-left'>
                        <motion.div 
                            className='project-info align-right'
                            style={{
                                opacity: project2Progress
                            }}
                        >
                            <div className='project-title'>
                                {projects[1].title}
                            </div>
                            <div className='project-p'>
                                {projects[1].subtitle}
                            </div>
                            <div className='project-p'>
                                See it live <a 
                                    href={`${projects[1].link}`} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className='project-link'
                                >
                                    here
                                </a>
                            </div>
                        </motion.div>
                    </div>
                </div>
                :
                <div className='project2 space-between'>
                    <div className='project-left'>
                        <motion.div 
                            className='project-info align-right'
                            style={{
                                opacity: project2Progress
                            }}
                        >
                            <div className='project-title'>
                                {projects[1].title}
                            </div>
                            <div className='project-p'>
                                {projects[1].subtitle}
                            </div>
                            <div className='project-p'>
                                See it live <a 
                                    href={`${projects[1].link}`} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className='project-link'
                                >
                                    here
                                </a>
                            </div>
                        </motion.div>
                    </div>
                    <div 
                        ref={project2Ref}
                        className='project-right'
                    >
                        <motion.div 
                            className='portfolio-img overlap' 
                            style={{
                                backgroundImage: `url(${projects[1].image})`,
                                backgroundSize: `${projects[1].size}`,
                                opacity: project2Progress
                            }}
                        />
                    </div>
                </div>
            }
            
            {isSquare ? 
                <div className='project1'>
                    <div 
                        ref={project3Ref}
                        className='project-left'
                    >
                        <motion.div 
                            className='portfolio-img' 
                            style={{
                                backgroundImage: `url(${projects[2].image})`,
                                backgroundSize: `${projects[2].size}`,
                                opacity: project3Progress
                            }}
                        />
                    </div>
                    <div className='project-right'>
                        <motion.div 
                            className='project-info'
                            style={{
                                opacity: project3Progress
                            }}
                        >
                            <div className='project-title'>
                                {projects[2].title}
                            </div>
                            <div className='project-p'>
                                {projects[2].subtitle}
                            </div>
                            <div className='project-p'>
                                See it live <a 
                                    href={`${projects[2].link}`} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className='project-link'
                                >
                                    here
                                </a>
                            </div>
                        </motion.div>
                    </div>
                </div>
                :
                <div className='project1 space-between'>
                    <div 
                        ref={project3Ref}
                        className='project-left'
                    >
                        <motion.div 
                            className='portfolio-img' 
                            style={{
                                backgroundImage: `url(${projects[2].image})`,
                                backgroundSize: `${projects[2].size}`,
                                opacity: project3Progress
                            }}
                        />
                    </div>
                    <div className='project-right'>
                        <motion.div 
                            className='project-info'
                            style={{
                                opacity: project3Progress
                            }}
                        >
                            <div className='project-title'>
                                {projects[2].title}
                            </div>
                            <div className='project-p'>
                                {projects[2].subtitle}
                            </div>
                            <div className='project-p'>
                                See it live <a 
                                    href={`${projects[2].link}`} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className='project-link'
                                >
                                    here
                                </a>
                            </div>
                        </motion.div>
                    </div>
                </div>
            }
            {isSquare ? 
                <div className='project2'>
                    <div 
                        ref={project4Ref}
                        className='project-right'
                    >
                        <motion.div 
                            className='portfolio-img' 
                            style={{
                                backgroundImage: `url(${projects[3].image})`,
                                backgroundSize: `${projects[3].size}`,
                                opacity: project4Progress
                            }}
                        />
                    </div>
                    <div className='project-left'>
                        <motion.div 
                            className='project-info align-right'
                            style={{
                                opacity: project4Progress
                            }}
                        >
                            <div className='project-title'>
                                {projects[3].title}
                            </div>
                            <div className='project-p'>
                                {projects[3].subtitle}
                            </div>
                            <div className='project-p'>
                                See it live <a 
                                    href={`${projects[3].link}`} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className='project-link'
                                >
                                    here
                                </a>
                            </div>
                        </motion.div>
                    </div>
                </div>
                :
                <div className='project2 space-between'>
                    <div className='project-left'>
                        <motion.div 
                            className='project-info align-right'
                            style={{
                                opacity: project4Progress
                            }}
                        >
                            <div className='project-title'>
                                {projects[3].title}
                            </div>
                            <div className='project-p'>
                                {projects[3].subtitle}
                            </div>
                            <div className='project-p'>
                                See it live <a 
                                    href={`${projects[3].link}`} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className='project-link'
                                >
                                    here
                                </a>
                            </div>
                        </motion.div>
                    </div>
                    <div 
                        ref={project4Ref}
                        className='project-right'
                    >
                        <motion.div 
                            className='portfolio-img overlap' 
                            style={{
                                backgroundImage: `url(${projects[3].image})`,
                                backgroundSize: `${projects[3].size}`,
                                opacity: project4Progress
                            }}
                        />
                    </div>
                </div>
            }
        </div>
    )
}

export default Portfolio