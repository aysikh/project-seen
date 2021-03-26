import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import CompanyCard from './CompanyCard'
import AppBar from '@material-ui/core/AppBar';
import BG from '../assets/purple.png'
import LinearProgress from '@material-ui/core/LinearProgress';
import CompaniesAutocomplete from './CompaniesAutocomplete'

const COMPANIES_URL = "http://localhost:3000/companies/"
const URL = "http://localhost:3000/company/"

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    height: '10%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
  bg: {
    // width: '100%', 
    // minHeight: '100%',
    backgroundImage: `url(${BG})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: '110% 85%',
    backgroundAttachment: 'fixed',
    backgroundPosition: 'center',
    overflowX: 'hidden'
  }
}));

export default function CompanyShow(props){
  const classes = useStyles(); 
  const [company, setCompany] = useState(null);
  const [reviews, setReviews] = useState([]);
  
  var companyName = window.location.href.split('/');

  // console.log(companyName[4].toLowerCase()) 
  const {
    params: { name },
  } = props.match;

  const getReviews = () => {
    fetch(URL + companyName[4].toLowerCase() + "/reviews")
    .then(rsp => rsp.json())
    .then(reviews => setReviews(reviews))
    // console.log(reviews)
  }

  useEffect(()=> {
    getReviews();
  }, [name])

  useEffect(() => {
    fetch(COMPANIES_URL + `${name}`, {
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }
    })
      .then((res) => res.json())
      .then((response) => {
        setCompany(response.company);
      })
      .catch((error) => console.log(error));
  }, [name]);

  const getDiversityScore = () => {
    let total = 0; 
    if(reviews.length >= 1){
      for( let i = 0; i < reviews.length; i++){
        total += reviews[i].diversity
      }
    }
    else{
      return 0
    }
    let average = total / reviews.length
    let rounded = Math.round(average * 10) / 10
    return rounded
  }

  const getLeadershipScore = () => {
    let total = 0; 
    if(reviews.length >= 1){
      for( let i = 0; i < reviews.length; i++){
        total += reviews[i].leadership
      }
    }
    else{
      return 0
    }
    let average = total / reviews.length
    let rounded = Math.round(average * 10) / 10
    return rounded
  }

  const getWorklifeScore = () => {
    let total = 0; 
    if(reviews.length >= 1){
      for( let i = 0; i < reviews.length; i++){
        total += reviews[i].worklife
      }
    }
    else{
      return 0
    }
    let average = total / reviews.length
    let rounded = Math.round(average * 10) / 10
    return rounded
  }

  const getInclusivenessScore = () => {
    let total = 0; 
    if(reviews.length >= 1){
      for( let i = 0; i < reviews.length; i++){
        total += reviews[i].inclusiveness
      }
    }
    else{
      return 0
    }
    let average = total / reviews.length
    let rounded = Math.round(average * 10) / 10
    return rounded
  }

  const getBenefitsScore = () => {
    let total = 0; 
    if(reviews.length >= 1){
      for( let i = 0; i < reviews.length; i++){
        total += reviews[i].benefits
      }
    }
    else{
      return 0
    }
    let average = total / reviews.length
    let rounded = Math.round(average * 10) / 10
    return rounded
  }

  const getRecommendationScore = () => {
    let total = 0; 
    if(reviews.length >= 1){
      for( let i = 0; i < reviews.length; i++){
        total += reviews[i].recommendation
      }
    }
    else{
      return 0
    }
    let average = total / reviews.length
    let rounded = Math.round(average * 10) / 10
    return rounded
  }

  const getTotalAverage = () => {
    let total = getDiversityScore() + getLeadershipScore() + getWorklifeScore() + getInclusivenessScore() + getBenefitsScore() + getRecommendationScore() 
    if(total > 0){
      let average = total / 6 
      let rounded = Math.round(average * 10) / 10
      return rounded 
    }
    else{
      return "No Reviews"
    }
  }

  return (
    <div className={classes.bg}>
      <center>
        <br/> <br/>
        <AppBar style={{backgroundColor: 'white', width: '40rem', position: 'relative'}}>
          <CompaniesAutocomplete {...props} /> 
        </AppBar>

    </center>
    <br/> <br/>
        {company ? <CompanyCard 
          {...props} 
          comp={company} 
          key={company.id} 
          getTotalAverage={getTotalAverage()}
          getDiversityScore={getDiversityScore()}
          getLeadershipScore={getLeadershipScore()}
          getInclusivenessScore={getInclusivenessScore()}
          getWorklifeScore={getWorklifeScore()}
          getBenefitsScore={getBenefitsScore()}
          getRecommendationScore={getRecommendationScore()}
        /> 
          : <LinearProgress 
          className={classes.root}
          />  }
    </div>
  )

}