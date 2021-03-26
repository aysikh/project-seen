import React from 'react'; 
import { makeStyles } from '@material-ui/core/styles';
import BG from '../assets/tan-bg.jpeg';

import LogInForm from '../components/LogInForm'

const useStyles = makeStyles(() => ({
  bg: {
    minHeight: '100vh',
    backgroundImage: `url(${BG})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: '100% 115%',
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