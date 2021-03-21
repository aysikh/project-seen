import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import CompaniesAutocomplete from './CompaniesAutocomplete'


const useStyles = makeStyles((theme) => ({
  appBar:{
    backgroundColor: 'white',
    width: '60rem',
    marginBottom: '2rem',
    // marginTop: '4rem',
  },
  grow: {
    flexGrow: 1,
  }, 
  text1:{
    fontSize: '4.8rem', 
    fontFamily: 'Josefin Sans', 
    // margin: '50px', 
    padding: theme.spacing(2),
  },
  text2:{
    fontSize: '3.5rem', 
    fontFamily: 'Josefin Sans', 
    margin: '25px', 
    // padding: '100px', 
    padding: theme.spacing(2, 4),
  }
}));

export default function LandingPageAppInfo(props){
  const classes = useStyles();

  return(
    <div>
      <center>
      <br/> <br/> 
      <h1 className={classes.text1}> Every Black woman in Tech deserves to feel seen. </h1>
      <br/> <br/> <br/>
      {/* <span className={classes.text2}> Find out what other Black women are saying about a company.  </span> */}
        <AppBar position="static" className={classes.appBar}>
          <CompaniesAutocomplete {...props}/> 
        </AppBar>
      </center>
    </div>
  )
}