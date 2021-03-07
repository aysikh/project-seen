import React, { Component } from 'react';

export default function CompanyCard(props){

  return(
    <div className="company-info-container">
      <h1>{props.comp.name}</h1>
      <br /> 
      <h2>{props.comp.location}</h2>
      <br /> 
      <h2>{props.comp.description}</h2>
    </div>
  )
}