import React from 'react'

export default function Test(props){
  console.log("date is ", props.dateValue)
  return(
    <div>{props.dateValue} </div>
  )
}
