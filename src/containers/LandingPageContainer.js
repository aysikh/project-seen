import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles'
import Logo from '../assets/seen-logo-2.png'
import white from '../assets/white.png'
import LandingPageAppInfo from '../components/LandingPageAppInfo'


const useStyles = makeStyles((theme) => ({
  bg: {
      width: '100%', 
      minHeight: '90vh',
      backgroundImage: `url(${white})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      backgroundAttachment: 'fixed',
    },
  }));


export default function LandingPageContainer() {
  const classes = useStyles();

  return (
    <div className={classes.bg} > 
      <LandingPageAppInfo /> 
      <center> <img src={Logo} style={{marginTop: '5rem'}}/>  </center>
    </div> 
  )
}
