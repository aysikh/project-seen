import React from 'react'; 
import { makeStyles } from '@material-ui/core/styles';
import BG from '../assets/brown-bg.jpeg';

import LogInForm from '../components/LogInForm'

const useStyles = makeStyles(() => ({
  bg: {
    minHeight: '90vh',
    backgroundImage: `url(${BG})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: '100% 100%',
    backgroundAttachment: 'fixed',
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