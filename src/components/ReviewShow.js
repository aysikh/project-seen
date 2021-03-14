import React, { useState, useEffect } from 'react'
import { withStyles, makeStyles } from '@material-ui/core/styles';
import CompanyCard from './CompanyCard'

import LinearProgress from '@material-ui/core/LinearProgress';

const REVIEW_URL = "http://localhost:3000/reviews/"

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    height: '10%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}));

export default function ReviewShow(){
  const classes = useStyles(); 

  const [reviews, setReviews] = useState(null);

  useEffect(() => {
    console.log(name)
    console.log("hello")
    fetch(REVIEW_URL + `${name}`, {
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }
    })
      .then((res) => res.json())
      .then((response) => {
        // setReviews(response.reviews);
        console.log(response.reviews)
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
        {company ? <CompanyCard comp={company} key={company.id} /> : <LinearProgress className={classes.root}/>  }
    </div>
  )

}