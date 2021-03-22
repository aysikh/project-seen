import React from 'react'; 
import { makeStyles } from '@material-ui/core/styles';
import BG from '../assets/brown-bg.jpeg';

import LogInForm from '../components/LogInForm'

const useStyles = makeStyles(() => ({
  bg: {
    minHeight: '90vh',
    backgroundImage: `url(${BG})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundAttachment: 'fixed',
    overflow:'hidden', 
    overflowY: 'hidden'
  },
}));

export default function LogInContainer(props){
  const classes = useStyles();

  return(
    <div className={classes.bg}>
      <LogInForm 
        setLoggedIn={props.setLoggedIn}
        setUserLoggedIn={props.setUserLoggedIn}
      /> 
    </div>
  )
}