import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import IconButton from "@material-ui/core/IconButton";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import ThumbDownIcon from "@material-ui/icons/ThumbDown";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  whole: {
    backgroundColor: "#DBBA9C",
    height: "auto",
    width: "45%"
  },
  rating: {
    fontFamily: "Josefin Sans",
    height: "15rem",
    width: "auto",
    margin: "1rem",
    border: "3px solid #000",
    borderRadius: '20px', 
    overflow: 'scroll',
    overflowY: 'hidden',
  },
  content: {
    fontFamily: "Josefin Sans",
    height: "15rem",
    width: "auto",
    margin: "1rem",
    padding: '30px',
    border: "3px solid #000",
    borderRadius: '20px',
    overflow: 'scroll',
    overflowY: 'hidden',
  },
  topInfo: {
    fontFamily: "Josefin Sans",
    backgroundColor: theme.palette.background.rating,
    padding: theme.spacing(2, 4),
    display: "absolute",
    height: "auto",
    width: "auto"
  },
  // user: {
  //   fontFamily: "Cardo",
  //   backgroundColor: "black",
  //   border: "1px solid #000",
  //   boxShadow: theme.shadows[5]
  // },
  info: {
    fontFamily: "Cardo",
    display: "absolute"
  }
}));

export default function UserReviewCard(props) {
  const classes = useStyles();

  return (
    
    <Grid container className={classes.root} spacing={2}>
      
      <Grid item xs={12}>
        <div className={classes.whole} id="review-container">
          <div id="review-info" className={classes.topInfo}>
            {/* image for review or icon for the review?  */}
            {/* gotta insert the date of the review  */}
            <span style={{ fontSize: "2.5rem" }}>{props.review.title} </span>
            <br />
            <span style={{ fontSize: "1.2rem" }}>{props.review.position}</span>
          </div>
          <div>
            <Grid container justify="center">
              <Grid id="rating">
                <Paper className={classes.rating}>
                  <br />
                  <br />
                  <Grid container>
                    <Grid item xs={2} style={{ marginLeft: "15%" }}>
                      <span style={{fontSize: '25px'}}>{props.review.diversity}</span>
                    </Grid>
                    <Grid item xs={6}>
                      <span style={{ fontSize: '22px' }}>
                        Diversity in Organization
                      </span>{" "}
                      <br />
                    </Grid>
                    <Grid item xs={2} style={{ marginLeft: "15%" }}>
                      <span style={{fontSize: '25px'}}>{props.review.leadership}</span>
                    </Grid>
                    <Grid item xs={6}>
                      <span style={{ fontSize: '22px' }}>
                        Diversity in Leadership
                      </span>{" "}
                      <br />
                    </Grid>
                    <Grid item xs={2} style={{ marginLeft: "15%" }}>
                      <span style={{fontSize: '25px'}}>{props.review.worklife}</span>
                    </Grid>
                    <Grid item xs={6}>
                      <span style={{ fontSize: '22px' }}>
                        Work/Life Balance
                      </span>{" "}
                      <br />
                    </Grid>
                    <Grid item xs={2} style={{ marginLeft: "15%" }}>
                      <span style={{fontSize: '25px'}}>{props.review.inclusiveness}</span>
                    </Grid>
                    <Grid item xs={6}>
                      <span style={{ fontSize: '22px' }}>Inclusiveness</span>{" "}
                      <br />
                    </Grid>
                    <Grid item xs={2} style={{ marginLeft: "15%" }}>
                      <span style={{fontSize: '25px'}}>{props.review.benefits}</span>
                    </Grid>
                    <Grid item xs={6}>
                      <span style={{ fontSize: '22px' }}>
                        Benefits At Company
                      </span>{" "}
                      <br />
                    </Grid>
                    <Grid item xs={2} style={{ marginLeft: "15%" }}>
                      <span style={{fontSize: '25px'}}>{props.review.recommendation}</span>
                    </Grid>
                    <Grid item xs={6}>
                      <span style={{ fontSize: '22px' }}>
                        Recommend to Friend
                      </span>
                    </Grid>
                  </Grid>
                </Paper>
              </Grid>
              <Grid item xs={12}> 
                <Paper className={classes.content}> 
                    <span style={{fontSize: '20px', marginLeft: '30px'}}> 
                      {props.review.content}
                    </span>
                </Paper> 
              </Grid> 
              
              
              {/* <Grid xs={5} style={{ marginTop: "-10px" }}>
                <center>
                  <span> count here </span>
                  <IconButton>
                    <ThumbDownIcon
                      style={{ fontSize: "2rem", padding: "1px" }}
                    />
                  </IconButton>
                  <IconButton>
                    <ThumbUpIcon style={{ fontSize: "2rem", padding: "1px" }} />
                  </IconButton>
                  <span> count here </span>
                </center>
              </Grid> */}
            </Grid>
          </div>
        </div>
      </Grid>
    </Grid>
  );
}
