import React, { useState, useEffect } from 'react'
import { Switch, Route } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import LandingPageContainer from './containers/LandingPageContainer';
import LogInContainer from './containers/LogInContainer';
import SignUpContainer from './containers/SignUpContainer';
import NewReviewForm from './components/NewReviewForm'
import CompanyShow from './components/CompanyShow'
import ReviewShow from './components/ReviewShow'
import NavBar from './components/NavBar'
import ProfileShow from './containers/ProfileShow'

const COMPANY_URL = "http://localhost:3000/companies"

export default function App({history}) {

  const [companies, setCompanies] = useState([]);
  const [isLoggedIn, setLoggedIn ] = useState(false)
  const [userLoggedIn, setUserLoggedIn] = useState('')

  const [diversityAverage, setDiversityAverage] = useState(0)
  const [leadershipAverage, setLeadershipAverage] = useState(0)
  const [worklifeAverage, setWorklifeAverage] = useState(0)
  const [inclusivenessAverage, setInclusivenessAverage] = useState(0)
  const [benefitsAverage, setBenefitsAverage] = useState(0)
  const [recommendationAverage, setRecommendationAverage] = useState(0)
  const [totalAverage, setTotalAverage] = useState(0)

  localStorage.getItem("token")
  
  const getCompanies = () => {
    fetch(COMPANY_URL)
    .then(rsp => rsp.json())
    .then(companies => setCompanies(companies))
  }
  useEffect(()=>{
    getCompanies();
  }, [])

  return(
    <div>
      <Router>
        <NavBar isLoggedIn={isLoggedIn} /> 
          <div >
            <Switch>
              <div>
                <Route exact path="/" render={(props) => (
                  <LandingPageContainer
                    {...props}
                    companies={companies}
                  /> 
                )} />
                <Route exact path="/sign-up" component={SignUpContainer} />
                <Route path="/login" render={(props) => (
                  <LogInContainer 
                    {...props} 
                    setLoggedIn={setLoggedIn}
                    setUserLoggedIn={setUserLoggedIn}
                  />
                )} /> 
                <Route exact path="/company/:name" render={(props) => (
                  <CompanyShow 
                    {...props}
                    companies={companies}
                    diversityAverage={diversityAverage}
                    leadershipAverage={leadershipAverage}
                    worklifeAverage={worklifeAverage}
                    inclusivenessAverage={inclusivenessAverage}
                    benefitsAverage={benefitsAverage}
                    recommendationAverage={recommendationAverage}
                    totalAverage={totalAverage}
                  /> 
                  )} />
                <Route exact path="/company/:name/reviews" render={(props) => (
                  <ReviewShow
                    {...props}
                    companies={companies} 
                    setDiversityAverage={setDiversityAverage}
                    setLeadershipAverage={setLeadershipAverage}
                    setWorklifeAverage={setWorklifeAverage}
                    setInclusivenessAverage={setInclusivenessAverage}
                    setBenefitsAverage={setBenefitsAverage}
                    setRecommendationAverage={setRecommendationAverage}
                    setTotalAverage={setTotalAverage}
                  /> 
                )} /> 
                <Route path='/new-review' render={(props) => (
                  <NewReviewForm
                    {...props}
                    userLoggedIn={userLoggedIn}
                    companies={companies}
                  /> 
                )} /> 
                <Route path="/profile" render={(props) => (
                  <ProfileShow
                    {...props}
                    userLoggedIn={userLoggedIn}
                  />
                 )} />
              </div>
            </Switch>
          </div>
      </Router>
    </div>
  )
}
