import React from 'react'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  }, 
  welcome: {
    fontSize: '4.8rem', 
    fontFamily: 'Josefin Sans', 
    marginTop: '50px', 
    // padding: theme.spacing(2),
  },
}));
export default function ProfileShow(props){
  const classes = useStyles(); 

  console.log(props.userLoggedIn.user)
  console.log(props.userLoggedIn.reviews)
  return(
    <div>
      <center> 
        { props.userLoggedIn ? 
        <div>
          <h1 className={classes.welcome}>Welcome back, {props.userLoggedIn.user.firstname}</h1>
          <h1> Here are a list of all the reviews you've written: </h1> 
           {props.userLoggedIn.reviews.map(review => 
            review.title)} 
        </div>
      : 
      null
      }
      </center>
    </div>
  )
}