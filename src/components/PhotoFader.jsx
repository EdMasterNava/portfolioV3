import React, { useState, useEffect, useRef } from 'react';
import { useInView } from "framer-motion"
import proPic from './media/pro_pic.png';
import proPic2 from './media/pro_pic2.png';
import proPic3 from './media/pro_pic3.png';
import proPic4 from './media/pro_pic4.png';
import proPic5 from './media/pro_pic5.png';
import proPic6 from './media/pro_pic6.png';
import proPic7 from './media/pro_pic7.png';
import proPic8 from './media/pro_pic8.png';
import './style/PhotoFader.css';

const photos = [
  proPic,
  proPic5,
  proPic2,
  proPic3,
  proPic4,
  proPic6,
  proPic7,
  proPic8
];

const PhotoFader = () => {
  const ref = useRef(null)
  const isInView = useInView(ref)
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);
  const [nextPhotoIndex, setNextPhotoIndex] = useState((currentPhotoIndex + 1) % photos.length);
  const [fade, setFade] = useState(false);

  useEffect(() => {
    const timer = 3000
    if(isInView) {
      const interval = setInterval(() => {
          setFade(true);
          setTimeout(() => {
              setCurrentPhotoIndex(nextPhotoIndex);
              setNextPhotoIndex((nextPhotoIndex + 1) % photos.length);
              setFade(false);
          }, timer); 
      }, timer); 
  
      return () => clearInterval(interval);  
    }
      
  }, [nextPhotoIndex, isInView]);
  
  return (
    <div 
    ref={ref}
      className="photo-container"
    >
      <img 
        src={photos[currentPhotoIndex]} 
        alt="Current"
        className="photo" 
      />
      <img 
        src={photos[nextPhotoIndex]} 
        alt="Next"
        className={`photo clear ${fade ? 'fade-in' : ''}`} 
      />
    </div>
  );
}
  


export default PhotoFader;
