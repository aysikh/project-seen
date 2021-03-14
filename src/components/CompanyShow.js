import React, { useState, useEffect } from 'react'
import { withStyles, makeStyles } from '@material-ui/core/styles';
import CompanyCard from './CompanyCard'

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
}));

export default function ComponentShow({match}){
  const classes = useStyles(); 

  const {
    params: { name },
  } = match;

  const [company, setCompany] = useState(null);

  useEffect(() => {
    console.log(name)
    console.log("hello")
    fetch(COMPANY_URL + `${name}`, {
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }
    })
      .then((res) => res.json())
      .then((response) => {
        setCompany(response.company);
        console.log(response.company)
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
        {company ? <CompanyCard comp={company} key={company.id} /> : <LinearProgress className={classes.root}/>  }
    </div>
  )

}