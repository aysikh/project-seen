import React, { Component } from 'react'; 
import { makeStyles } from '@material-ui/core/styles';
import BG from '../assets/bg-11.jpeg';

import LogInForm from '../components/LogInForm'

const useStyles = makeStyles(() => ({
  bg: {
    minHeight: '100vh',
    backgroundImage: `url(${BG})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  },
}));

export default function LogInContainer(){
  const classes = useStyles();

  return(
    <div className={classes.bg}>
      <LogInForm /> 
    </div>
  )
}