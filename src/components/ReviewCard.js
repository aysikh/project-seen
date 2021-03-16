import React from 'react';
// import { matchPath } from "react-router";
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import StarsIcon from '@material-ui/icons/Stars';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';
import PersonIcon from '@material-ui/icons/Person';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  whole: {
    border: '3px solid', 
    boxShadow: theme.shadows[5], 
    backgroundColor: '#D2C7E0',
    height: '30rem',
    width: '45rem'
  },
  rating: {
    fontFamily: 'Josefin Sans',
    height: '15rem',
    width: '15rem',
    margin: '1rem'
  },
  content: {
    fontFamily: 'Josefin Sans', 
    height: '15rem', 
    width: '25rem', 
    margin: '1rem'
  },
  topInfo: {
    fontFamily: 'Josefin Sans',
    backgroundColor: theme.palette.background.rating,
    border: '1px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4),
    display: "absolute",
    // left: "20%",
    height: "3.5rem",
    width: "auto"
  },
  user: {
    fontFamily: 'Cardo',
    backgroundColor: 'black',
    border: '1px solid #000',
    boxShadow: theme.shadows[5]
  },
  info: {
    fontFamily: 'Cardo', 
    display: "absolute",
  }
}))

export default function ReviewCard(props){
  const classes = useStyles();

  return(
    <Grid container className={classes.root} spacing={2}>
      <Grid item xs={12}>
      <div className={classes.whole} id="review-container">
        <div id="review-info" className={classes.topInfo}>
          {/* image for review or icon for the review?  */}
          {/* gotta insert the date of the review  */}
          <span style={{fontSize: '2.5rem'}}>{props.review.title} </span>
          <br />
          <span style={{fontSize: '1rem'}}>{props.review.position}</span>
        </div>
        <div className={classes.user}>
          <h4 style={{color: 'white', marginLeft: '20px'}}><PersonIcon /> BY ANONYMOUS USER</h4>
        </div>
        <div>
          <Grid container justify="center">
              <Grid id="rating">
                <Paper className={classes.rating} >
                  <StarsIcon style={{fontSize:'2.5rem'}}/> 
                  <br/><br/>
                  <Grid container>
                    <Grid item xs={2} style={{marginLeft: '15px'}}> 
                        {props.review.diversity}
                    </Grid>
                    <Grid item xs={8}>
                  <span style={{fontSize:'15px'}}>Diversity in Organization</span> <br/>
                    </Grid>
                    <Grid item xs={2} style={{marginLeft: '15px'}}> 
                        {props.review.leadership}
                    </Grid>
                    <Grid item xs={8}>
                    <span style={{fontSize:'15px'}}>Diversity in Leadership</span> <br /> 
                    </Grid>
                    <Grid item xs={2} style={{marginLeft: '15px'}}> 
                        {props.review.worklife}
                    </Grid>
                    <Grid item xs={8}>
                    <span style={{fontSize:'15px'}}>Work/Life Balance</span> <br /> 
                    </Grid>
                    <Grid item xs={2} style={{marginLeft: '15px'}}> 
                        {props.review.inclusiveness}
                    </Grid>
                    <Grid item xs={8}>
                    <span style={{fontSize:'15px'}}>Inclusiveness</span> <br /> 
                    </Grid>
                    <Grid item xs={2} style={{marginLeft: '15px'}}> 
                        {props.review.benefits}
                    </Grid>
                    <Grid item xs={8}>
                    <span style={{fontSize:'15px'}}>Benefits At Company</span> <br />
                    </Grid>
                    <Grid item xs={2} style={{marginLeft: '15px'}}> 
                        {props.review.recommendation}
                    </Grid>
                    <Grid item xs={8}>
                    <span style={{fontSize:'15px'}}>Recommend to Friend</span>
                    </Grid>
                  </Grid>
                </Paper>
              </Grid>
              <Grid id="content">
                <Paper className={classes.content} >
                  <center> 
                    <br /> 
                  <span style={{fontSize:'22px'}}>{props.review.content}</span>
                  </center>
                </Paper>
              </Grid>
            <Grid xs={5} style={{marginTop: '-10px'}}> 
              <center>
                <span> {props.review.isNotUseful} </span>
                  <IconButton>
                    <ThumbDownIcon style={{fontSize: '2rem', padding: '1px'}}/>
                  </IconButton> 
                  <IconButton>
                    <ThumbUpIcon style={{fontSize: '2rem', padding: '1px'}}/>
                  </IconButton> 
                <span> {props.review.isUseful} </span>
              </center>
            </Grid> 
          </Grid>
        </div>
      </div>
      </Grid>
    </Grid>
  )
}