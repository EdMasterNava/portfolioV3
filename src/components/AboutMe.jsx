import React, { useState, useEffect } from 'react';
import TextScroll from './TextScroll';
import PhotoFader from './PhotoFader';

import './style/AboutMe.css';

function AboutMe({
    aboutRef
}) {
    const breakpoint = 1400;
    const bp2 = 1115;
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
        <div className='about-me-container' ref={aboutRef}>
            <TextScroll 
                left={isSquare ? -1425 : isMacbook ? -1825 : -2350} 
                right={500}
                style={{
                    marginBottom: '100px'
                }}
            >
                AboutMe
            </TextScroll>
            <div className='about-section'>
                <div className='about-card'>
                    <div className='about-left'>
                        <PhotoFader />
                    </div> 
                    <div className='about-right'>
                        <div className='about-title'>
                            Eduardo Nava
                        </div>
                        <div className='about-body'>
                            My programming path began in 2020 when I taught myself to code. 
                            I used what learned to compete in the high-energy world of hackathons, 
                            leading me to my exciting role at a forward-thinking startup. 
                            Here, I blend customer-focused solutions with innovative technology.
                        </div>
                        <div className='about-body'>
                            Outside of coding, I find balance and discipline through yoga and jiu-jitsu, which keep me grounded and agile.  
                        </div>
                        <div className='about-body'>
                            I'm passionate about building user-centric tech that makes a difference. Let's connect and create something impactful together!    
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutMe