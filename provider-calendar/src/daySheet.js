import React from 'react'
import TimeSlot from './timeSlots'
export default class Day  extends React.Component{
        constructor(props){
            super(props);
            this.state = { allHours:[9,10,11,12,13,14,15,16,17,18],
                            availableTimes: [],
                            bookedTimes: [], 
                            requestedTimes: []}
                        }
            static getDerivedStateFromProps(props, state) {
                  if(props.objDate !== ""){
                    return {availableTimes: props.objDate.available,
                           bookedTimes: props.objDate.booked, 
                            requestedTimes: props.objDate.requested }
                    }
               }
                                             
        render(){
            const allSlots = this.state.allHours.map(
                slot => {
                    let ampm = slot > 12 ? "pm" : "am"
                    return [<TimeSlot timeHour = {slot + "" + ampm}
                            requested = {this.state.requestedTimes.includes(slot)}
                            available = {this.state.availableTimes.includes(slot)} 
                            booked = {this.state.bookedTimes.includes(slot)}
                            />,
                            <hr/>]
                }
            )
            return(
                <div class = 'daySheet'>
                {allSlots}
                </div>
            )
        }

}