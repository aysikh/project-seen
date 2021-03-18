import React from 'react';
// import { matchPath } from "react-router";
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Rating from '@material-ui/lab/Rating';
import BusinessIcon from '@material-ui/icons/Business';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import PeopleIcon from '@material-ui/icons/People';
import DemographicChart from './DemographicChart'
import { Link } from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    fontFamily: 'Josefin Sans',
    height: '25rem',
    width: '28rem',
    margin: '2rem',
    boxShadow: theme.shadows[5],
        padding: theme.spacing(4, 4),
  },
  topInfo: {
    fontFamily: 'Josefin Sans',
    backgroundColor: theme.palette.background.paper,
    border: '1px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4),
    display: "absolute",
    left: "20%",
    height: "10%",
    width: "auto"
  },
  description: {
    fontFamily: 'Cardo',
    backgroundColor: 'black',
    border: '1px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4),
    display: "absolute",
    left: "20%",
    height: "10%",
    width: "auto"
  },
  stats: {
    fontFamily: 'Cardo', 
    display: "absolute",
  }
}))

export default function CompanyCard(props){
  const classes = useStyles();

  return(
    <div className="company-info-container">
      <div id="company-name" className={classes.topInfo}>
        <img src={props.comp.logo} style={{height: '6rem', marginTop: '.5rem', marginRight: '.5rem'}}/> 
        <span style={{fontSize: '3rem'}}>{props.comp.name}</span>
        <br /><br />
        <LocationOnIcon /> <span style={{fontSize: '1.25rem'}}>{props.comp.location}</span>
      </div>
      {/* <div className={classes.description}>
        <h2 style={{color: 'white'}}>{props.comp.description}</h2>
      </div> */}
      <div id="company-stats" className={classes.stats}>
        <Grid container className={classes.root} spacing={2}>
          <Grid item xs={12}>
            <Grid container justify="center">
                <Grid>
                  <Paper className={classes.paper} >
                    <h2>{props.comp.description}</h2>
                  </Paper>
                </Grid>
                <Grid>
                  <Paper className={classes.paper} >
                    <center> 
                      <PeopleIcon style={{fontSize: '10rem', color: 'gray'}}/>
                      <h1>{props.comp.size} employees</h1>
                    </center>
                  </Paper>
                </Grid>
                <Grid>
                  <Paper className={classes.paper} >
                    <center>
                    <br/><br/>
                    <span style={{fontSize:'3rem'}}>DEI Rating:</span>
                    <Rating 
                    name="read-only" 
                    style={{color: '#D2C7E0', fontSize: '5rem', marginTop: '3rem'}} 
                    precision={0.5} 
                    value={4.5} 
                    readOnly />
                      <br /> 
                      <span style={{fontSize: '5.5rem'}}>4.5</span>
                      <br /> 
                      <Button component={Link} to="/new-review" variant="contained" style={{backgroundColor: "#D2C7E0"}}>  
                        Write a Review
                      </Button>
                    </center>
                  </Paper>
                </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
    </div>
  )
}