import React from 'react';
import { motion } from 'framer-motion';
import './style/Blob.css';

function Blob({position}) {
  return (
    <motion.div
        className='blob'
        initial={{ 
            opacity: 1
        }}
        animate={{ 
            opacity: 1, 
            x: position.x, 
            y: position.y,
        }}
        transition={{ 
            ease: 'easeOut', 
            duration: 0.5
        }}
    >
        <motion.div 
            className='blob-color'
            initial={{ opacity: 1 }}
            animate={{ 
                opacity: 1,
                rotate: [0, 360]
            }}
            transition={{ 
                ease: 'linear', 
                duration: 20,
                repeat: Infinity
            }}
        />
    </motion.div>
  )
}

export default Blob