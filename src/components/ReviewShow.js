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
  const [singleReview, setSingleReview] = useState([])

  const getReviews = () => {
    fetch(REVIEW_URL)
    .then(rsp => rsp.json())
    .then(reviews => setReviews(reviews))
  }

  useEffect(()=> {
    getReviews();
  }, [])

  // const updateUseful = (review) => {
  //   console.log(review)
  //   fetch(REVIEW_URL + review.id), {
  //     method: "PATCH", 
  //     headers: {
  //       "Content-Type": "application/json"
  //     }, 
  //     body: JSON.stringify({
  //       isUseful: review.isUseful + 1 
  //     })
  //   }
  //   .then(res => res.json())
  //   .then(updatedReview => {
  //     setSingleReview(updatedReview)
  //     console.log(updatedReview)
  //   })
  // }


  // const updateNotUseful = (review) => {
  //   console.log(review)
  //   fetch(REVIEW_URL + review.id), {
  //     method: "PATCH", 
  //     headers: {
  //       'Content-Type': 'application/json',
  //       'Accept': 'application/json'
  //     }, 
  //     body: JSON.stringify({
  //       isNotUseful: review.isNotUseful + 1 
  //     })
  //   }
  //   .then(res => res.json())
  //   .then(updatedReview => {
  //     setSingleReview(updatedReview)
  //     console.log(updatedReview)
  //   })
  // }

  const Map = () => {
      console.log(reviews)
      let r = []
      reviews.forEach(review => r.push(<ReviewCard 
        // updateUseful={updateUseful}
        // updateNotUseful={updateNotUseful}
        review={review} 
        key={review.id} 
        /> ))
      console.log(r)
      return r
  }

  return (
    <div>
      {Map()}
    </div>
  )
}