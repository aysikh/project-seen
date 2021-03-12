import React, { useState, useEffect } from 'react'
import { withStyles } from '@material-ui/core/styles';
import CompanyCard from './CompanyCard'

const COMPANY_URL = "http://localhost:3000/companies/"

export default function ComponentShow({match}){

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
        {company ? <CompanyCard comp={company} key={company.id} /> : <div>didn't work</div> }
    </div>
  )

}