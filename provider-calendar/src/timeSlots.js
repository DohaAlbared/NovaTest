import React from 'react'
import {GiCheckMark, GiCancel, GiTrashCan} from "react-icons/gi"
import ReactTooltip from 'react-tooltip'

export default class TimeSlot extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            available : false, 
            requested: false,
            booked: false,
            responded: false,
            firstRender:  true
                    }
    }
    static getDerivedStateFromProps(props, state) {
        if(state.firstRender){
            return {
                available : props.available ? props.available : false, 
                requested: props.requested ? props.requested : false,
                booked: props.booked ? props.booked : false,
                firstRender: false
            }
        }
        else{
            return null
        }
       
    }           
    handleClick = () =>{
        if(this.state.requested && !this.state.responded){
            alert("Please reject your request first to be able to set the slot as unavailable")
        }
        else{
        this.setState(prevState => {
            var update = !prevState.available
            return {available : update}
        })
    }
    }
    accept = (event) =>{
        event.stopPropagation()
        this.setState({booked: true})
        this.setState({available : false})
        this.setState({responded: true})
    }
    reject = (event) =>{
        event.stopPropagation()
        this.setState({booked: false})
        this.setState({responded: true})
    }
    remove = (event) =>{
        event.stopPropagation()
        this.setState({booked: false})
    }
    render(){
        var mark = ""
        var check = ""
        var reject = ""
        var remove = ""
        var color = "lightGrey"
        if(this.state.available){
            mark = "Marked Available"
            color = "blue"
        }
        if(this.state.requested && !this.state.responded){
            mark = "requested"
            color = "orange"
        }
        if(this.state.booked){
            mark = "booked"
            color = "green"
            remove =    <div>
                            <GiTrashCan data-tip data-for='remove' size = "20px" color = "white" onClick = {this.remove}/>
                            <ReactTooltip id='remove'>
                            <span>cancel appointment</span>
                            </ReactTooltip>
                        </div>                      
        }

        const hourstyle = {
            backgroundColor: color,
           } 
        
        if(this.state.requested && !this.state.responded){
            check =  <div style ={{marginRight : "10px"}}>
                    <GiCheckMark data-tip data-for='accept' color = "white" onClick = {this.accept}/>
                     <ReactTooltip id='accept'>
                     <span>accept appointment request</span>
                     </ReactTooltip>
                    </div>

            reject = <div> <GiCancel data-tip data-for='reject' color = "white" onClick = {this.reject} />
                      <ReactTooltip id='reject'>
                     <span>reject appointment request</span>
                     </ReactTooltip>
                     </div>
        }
       return(
           <div  class = "slot">
               
             <p class = "timeText"> {this.props.timeHour}</p>

             <div style = {hourstyle} class = 'hour' onClick = {this.handleClick }>
                  <p style = {{color: "white"}}> {mark}</p>
                  <div class = "icons"> {check} {reject} {remove} </div>                   
              </div>

           </div>   
            )
            
            
    }

}