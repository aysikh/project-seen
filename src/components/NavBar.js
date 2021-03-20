import React, { useState }  from 'react'
import { Link, BrowserRouter, Route, Router} from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import SeenSimple from '../assets/seen-simple.png'
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button'; 
import Toolbar from '@material-ui/core/Toolbar';
import Box from '@material-ui/core/Box'
import LogInContainer from '../containers/LogInContainer';


const useStyles = makeStyles((theme) => ({
  logo: {
    backgroundColor: 'white', 
  },
  profileButton: {
    position: 'relative',
    backgroundColor: 'inherit', 
    color: 'black',
    marginLeft: 'auto'
  },
  logoutButton: {
    position: 'relative', 
    backgroundColor: 'inherit', 
    color: 'black',
    marginLeft: '15px',
  },
  navlogo: {
    display: 'fixed',
    width: '6rem', 
    marginLeft: '52rem'
  }
}));

export default function NavBar(props) {
  const classes = useStyles();

  return(
    <div>

    {props.isLoggedIn ? 
      <AppBar position="static" className={classes.logo}>
        <Toolbar>
          <Box> 
          <a href="/"> 
          <img src={SeenSimple} className={classes.navlogo}/>
          </a> 
          </Box>
          <Button component={Link} className={classes.profileButton} to="/new-review">
            Write a Review
          </Button>
          <Button component={Link} to="/profile">
            Profile
          </Button>
          <Button component={Link} to="/login">
            Log Out
          </Button>
        </Toolbar>
      </AppBar>
       : 
      <AppBar position="static" className={classes.logo}>
        <Toolbar>
          <Box> 
          <a href="/"> 
          <img src={SeenSimple} className={classes.navlogo}/>
          </a> 
          </Box>
          <Button className={classes.profileButton} component={Link} to="/login"> 
            Sign In
          </Button> 
        </Toolbar>
      </AppBar>
    }
    </div>
  )
}