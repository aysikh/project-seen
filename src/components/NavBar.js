import React from 'react'
import AppBar from '@material-ui/core/AppBar';
import SeenSimple from '../assets/seen-simple.png'
import { makeStyles } from '@material-ui/core/styles';
import { Link, Router } from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
  logo: {
    backgroundColor: 'white', 
  },
}));


export default function NavBar() {
  const classes = useStyles();

  return(
    <div>
      <AppBar position="static" className={classes.logo}>
        <center>
          <a href="/"> 
          <img src={SeenSimple} style={{width: '6rem'}}/>
          </a> 
        </center>
      </AppBar>
    </div>
  )
}