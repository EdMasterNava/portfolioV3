import React, { useState, useEffect } from 'react';
import TextScroll from './TextScroll';
import linkedIn from './media/linkedin.png';
import email from './media/email.png';
import github from './media/github.png';
import './style/Contact.css';

function Contact({
    contactRef
}) {
    const breakpoint = 1400;
    const bp2 = 1115;
    const bp3 = 600;
    const [isMacbook, setIsMacbook] = useState(window.innerWidth < breakpoint);
    const [isSquare, setIsSquare] = useState(window.innerWidth < bp2);
    const [isMobile, setIsMobile] = useState(window.innerWidth < bp3);

    useEffect(() => {
        function handleResize() {
            setIsMacbook(window.innerWidth < breakpoint);
            setIsSquare(window.innerWidth < bp2);
            setIsMobile(window.innerWidth < bp3);
        }
    
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const [bg, setBG] = useState(null);
    const handleBGChange = (event) => {
        if(isMobile) {
            return
        }
        const id = event.target.id;
        if (id === 'linkedin'){
            setBG(linkedIn)
        }
        if (id === 'email'){
            setBG(email)
        }
        if (id === 'github'){
            setBG(github)
        } 
    }
    const handleReset = () => {
        setBG(null)
    }
    function isMobileDevice() {
        return /iPhone|iPad|iPod|Android|Windows Phone/i.test(navigator.userAgent);
    }
    const handleLink = (event) => {
        const id = event.target.id;
        if (id === 'linkedin'){
            const linkedinLink = 'https://www.linkedin.com/in/eduardo-nava-codes/';
            window.open(linkedinLink, '_blank');    
        }
        if (id === 'email'){
            const email = 'eduardonava2ms@gmail.com';
            if (isMobileDevice()){
                const gmailUrl = `googlegmail:///co?to=${email}`;
                window.open(gmailUrl, '_system');
            }else {
                const mailtoLink = `https://mail.google.com/mail/?view=cm&to=${email}`;
                window.open(mailtoLink, '_blank');
            }
        }
        if (id === 'github'){
            const githubLink = 'https://github.com/EdMasterNava';
            window.open(githubLink, '_blank');
        }

    }
    return (
        <div className='contact-container' ref={contactRef}>
            <TextScroll 
                left={isSquare ? -1175 : isMacbook ? -1550 : -2000} 
                right={500}
                style={{
                    marginBottom: '150px'
                }}
            >
                Contact    
            </TextScroll>
            <div 
                className='contact-card'
                style={{
                    backgroundImage: `url(${bg})`
                }}
            >
                <div className='contact-title'>
                    Say Hi!
                </div>
                <div className='contact-links'>
                    <div
                        className='c-link'
                        id='linkedin' 
                        onMouseOver={handleBGChange}
                        onMouseLeave={handleReset}
                        onClick={handleLink}
                    >
                        LinkedIn.
                    </div>
                    <div
                        className='c-link'
                        id='email' 
                        onMouseOver={handleBGChange}
                        onMouseLeave={handleReset}
                        onClick={handleLink}
                    >
                        Email.
                    </div>
                    <div
                        className='c-link'
                        id='github' 
                        onMouseOver={handleBGChange}
                        onMouseLeave={handleReset}
                        onClick={handleLink}
                    >
                        GitHub.
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact