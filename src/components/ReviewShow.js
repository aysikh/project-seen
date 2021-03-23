import React, { useState, useEffect } from 'react'
// import { makeStyles } from '@material-ui/core/styles';
import ReviewCard from './ReviewCard'


const URL = "http://localhost:3000/company/"


export default function ReviewShow(props){
  var companyName = window.location.href.split('/');
  // if there is only 4 in array, get all companies
  // if there 4+, you know 4th position is a company

  const [reviews, setReviews] = useState([]);

  const getReviews = () => {
    fetch(URL + companyName[4] + "/reviews")
    .then(rsp => rsp.json())
    .then(reviews => setReviews(reviews))
    // console.log(reviews)
  }

  useEffect(()=> {
    getReviews();
  }, [])

  // console.log(reviews[i].diversity) 
  // let array = [];
  
  const getDiversityScore = () => {
    let total = 0; 
    for( let i = 0; i < reviews.length; i++){
      total += reviews[i].diversity
    }
    let average = total / reviews.length
    let rounded = Math.round(average * 10) / 10
    props.setDiversityAverage(rounded)
    return rounded
  }

  const getLeadershipScore = () => {
    let total = 0; 
    for( let i = 0; i < reviews.length; i++){
      total += reviews[i].leadership
    }
    let average = total / reviews.length
    let rounded = Math.round(average * 10) / 10
    props.setLeadershipAverage(rounded)
    return rounded
  }

  const getWorklifeScore = () => {
    let total = 0; 
    for( let i = 0; i < reviews.length; i++){
      total += reviews[i].worklife
    }
    let average = total / reviews.length
    let rounded = Math.round(average * 10) / 10
    props.setWorklifeAverage(rounded)
    return rounded
  }

  const getInclusivenessScore = () => {
    let total = 0; 
    for( let i = 0; i < reviews.length; i++){
      total += reviews[i].inclusiveness
    }
    let average = total / reviews.length
    let rounded = Math.round(average * 10) / 10
    props.setInclusivenessAverage(rounded)
    return rounded
  }

  const getBenefitsScore = () => {
    let total = 0; 
    for( let i = 0; i < reviews.length; i++){
      total += reviews[i].benefits
    }
    let average = total / reviews.length
    let rounded = Math.round(average * 10) / 10
    props.setBenefitsAverage(rounded)
    return rounded
  }

  const getRecommendationScore = () => {
    let total = 0; 
    for( let i = 0; i < reviews.length; i++){
      total += reviews[i].recommendation
    }
    let average = total / reviews.length
    let rounded = Math.round(average * 10) / 10
    props.setRecommendationAverage(rounded)
    return rounded
  }

  const getTotalAverage = () => {
    let total = getDiversityScore() + getLeadershipScore() + getWorklifeScore() + getInclusivenessScore() + getBenefitsScore() + getRecommendationScore() 
    let average = total / 6 
    props.setTotalAverage(average)
    return average 
  }
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

  const getCompanyReviews = () => {
    // console.log(reviews)
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
        return r
      }
      else {
        return ""
      }
  }

  return (
    <div>
      {getCompanyReviews()}
      {/* {getTotalAverage()} */}
    </div>
  )
}