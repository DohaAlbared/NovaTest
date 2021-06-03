import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import Day from './daySheet'

var busyHours = require('./busyDates.json');

export default function FullPage() {
  const [value, onChange] = useState(new Date());
  const id = value.getMonth() + ""+ value.getDate() +value.getFullYear()
  console.log(id)
  var objDate = ""
  busyHours.forEach(Element => {
    if(Element.id === id){
      objDate = Element
      console.log("found object ", objDate.id)
    }
  })
  console.log(objDate.id)
  return (
    <div class = "fullPage">
      <Calendar 
        onChange={onChange}
        value={value}
      />
     <Day key={objDate.id} objDate = {objDate}/>
    </div>
  );
}