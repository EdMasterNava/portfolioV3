import React, { useState, useEffect } from 'react';
import {
    Box,
    List,
    Drawer,
    ListItem,
    IconButton,
    ListItemIcon,
    ListItemText,
    ListItemButton
} from '@mui/material';
import {
    Menu,
    Close
} from '@mui/icons-material';
import './style/Navbar.css';

function Navbar({
    handleNavigation
}) {
    const breakpoint = 1400;
    const [isMobile, setIsMobile] = useState(window.innerWidth < breakpoint);
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const swe =     "Software Engineer"
    const spanish = "Ingeniero de Software"
    const [intervalId, setIntervalId] = useState(null);
    const [open, setOpen] = useState(false);
    
    const toggleDrawer = (event) => {
        setOpen(prev => !prev);
        if(event.target.id){
            handleNavigation(event)    
        }
    }

    useEffect(() => {
        function handleResize() {
          setIsMobile(window.innerWidth < breakpoint);
        }
    
        window.addEventListener('resize', handleResize);
        return () => {
          window.removeEventListener('resize', handleResize);
        };
    }, []);

    const handleMouseOver = (event) => {
        clearInterval(intervalId);
        let iteration = 0;

        const newIntervalId = setInterval(() => {
            event.target.innerText = swe
                .split("")
                .map((char, index) => index < iteration ? char : letters[Math.floor(Math.random() * 26)])
                .join("");

            iteration += 0.5;
            if (iteration >= swe.length) clearInterval(newIntervalId);
        }, 30);

        setIntervalId(newIntervalId);
    };

    const handleMouseLeave = (event) => {
        clearInterval(intervalId);
        let iteration = 0;

        const newIntervalId = setInterval(() => {
            event.target.innerText = spanish
                .split("")
                .map((char, index) => index < iteration ? char : letters[Math.floor(Math.random() * 26)])
                .join("");

            iteration += 0.5;
            if (iteration >= spanish.length) clearInterval(newIntervalId);
        }, 30);

        setIntervalId(newIntervalId);
    };

    return (
        <>
            {isMobile ? 
                <div className='nav-container'>
                    <div className='title-container'>
                        <div className='nav-left'>
                            <div className='nav-name'>
                                Eduardo Nava    
                            </div>
                            <span 
                                onMouseOver={handleMouseOver}
                                onMouseLeave={handleMouseLeave}
                                className='swe'
                            >
                                Ingeniero de software
                            </span>    
                        </div>
                        <div>
                            <IconButton 
                                size="large" 
                                edge="start" 
                                color="inherit" 
                                onClick={toggleDrawer}
                            >
                                <Menu fontSize="large"/>
                            </IconButton>    
                        </div>
                    </div>
                    <Drawer 
                        open={open} 
                        onClose={toggleDrawer} 
                        anchor='right'
                        className='nav-drawer'
                    >
                        <Box className='nav-drawer-list'>
                            <div className='drawer-close'>
                                <IconButton 
                                    size="large" 
                                    edge="start" 
                                    color="inherit" 
                                    onClick={toggleDrawer}
                                >
                                    <Close fontSize="large"/> 
                                </IconButton>    
                            </div>
                            
                            <List>
                                <ListItem disablePadding sx={{display: 'flex', flexDirection: 'column'}}>
                                    <div 
                                        id='portfolio'
                                        onClick={toggleDrawer}
                                        className='drawer-list-item'
                                    >
                                        Portfolio
                                    </div>
                                    <div 
                                        id='skills'
                                        onClick={toggleDrawer}
                                        className='drawer-list-item'
                                    >
                                        Skills
                                    </div>
                                    <div 
                                        id='about'
                                        onClick={toggleDrawer}
                                        className='drawer-list-item'
                                    >
                                        About Me
                                    </div>
                                    <div 
                                        id='contact'
                                        onClick={toggleDrawer}
                                        className='drawer-list-item'
                                    >
                                        Contact
                                    </div>
                                </ListItem> 
                            </List>
                        </Box>
                    </Drawer>
                </div>
                :
                <div className='nav-container'>
                    <div className='title-container'>
                        <span>Eduardo</span> <span>Nava</span>
                    </div>
                    <div className='nav-tabs'>
                        <span 
                            onMouseOver={handleMouseOver}
                            onMouseLeave={handleMouseLeave}
                            className='swe'
                        >
                            Ingeniero de software
                        </span> 
                        <div className='nav-tabs-right'>
                            <span 
                                id='portfolio'
                                className='nav-tab' 
                                onClick={handleNavigation}
                            >
                                Portfolio
                            </span>
                            <span 
                                id='skills'
                                className='nav-tab'
                                onClick={handleNavigation}
                            >
                                Skills
                            </span>
                            <span 
                                id='about'
                                className='nav-tab'
                                onClick={handleNavigation}
                            >
                                About Me
                            </span>
                            <span 
                                id='contact'
                                className='nav-tab'
                                onClick={handleNavigation}
                            >
                                Contact
                            </span>    
                        </div>
                    </div>
                </div>    
            }
        </>   
    )
}

export default Navbar