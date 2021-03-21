import React, { useState, useEffect } from 'react'
import { withStyles, makeStyles } from '@material-ui/core/styles';
import ReviewCard from './ReviewCard'

import LinearProgress from '@material-ui/core/LinearProgress';

const URL = "http://localhost:3000/company/"

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    height: '10%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}));

export default function ReviewShow(props){
  console.log(props)
  const classes = useStyles(); 
  // var url = window.location.href; 
  var hello = window.location.href.split('/');
  console.log(hello)
  // if there is only 4 in array, get all companies
  // if there 4+, you know 4th position is a company

  const [reviews, setReviews] = useState([]);
  // const [singleReview, setSingleReview] = useState([])

  const getReviews = () => {
    fetch(URL + hello[4] + "/reviews")
    .then(rsp => rsp.json())
    .then(reviews => setReviews(reviews))
    // console.log(reviews)
  }

  useEffect(()=> {
    getReviews();
  }, [])

  const updateUseful = (e) => {
    // console.log(e)
    // fetch(REVIEW_URL + review.id), {
    //   method: "PATCH", 
    //   headers: {
    //     "Content-Type": "application/json"
    //   }, 
    //   body: JSON.stringify({
    //     isUseful: review.isUseful + 1 
    //   })
    // }
    // .then(res => res.json())
    // .then(updatedReview => {
    //   setSingleReview(updatedReview)
    //   console.log(updatedReview)
    // })
  }


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

    // const Map = () => {
    //     // console.log(reviews)
    //     let r = []
    //     // debugger
    //     if(reviews){reviews.forEach(review => r.push(
    //       <ReviewCard 
    //         updateUseful={updateUseful}
    //         // updateNotUseful={updateNotUseful}
    //         review={review} 
    //         key={review.id} 
    //       /> )) 
    //       console.log(r)
    //       return r }
    //     else{
      //       return ""
      //     }
      
      // }
      
      const Testing = () => {
        console.log(reviews)
      let r = []
      // debugger
      if(reviews){
        for(let i = 0; i < reviews.length; i ++){

          r.push(<ReviewCard 
          // updateUseful={updateUseful}
          // updateNotUseful={updateNotUseful}
            review={reviews[i]}
            key={reviews[i].id} 
          /> )}
          console.log(r)
          return r}
        else{
          return ""
        }
      
    }


  return (
    <div>
      {Testing()}
    </div>
  )
}