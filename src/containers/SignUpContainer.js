import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import BG from '../assets/tan-bg.jpeg';
import SignUpForm from '../components/SignUpForm';

const useStyles = makeStyles(() => ({
  bg: {
    minHeight: '100vh',
    backgroundImage: `url(${BG})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundAttachment: 'fixed'
  },
}));

export default function SignUpContainer() {
  const classes = useStyles();

  return (
    <div className={classes.bg}>
      <SignUpForm /> 
    </div>
  )
}
