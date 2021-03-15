import React, { useState, useEffect } from 'react'
import { withStyles, makeStyles } from '@material-ui/core/styles';
import ReviewCard from './ReviewCard'

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

  const [reviews, setReviews] = useState([]);

  const getReviews = () => {
    fetch(REVIEW_URL)
    .then(rsp => rsp.json())
    .then(reviews => setReviews(reviews))
  }

  useEffect(()=> {
    getReviews();
  }, [])

  const Map = () => {
      console.log(reviews)
      let r = []
      reviews.forEach(review => r.push(<ReviewCard review={review} key={review.id} /> ))
      console.log(r)
      return r
  }

  return (
    <div>
      {Map()}
    </div>
  )
}