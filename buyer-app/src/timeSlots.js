import React from 'react'
import {GiCalendar, GiTrashCan} from "react-icons/gi"
import ReactTooltip from 'react-tooltip'

export default class TimeSlot extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            available : false, 
            slotRequested: false,
            booked: false,
            appointed: false,
            firstRender:  true
            }
    }
    static getDerivedStateFromProps(props, state) {
        if(state.firstRender){
            return {
                available :props.available, 
                booked: props.booked,
                slotRequested: props.slotRequested,
                appointed : props.appointed,
                firstRender: false
            }
        }
        else{
            return null
        }
       
    }           
    
    request = (event) =>{
        event.stopPropagation()
        this.setState({slotRequested: true})
    }
    cancel = (event) =>{
        event.stopPropagation()
        this.setState(prevState => 
           { var bookedUpdate = prevState.appointed ? false : prevState.booked
            return {slotRequested: false, booked: bookedUpdate, appointed: false, available:true}
    })
    }
    render(){
        var mark = ""
        var request = ""
        var cancel = ""
        var color = "lightGrey"
       if(this.state.available){
            if(this.state.slotRequested){
                    color = "orange"
                    mark = "you requested this date"
                    cancel = <div>
                                <GiTrashCan data-tip data-for='cancel' size = "20px" color = "white" onClick = {this.cancel}/>
                                <ReactTooltip id='cancel'>
                                <span>cancel request</span>
                                </ReactTooltip>
                            </div>
                }
            else{
                    mark = "Available"
                    color = "blue"
                    request =  <div style ={{marginRight : "10px"}}>
                                <GiCalendar data-tip data-for='request' color = "white" onClick = {this.request}/>
                                <ReactTooltip id='request'>
                                <span>request appointment</span>
                                </ReactTooltip>
                            </div>
            }
        }
        else if(this.state.booked){
            if(this.state.appointed){
                color = "red"
                mark = "You have an appointment"
                cancel = <div>
                            <GiTrashCan data-tip data-for='remove' size = "20px" color = "white" onClick = {this.cancel}/>
                            <ReactTooltip id='remove'>
                            <span>cancel appointment</span>
                            </ReactTooltip>
                        </div>
        }
            else{
                mark = "booked"
                color = "green"                                 
            }
    }
        const hourstyle = {
            backgroundColor: color,
           } 
       return(
           <div  class = "slot">              
             <p class = "timeText"> {this.props.timeHour}</p>
             <div style = {hourstyle} class = 'hour'>
                  <p style = {{color: "white"}}> {mark}</p>
                  <div class = "icons"> {request} {cancel} </div>                   
              </div>
           </div>   
            )
            
            
    }

}