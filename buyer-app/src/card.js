import React from 'react'
import { BrowserRouter as Router, useHistory} from "react-router-dom";

// export default class Card extends React.Component{
//     constructor(props){
//         super(props);
//         this.state = {id: "", profession : "", imgsrc: "", name: "", provider: ""}
//     }
    
//     static getDerivedStateFromProps(props, state) {
//             return {provider: props.provider,
//                     id : props.provider.id, 
//                     profession : props.provider.profession, 
//                     imgsrc : props.provider.imgsrc,
//                     name: props.provider.name}
//     }
//     redirect =() =>{
//         const history = useHistory()
//         history.push("/calendar")
//     }
//     render(){
//         const image = '/assets/images/' + this.state.imgsrc
//         return(
//             <div className = "CardContainer">
//                 <div class = "ImageContainer">
//                 <img src ={image} />
//                 </div>
//                 <h4 style = {{margin : "10px"}}> {this.state.profession} : {this.state.name} </h4>
//             </div>
//         )
//     }

// }

export default function Card(props) {
    const provider =  props.provider
    const id = props.provider.id 
    const profession  = props.provider.profession 
    const imgsrc =  props.provider.imgsrc
    const name = props.provider.name 
    const image = '/assets/images/' + imgsrc
    const history = useHistory()

    const Redirect =()=>{
        history.push({
            pathname: "/calendar",
            search: '?calendar',
            state: { provider: provider}
        })
    }
        return(
            <div className = "CardContainer" onClick = {Redirect}>
                <div class = "ImageContainer">
                <img src ={image} />
                </div>
                <h4 style = {{margin : "10px"}}> {profession} : {name} </h4>
            </div>
        )
    }

