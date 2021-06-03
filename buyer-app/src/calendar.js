import React, { useState } from 'react'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css'
import Day from './daySheet'
import {useLocation} from "react-router-dom"

const providerData = require('./providerData.json')
const myData = require('./myData.json')

export default function FullPage(props) {
  const location = useLocation()
  const provider = location.state.provider

  var busyDays = provider.busyDays
  const [value, onChange] = useState(new Date());
  console.log("today is", value.getMonth())
  const id = value.getMonth()+ 1 + ""+ value.getDate() +value.getFullYear()
  console.log(id)

  var allImportantDates = null
  myData.forEach(Element =>{
    if(Element.providerName === provider.name){ allImportantDates = Element.importantDates }
  })
  var todayDates= null
  if(allImportantDates){
    allImportantDates.forEach(Element=>{
      if (Element.id === id){ todayDates = Element}
    })
  }


  var providerImportantDates = null
  busyDays.forEach(Element => {
    if(Element.id === id){providerImportantDates = Element}
  })
  
  return (
    <div class = "fullPage">
       <h2>See Important Dates and Appointments</h2>
      <div class = "subpart">
      <Calendar 
        onChange={onChange}
        value={value}
      />
     <Day key={id} importantDates = {todayDates} providerImportantDates = {providerImportantDates}/>
      </div>
        </div>
  );
}