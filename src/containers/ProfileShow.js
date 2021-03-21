import React from 'react'

export default function ProfileShow(props){

  return(
    <div>
      <h1>{props.userLoggedIn.firstname}</h1>
    </div>
  )
}