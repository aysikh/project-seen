import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import ReviewCard from './ReviewCard'
import Paper from '@material-ui/core/Paper';

const URL = "http://localhost:3000/company/"

const useStyles = makeStyles((theme) => ({
  total: {
    // width: '20%', 
    // height: '10%',
    fontSize: '30px', 
    fontFamily: 'Josefine Sans', 
    padding: '20px',
  }
}))

export default function ReviewShow(props){
  var companyName = window.location.href.split('/');
  const classes = useStyles(); 

  const [reviews, setReviews] = useState([]);
  const [review, setReview] = useState([]);

  const getReviews = () => {
    fetch(URL + companyName[4] + "/reviews")
    .then(rsp => rsp.json())
    .then(reviews => setReviews(reviews))
  }

  useEffect(()=> {
    getReviews();
  }, [])

  // const updateUseful = (e) => {
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

  const getCompanyReviews = (e) => {
    let r = []
    if(reviews){
      for(let i = 0; i < reviews.length; i ++){
        r.push(<ReviewCard 
          // updateUseful={updateUseful}
          // updateNotUseful={updateNotUseful}
            {...props}

            review={reviews[i]}
            key={reviews[i].id} 
          /> )}
        return r
      }
      else {
        return ""
      }
  }

  return (
    <div>
      {/* <center> */}
        {/* <span className={classes.total}> Total # of Reviews: {reviews.length} </span> */}
      {/* </center> */}
      {getCompanyReviews()}
    </div>
  )
}