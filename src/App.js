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

const COMPANY_URL = "https://project-seen-backend.herokuapp.com/companies"

export default function App({history}) {
  const [companies, setCompanies] = useState([]);
  const [isLoggedIn, setLoggedIn ] = useState(false)
  const [userLoggedIn, setUserLoggedIn] = useState('')

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
                  /> 
                  )} />
                <Route exact path="/company/:name/reviews" render={(props) => (
                  <ReviewShow
                    {...props}
                    companies={companies} 
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
