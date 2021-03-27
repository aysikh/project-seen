import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import UserReviewCard from '../components//UserReviewCard'
import BG from '../assets/tan-person-bg.png'
import Paper from '@material-ui/core/Paper';
import Collapse from '@material-ui/core/Collapse';
import Fade from '@material-ui/core/Fade';
import '../styles/Profile.css';

const useStyles = makeStyles((theme) => ({
  welcome: {
    fontSize: '4.8rem', 
    fontFamily: 'Josefin Sans', 

  },
  name:{
    fontSize: '4.8rem', 
    fontFamily: 'Josefin Sans',
    color: '#A16338'
  },
  bg: {
    // width: '100vw', 
    height: 'auto',
    // backgroundColor: '#DBBA9C',
    backgroundImage: `url(${BG})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: '100% 110%',
    backgroundAttachment: 'fixed',
    backgroundPosition: 'top'
  },
  review:{
    fontSize: '2rem', 
    fontFamily: 'Josefin Sans', 
    marginBottom: '20px'
  }
}));

export default function ProfileShow(props){
  const classes = useStyles(); 
  const [checked, setChecked] = useState(false);

  useEffect(() => {
      setChecked(true);
  }, []);

  return(
    <div className={classes.bg}>
        <Fade in timeout={{ enter: 1500}}>
      <center> 
        { props.userLoggedIn ? 
        <div >
          <br /> <br /> 
          <span className={classes.welcome}>Welcome back, </span><span className={classes.name}> {props.userLoggedIn.user.firstname} </span>               

          <br /> <br />
          <span className={classes.review}> Here are a list of all the reviews you've written: </span> 
          <br /> <br /> 
           {props.userLoggedIn.reviews && props.userLoggedIn.reviews.length >= 1 ? 
            props.userLoggedIn.reviews.map(review => 
              <UserReviewCard {...props} review={review}/>
              ) 
            :
            <div>
              <Paper elevation={3} style={{width: '45%', height: '3rem', margin: '20px', padding: '20px', border: '1px solid #000', borderRadius: '10px'}}>
                <span style={{fontSize:'2rem', alignItems: 'center', fontFamily: 'Cardo', }}>
                  You haven't written any yet! 
                </span>
              </Paper>
            </div>
            }

        </div>
      : 
      null
      }
      </center>
            </Fade>
    </div>
  )
}