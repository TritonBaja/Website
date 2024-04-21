import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import './NavBar.css';
import Logo from '../../logo.png';

const NavBar = () => {
    const navItems = [
        { text: ' Home ', link: '/' },
        { text: ' Our Design ', link: '/design' },
        { text: ' Meet The Team ', link: '/team' },
        { text: ' Getting Involved ', link: '/involved' },
        { text: ' Sponsorship ', link: '/sponsorship' },
    ];

    return (
        <AppBar position="static">
            <Toolbar sx={{backgroundColor: '#04142D'}}>
                <img src={Logo} alt="Logo" style={{ marginRight: '10px', height: '70px' }} /> 

                <Typography 
                variant="h6"
                component="div" 
                sx={{color: '#FEBA01', 
                    fontFamily: 'Poppins, sans-serif', 
                    fontWeight: '400', 
                    fontSize: '24px',
                    flexGrow: 1}}>

                    Triton Baja
                </Typography>

                {navItems.map((item, index) => (
                    <Button 
                    key={index}
                    component={Link} 
                    to={item.link} 
                    sx={{ color: '#FEBA01', 
                        fontFamily: 'Poppins, sans-serif', 
                        fontWeight: '400',
                        fontSize: '16px'
                        }}>
                        {item.text}
                    </Button>
                ))}
            </Toolbar>
        </AppBar>
    );
};

export default NavBar;