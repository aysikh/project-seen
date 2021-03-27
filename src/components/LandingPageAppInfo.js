import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import CompaniesAutocomplete from './CompaniesAutocomplete'
import Fade from '@material-ui/core/Fade';

const useStyles = makeStyles((theme) => ({
  appBar:{
    backgroundColor: 'white',
    width: '60rem',
    marginBottom: '2rem',
  },
  grow: {
    flexGrow: 1,
  }, 
  text1:{
    fontSize: '4.8rem', 
    fontFamily: 'Josefin Sans', 
    padding: theme.spacing(2),
  },
  text2:{
    fontSize: '3rem', 
    fontFamily: 'Josefin Sans', 
    margin: '25px', 
    padding: theme.spacing(1),
  }
}));

export default function LandingPageAppInfo(props){
  const classes = useStyles();

  return(
    <div>
      <center>
      <br/>
      <Fade in timeout={{enter: 4500}}>
        <h1 className={classes.text1}> You deserve to be seen. </h1>
      </Fade>
      <Fade in timeout={{enter: 15000}}>
      <span className={classes.text2}> See what other Black women are saying about tech companies. </span>
      </Fade>
      <br/> <br/> <br /> <br/> <br/> <br /> 
      {/* <h5 style={{marginLeft: '-50rem'}}> Start your search </h5> */}
        <AppBar position="static" className={classes.appBar}>
          <CompaniesAutocomplete {...props}/> 
        </AppBar>
      </center>
    </div>
  )
}