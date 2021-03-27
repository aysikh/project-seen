import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import BG from '../assets/girl.png';
import SignUpForm from '../components/SignUpForm';

const useStyles = makeStyles(() => ({
  bg: {
    minHeight: '100vh',
    backgroundImage: `url(${BG})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundAttachment: 'fixed',
    backgroundPosition: 'center'
  },
}));

export default function SignUpContainer(props) {
  const classes = useStyles();

  return (
    <div className={classes.bg}>
      <SignUpForm {...props} /> 
    </div>
  )
}
