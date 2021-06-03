import React from 'react'
import TimeSlot from './timeSlots'
export default class Day  extends React.Component{
        constructor(props){
            super(props);
            this.state = { allHours:[9,10,11,12,13,14,15,16,17,18],
                            availableTimes: [],
                            providerBookedTimes: [],
                            myAppointments: [],
                            myRequests : [] 
                        }
                        }
            static getDerivedStateFromProps(props, state) {
                    let available = state.availableTimes
                    let booked = state.providerBookedTimes
                    let appointments  = state.myAppointments
                    let requests = state.myRequests
                  if(props.providerImportantDates){
                    available = props.providerImportantDates.available
                    booked = props.providerImportantDates.booked
                  }
                  if(props.importantDates){
                    appointments = props.importantDates.appointments
                    requests = props.importantDates.requestedTimes
                  }
                  

                    return {
                                availableTimes: available,
                                providerBookedTimes: booked,
                                myAppointments: appointments,
                                myRequests:  requests,
                        }
                    
               }
                                             
        render(){
            const allSlots = this.state.allHours.map(
                slot => {
                    let ampm = slot > 12 ? "pm" : "am"
                    return [<TimeSlot timeHour = {slot + "" + ampm}
                                available  = {this.state.availableTimes.includes(slot)} 
                                slotRequested =  {this.state.myRequests.includes(slot)}
                                booked = {this.state.providerBookedTimes.includes(slot)}
                                appointed = {this.state.myAppointments.includes(slot)}
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