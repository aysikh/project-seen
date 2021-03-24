import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import UserReviewCard from '../components//UserReviewCard'
import BG from '../assets/tan-person-bg.png'

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  }, 
  welcome: {
    fontSize: '4.8rem', 
    fontFamily: 'Josefin Sans', 
    // padding: theme.spacing(2),
  },
  bg: {
    // width: '100%', 
    // minHeight: '50vh',
    backgroundColor: 'black',
    backgroundImage: `url(${BG})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: '100%, 100%',
    backgroundAttachment: 'fixed',
    backgroundPosition: 'center'
  },
  review:{
    fontSize: '2rem', 
    fontFamily: 'Josefin Sans', 
    marginBottom: '20px'
  }
}));

export default function ProfileShow(props){
  const classes = useStyles(); 

  // console.log(props.userLoggedIn.user)
  // console.log(props.userLoggedIn.reviews)
  return(
    <div className={classes.bg}>
      <center> 
        { props.userLoggedIn ? 
        <div>
          <br /> <br /> 
          <span className={classes.welcome}>Welcome back, {props.userLoggedIn.user.firstname}</span>
          <br /> <br />
          <span className={classes.review}> Here are a list of all the reviews you've written: </span> 
          <br /> <br /> 
           {props.userLoggedIn.reviews.map(review => 
            <UserReviewCard review={review}/>
            )} 
        </div>
      : 
      null
      }
      </center>
    </div>
  )
}