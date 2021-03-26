import React, { useState, useEffect } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import LandingPageContainer from './containers/LandingPageContainer';
import LogInContainer from './containers/LogInContainer';
import SignUpContainer from './containers/SignUpContainer';
import NewReviewForm from './components/NewReviewForm'
import CompanyShow from './components/CompanyShow'
import ReviewShow from './components/ReviewShow'
import NavBar from './components/NavBar'
import ProfileShow from './containers/ProfileShow'

import LinearProgress from '@material-ui/core/LinearProgress';


const COMPANY_URL = "http://localhost:3000/companies"

export default function App({history}) {
  const [companies, setCompanies] = useState([]);
  const [isLoggedIn, setLoggedIn ] = useState(false)
  const [userLoggedIn, setUserLoggedIn] = useState('')
  const [token, setToken] = useState('');

  const getCompanies = () => {
    fetch(COMPANY_URL)
    .then(rsp => rsp.json())
    .then(companies => setCompanies(companies))
  }

  const checkLogin = () => {
    if(localStorage.getItem('token')){ 
      setToken(localStorage.getItem('token'))
      fetch('http://localhost:3000/user/show', {
        method: "GET", 
        headers: { 
          'Content-Type': 'application/json', 
          Authorization: `bearer ${localStorage.getItem('token')}`
      }
      })
      .then(response => response.json())
      .then(data => {
        console.log(data)
        setUserLoggedIn(data)
        setLoggedIn(true)
      })
    }
  }

  useEffect(()=>{
    getCompanies()
    checkLogin()
  }, [])

  return(
    <div>
      <Router>
        <NavBar 
        isLoggedIn={isLoggedIn} 
        setLoggedIn={setLoggedIn}
        setUserLoggedIn={setUserLoggedIn}
        setToken={setToken}
        token={token}
        /> 
          <div >
            <Switch>
              <div>
                <Route exact path="/" render={(props) => (
                  <LandingPageContainer
                  {...props}
                  companies={companies}
                  /> 
                  )} />
                <Route exact path="/sign-up" render={(props) => (
                  <SignUpContainer
                  {...props}
                  setLoggedIn={setLoggedIn}
                  setUserLoggedIn={setUserLoggedIn}
                  setToken={setToken}
                  />
                )} /> 
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
                token ? 
                  <NewReviewForm
                  {...props}
                  userLoggedIn={userLoggedIn}
                  companies={companies}
                  /> 
                  :
                  <Redirect to='/login' /> 
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
