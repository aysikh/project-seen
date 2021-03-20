import React, { useState, useEffect } from 'react'
import { useHistory, Link, NavLink} from "react-router-dom";
import { withStyles, makeStyles } from '@material-ui/core/styles';
import CompanyCard from './CompanyCard'
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import BG from '../assets/bg-2.jpeg'
import LinearProgress from '@material-ui/core/LinearProgress';

const COMPANY_URL = "http://localhost:3000/companies/"

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    height: '10%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
  bg: {
    width: '100%', 
    minHeight: '90vh',
    backgroundImage: `url(${BG})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundAttachment: 'fixed',
  }
}));

export default function ComponentShow({match}){
  const classes = useStyles(); 
  const history = useHistory();
  const [company, setCompany] = useState(null);
  const [comp, setComp] = useState([]);
  const [value, setValue] = React.useState('')

  const {
    params: { name },
  } = match;


  useEffect(() => {
    // console.log(name)
    // console.log("hello")
    fetch(COMPANY_URL + `${name}`, {
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }
    })
      .then((res) => res.json())
      .then((response) => {
        setCompany(response.company);
        // console.log(response)
      })
      .catch((error) => console.log(error));
  }, []);

  // search bar at top 
  const getCompanies = () => {
    fetch(COMPANY_URL)
    .then(rsp => rsp.json())
    .then(companies => setComp(companies))
  }
  useEffect(()=>{
    getCompanies();
  }, [])

  function handleSubmit(e){
    // e.preventDefault();
    console.log(e.name)
    // console.log(value)
    // history.push("company/" + e.name)
    if(e != null){
      <Link to={COMPANY_URL + e.name}></Link> 
    } else {
      return ""
    }
  }

  return (
    <div className={classes.bg}>
      <center>
        <br/> <br/>
        <AppBar style={{backgroundColor: 'white', width: '40rem', position: 'relative'}}>
        <Autocomplete
              id="navbar"
              options={comp}
              value={value}
              onChange={(e, value) => handleSubmit(value)}
              getOptionLabel={(option) => option.name}
              style={{ width: '100%' }}
              renderInput={(params) => <TextField {...params} label="Search for another Company..." variant="outlined" />}
            />
        </AppBar>
          {/* <Button style={{backgroundColor: 'red'}}>
            <NavLink to="/">HOME</NavLink> 
          </Button>  */}
    </center>
    <br/> <br/>
        {company ? <CompanyCard comp={company} key={company.id} /> : <LinearProgress className={classes.root}/>  }
    </div>
  )

}