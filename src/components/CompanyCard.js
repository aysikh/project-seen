import React from 'react';
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Rating from '@material-ui/lab/Rating';
import Divider from '@material-ui/core/Divider';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import PeopleOutlineIcon from '@material-ui/icons/PeopleOutline';
import BusinessIcon from '@material-ui/icons/Business';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  ratingBox: {
    fontFamily: 'Josefin Sans',
    height: '80%',
    width: '23rem',
    padding: '15px',
    borderRadius: '5px',
    marginTop: '30px',
  },
  about: {
    fontFamily: 'Josefin Sans',
    height: '81%',
    width: '100%',
    margin: '2rem',
    padding: theme.spacing(4, 4),
  },
  topInfo: {
    fontFamily: 'Josefin Sans',
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    borderRadius: '5px',
    // boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4),
    display: "absolute",
    left: "20%",
    height: "10%",
    width: "auto"
  },
}))

export default function CompanyCard(props){
  const classes = useStyles();

  return(
    <div className="company-info-container">
      <div id="company-name" className={classes.topInfo}>
        <img src={props.comp.logo} alt="logo" style={{height: '6.5rem', marginTop: '.5rem', marginRight: '.5rem'}}/> 
        <span style={{fontSize: '3.5rem'}}>{props.comp.name}</span>
        <br /><br />
        <Grid container justify="center" >
            <Grid item xs={3} style={{marginLeft: '-20%'}}>
              <span style={{fontSize: '20px'}}>Headquarters: </span>
                <br/> 
                <LocationOnIcon style={{fontSize:'1rem'}}/> 
              <span style={{fontSize: '15px'}}> {props.comp.location}</span>
            </Grid>
            <Grid item xs={3}>
                <span style={{fontSize: '20px'}}> Number of Employees </span>
                <br/>
                <PeopleOutlineIcon style={{fontSize:'1rem'}}/>
                <span style={{fontSize: '15px'}} > {props.comp.size}</span>
                </Grid>
                <Grid item xs={3}>
                  <span style={{fontSize: '20px'}}>Industry: </span>
                <br/> 
                <BusinessIcon style={{fontSize:'1rem'}}/>
                <span style={{fontSize: '15px'}}> {props.comp.industry} </span>
            </Grid>
        </Grid>
      </div>

      <div id="company-desciption">
      <Grid container spacing={2} justify="center" style={{marginLeft:'5%'}}>
      <Grid item xs={12}>
        <Grid container justify="center" >
            <Grid item xs={6}>
            <Paper className={classes.about} >
                <h2>About the company</h2>
                <Divider variant='center'/>
                <br/> <br/>
                <span> {props.comp.description} </span>
              </Paper>
            </Grid>
  

        <Grid item xs={6}>
        <Grid container justify="center">
          <Paper className={classes.ratingBox}>
                <Grid container item xs={12} style={{padding: '10px', marginBottom:'30px'}}>
                  <Grid item xs={12} >
                    <center>
                    <span style={{fontSize: '20px', padding: '3px', margin: '10px'}}>Average Employee Rating:  </span>
                    <br/><br/>
                    <Rating
                        name="simple-controlled"
                        value={props.getTotalAverage}/>
                    </center>
                  </Grid>
                  <br/> <br/> <br/> 
                  <Grid item xs={12} > 
                    <center><span style={{fontSize:'70px'}}> {props.getTotalAverage} </span></center>
                <Divider variant='center'/>
                  </Grid>
                </Grid>
            <Grid item>
                <Grid container item xs={12} style={{margin: '10px'}} justify='center'>
                  <Grid item xs={2}>
                    <span style={{fontSize: '20px', padding: '3px'}}>{props.getLeadershipScore} </span>
                  </Grid>
                  <Divider orientation="vertical" flexItem />
                  <Grid item xs={6} style={{marginLeft: '25px'}}>
                  <span style={{fontSize: '18px', fontFamily: 'Cardo'}}>Diversity in Leadership</span>
                  </Grid>
                </Grid>
                <Grid container item xs={12} style={{margin: '10px'}} justify='center'>
                  <Grid item xs={2} >
                    <span style={{fontSize: '20px', padding: '3px'}}>{props.getDiversityScore} </span>
                  </Grid>
                  <Divider orientation="vertical" flexItem />
                  <Grid item xs={6} style={{marginLeft: '25px'}}>
                  <span style={{fontSize: '18px', fontFamily: 'Cardo'}}>Diversity in Organization</span>
                  </Grid>
                </Grid>
                <Grid container item xs={12} style={{margin: '10px'}} justify='center'>
                  <Grid item xs={2} >
                    <span style={{fontSize: '20px', padding: '3px'}}>{props.getWorklifeScore}</span>
                  </Grid>
                  <Divider orientation="vertical" flexItem />
                  <Grid item xs={6} style={{marginLeft: '25px'}}>
                  <span style={{fontSize: '18px', fontFamily: 'Cardo'}}>Work/Life Balance</span>
                  </Grid>
                </Grid>
                <Grid container item xs={12}style={{margin: '10px'}} justify='center'>
                  <Grid item xs={2} >
                    <span style={{fontSize: '20px', padding: '3px'}}>{props.getInclusivenessScore} </span>
                  </Grid>
                  <Divider orientation="vertical" flexItem />
                  <Grid item xs={6} style={{marginLeft: '25px'}}>
                  <span style={{fontSize: '18px', fontFamily: 'Cardo'}}>Overall Inclusivity</span>
                  </Grid>
                </Grid>
                <Grid container item xs={12} style={{margin: '10px'}} justify='center'>
                  <Grid item xs={2} >
                    <span style={{fontSize: '20px', padding: '3px'}}>{props.getBenefitsScore}</span>
                  </Grid>
                  <Divider orientation="vertical" flexItem />
                  <Grid item xs={6} style={{marginLeft: '25px'}}>
                  <span style={{fontSize: '18px', fontFamily: 'Cardo'}}>Benefits & Resources</span>
                  </Grid>
                </Grid>
                <Grid container item xs={12} style={{margin: '10px'}} justify='center'>
                  <Grid item xs={2} >
                    <span style={{fontSize: '20px', padding: '3px'}}>{props.getRecommendationScore}</span>
                  </Grid>
                  <Divider orientation="vertical" flexItem />
                  <Grid item xs={6} style={{marginLeft: '25px'}}>
                  <span style={{fontSize: '18px', fontFamily: 'Cardo'}}>Employee Net Promotor Score</span>
                  </Grid>
                  <br/> <br/> <br/>
                </Grid>
                <center>
                  <Button component={Link} to="/new-review" variant="contained" style={{backgroundColor: "black", color: 'white', fontFamily:'Cardo', width: '10rem', fontSize: '10px'}}>  
                    Write a Review
                  </Button>
                  <Button component={Link} to={"/company/" + props.comp.name + "/reviews"} variant="contained" style={{fontFamily: 'Cardo', backgroundColor: 'black', color: 'white', marginLeft: '10px', width: '8rem', fontSize: '10px'}}>  
                    View Reviews
                  </Button>
                </center>
                </Grid>
              </Paper>
            </Grid>
          </Grid>

        </Grid>
      </Grid>
    </Grid>
    </div>
  </div>
  )
}