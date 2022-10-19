import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar } from "@material-ui/core";
import Toolbar from '@mui/material/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';

const NavBar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="menu">
        Home 
        </IconButton>
        <IconButton edge="start" color="inherit" aria-label="menu">
        Pricing 
        </IconButton>
        <IconButton edge="start" color="inherit" aria-label="menu">
        Contact
        </IconButton>
        <IconButton edge="start" color="inherit" aria-label="menu">
        Aboout Us
        </IconButton>
        <Button edge="end" color="inherit">Sign In!</Button>
      </Toolbar>
    </AppBar>
  )
}

export default NavBar;