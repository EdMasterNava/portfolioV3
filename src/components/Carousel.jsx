import React, { useState, useEffect, useRef } from 'react';
import { useInView } from "framer-motion"
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import './style/Carousel.css'; 

const Carousel = ({ images }) => {
    const breakpoint = 1400;
    const bp2 = 800;
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

    const ref = useRef(null)
    const isInView = useInView(ref)
    const numOfImgs = isSquare ? 1 : isMacbook ? 3 : 5;
    const numOfOffset = isSquare ? 0 : isMacbook ? 1 : 2;
    const extendedImages = [...images, ...images, ...images];
    const offset = Math.floor(images.length - numOfOffset);
    const [currentIndex, setCurrentIndex] = useState(offset);
    const [transition, setTransition] = useState('transform 0.5s ease');
    const autoPlayInterval = 4000;

    useEffect(() => {
        if (isInView) {
            const interval = setInterval(() => {
                goToNext();
            }, autoPlayInterval);

            return () => clearInterval(interval);    
        }
    }, [currentIndex, isInView]);

    useEffect(() => {
        const delay = (ms) => {
            return new Promise(resolve => setTimeout(resolve, ms));
        }
        const checkIndex = async() => {
            if (currentIndex === 0) {
                await delay(500)
                setTransition('none');
                setCurrentIndex(images.length)
                await delay(30)
                setTransition('transform 0.5s ease');
            } else if (currentIndex === images.length * 2 - 2) {
                await delay(500)
                setTransition('none');
                setCurrentIndex(images.length - 2);
                await delay(30)
                setTransition('transform 0.5s ease');
            }    
        }
        checkIndex()
    }, [currentIndex, images.length]);

    const goToPrevious = () => {
        if (!(currentIndex === 0)){
            setCurrentIndex(currentIndex - 1);
        }
    };

    const goToNext = () => {
        if (!(currentIndex === images.length * 2 - 2)){
            setCurrentIndex(currentIndex + 1);
        } 
    };

    const goToIndex = (index) => {
        if(index < images.length - 2 ) {
            setCurrentIndex(index + images.length)
        }else {
            setCurrentIndex(index)
        }
    }

    return (
        <div 
            className="carousel"
            ref={ref}
        >
            <div 
                className="carousel-inner" 
                style={{ 
                    transform: `translateX(-${currentIndex * 100 / numOfImgs}%)`, 
                    transition: transition 
                }}
            >
                {extendedImages.map((image, index) => {

                    return (
                        <div 
                            className="carousel-item" 
                            key={index}
                            style={{
                                transform: index === currentIndex + numOfOffset ? 'rotateY(360deg)' : (index < currentIndex + 2 ? 'rotateY(385deg)' : 'rotateY(335deg)'), 
                                transition: transition ,
                                width: `${100 / numOfImgs}%`
                            }}
                        >
                            <div className='carousel-item-text'>
                                {image.name}
                            </div>
                            <img src={image.image} />
                        </div>
                    )
                })}
            </div>
            <div className='carousel-btns-container'>
                <div 
                    className='carousel-btns'
                    style={{
                        width: `${100 / numOfImgs}%`
                    }}
                >
                    <div onClick={goToPrevious} className='carousel-btn'>
                        <NavigateBeforeIcon fontSize='large'/>
                    </div>
                    <div onClick={goToNext} className='carousel-btn'>
                        <NavigateNextIcon fontSize='large'/>
                    </div>    
                </div>
            </div>
            <div className='dots-container'>
                {images.map((_, index) => {
                    const adjustedIndex = currentIndex >= images.length ? currentIndex - images.length : currentIndex
                    const offsetIndex = (index + offset) % (images.length)
                    return (
                        <span
                            key={index}
                            onClick={() => goToIndex(offsetIndex)}
                            style={{
                                display: 'inline-block',
                                width: '10px',
                                height: '10px',
                                borderRadius: '50%',
                                background: offsetIndex % images.length === adjustedIndex ? '#000000' : 'var(--text)',
                                margin: '0 5px',
                                cursor: 'pointer',
                            }}
                        />
                    )
                })}
            </div>
        </div>
    );
};

export default Carousel;
