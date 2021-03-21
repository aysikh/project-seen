import React, { useState, useEffect } from 'react'
import { Switch, Route } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
// import { makeStyles } from '@material-ui/core/styles';
import LandingPageContainer from './containers/LandingPageContainer';
import LogInContainer from './containers/LogInContainer';
import SignUpContainer from './containers/SignUpContainer';
import NewReviewForm from './components/NewReviewForm'
import CompanyShow from './components/CompanyShow'
import ReviewShow from './components/ReviewShow'
import NavBar from './components/NavBar'
import ProfileShow from './containers/ProfileShow'

const COMPANY_URL = "http://localhost:3000/companies"

// const useStyles = makeStyles(() => ({
//   bg: {
//     minHeight: '100vh',
//   },
// }));

export default function App({history}) {
  // const classes = useStyles();
  const [companies, setCompanies] = useState([]);
  const [isLoggedIn, setLoggedIn ] = useState(false)
  // const [currentCompany, setCurrentCompany] = useState("")

  // sessionStorage.setItem('email', 'value');

  const getCompanies = () => {
    fetch(COMPANY_URL)
    .then(rsp => rsp.json())
    .then(companies => setCompanies(companies))
  }
  useEffect(()=>{
    getCompanies();
  }, [])

  // console.log(companies)

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
                  />
                )} /> 
                <Route exact path="/company/:name" render={(props) => (
                  <CompanyShow 
                    {...props}
                    companies={companies}
                    // setCurrentCompany={setCurrentCompany}
                  /> 
                  )} />
                <Route exact path="/company/:name/reviews" render={(props) => (
                  <ReviewShow
                  {...props}
                  companies={companies} 
                  // currentCompany={currentCompany}
                  /> 
                )} /> 
                <Route path='/new-review' component={NewReviewForm} /> 
                <Route path="/profile" component={ProfileShow} />
              </div>
            </Switch>
          </div>
      </Router>
    </div>
  )
}
