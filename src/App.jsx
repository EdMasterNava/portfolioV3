import React, { useState, useRef, useEffect } from 'react';
import { 
  Blob,
  Navbar,
  Hero,
  Portfolio,
  Skills,
  AboutMe,
  Contact
} from './components';
import './App.css';

function App() {
  const heightRef = useRef(null);
  const portfolioRef = useRef(null);
  const skillsRef = useRef(null);
  const aboutRef = useRef(null);
  const contactRef = useRef(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (heightRef.current) {
      // Get dimensions
      const width = heightRef.current.offsetWidth;
      const height = heightRef.current.offsetHeight;

      // Update state
      setDimensions({ width, height });
    }
  }, []);

  const handleMouseMove = (event) => {
    setPosition({
      x: event.pageX,
      y: event.pageY > dimensions.height - 450 ? dimensions.height - 450 : event.pageY,
    });
  };
  const handleNavigation = (event) => {
    const id = event.target.id;
    if(id === 'portfolio') {
      portfolioRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    if(id === 'skills') {
      skillsRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    if(id === 'about') {
      aboutRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    if(id === 'contact') {
      contactRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
  return (
    <div 
      ref={heightRef}
      className='app-container'
      onMouseMove={handleMouseMove}
    >
      <Blob position={position}/>
      <div className='blur'/>
      <div className='nav-hero'>
        <Navbar handleNavigation={handleNavigation}/>
        <Hero />  
      </div>
      
      <Portfolio portfolioRef={portfolioRef}/>
      <Skills skillsRef={skillsRef}/>
      <AboutMe aboutRef={aboutRef}/>
      <Contact contactRef={contactRef}/>
    </div>
    
  )
}

export default App
