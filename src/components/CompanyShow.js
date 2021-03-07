import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { withStyles } from '@material-ui/core/styles';


const COMPANY_URL = "http://localhost:3000/companies"

export default function ComponentShow(){
  
  const [company, setCompany] = useState([]);
  const [singleCompany, setSingleCompany] = useState([])

  const getCompanies = async () => {
    try{
      let companies = await
      axios.get(COMPANY_URL)
      setCompany(companies.data)
      // console.log(companies)
    } catch (err) {
      alert(err.message);
    }
  }

  useEffect(()=>{
    getCompanies();
  }, [])

  const handleCompany = (event, comp) =>{
    setSingleCompany(comp)
  }

  return (
    <div>
      <h1> Hello company show page here </h1> 
    </div>
  )

}