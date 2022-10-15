import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

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