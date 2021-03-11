import React, { useState, useEffect } from 'react'
import { withStyles } from '@material-ui/core/styles';
import CompanyCard from './CompanyCard'

const COMPANY_URL = "http://localhost:3000/companies"

export default function ComponentShow(){
  
  const [company, setCompany] = useState([]);
  // const [singleCompany, setSingleCompany] = useState([])

  const getCompanies = () => {
    fetch(COMPANY_URL)
    .then(rsp => rsp.json())
    .then(companies => setCompany(companies))
  }
  useEffect(()=>{
    getCompanies();
  }, [])

  // const handleCompany = (event, comp) =>{
  //   setSingleCompany(comp)
  // }

  return (
    <div>
      { company.map(comp => {
        // console.log(comp)
        return <CompanyCard comp={comp} key={comp.id} />
      })}
    </div>
  )

}