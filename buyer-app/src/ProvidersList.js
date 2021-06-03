import React from 'react'
import Card from './card'
import Carousel from "react-elastic-carousel"
import {GiMagnifyingGlass} from "react-icons/gi"

const providers = require('./providerData.json')

export default class ProvidersList extends React.Component{
    constructor(){
        super();
        this.state = {singleProvider: null,
                     searchValue : "",
                    message: ""
                     }
    }
    
    myChangeHandler =(event)=>{
        if(event.target.value === ""){this.setState({message:"", singleProvider: null})}
        this.setState({searchValue : event.target.value})
        
    }
    myEnterHandler =(event)=>{
        let update = null
        if (event.key === 'Enter') {
            providers.forEach(Element =>{
                if(Element.name.toLowerCase() === this.state.searchValue.toLowerCase()){
                    update = Element
                } 
            })
            this.setState({singleProvider: update})
            if(this.state.searchValue!== "" && !update ){
                this.setState({message  : "no results are found"})
            }
        }
        
        
    }
    render(){
        
    let displayCard
    if(this.state.singleProvider){
        console.log(this.state.singleProvider.name)
        displayCard = <Card provider = {this.state.singleProvider}/>
    }else{
        const cards = providers.map( prov => <Card provider = {prov}/> )
        displayCard = <Carousel fade={true} pause={false}>
                            {cards}
                            </Carousel>
    }
    return(
        <div className = "app">
            <div className  = "header">
            <h1>Choose A Professional</h1>
            <div className ="searchBar">
            <input className = "searchField"
                type='text'
                placeholder = "Search by name"
                onKeyDown={this.myEnterHandler}
                onChange = {this.myChangeHandler}
            />
            <GiMagnifyingGlass size = "20px" color = "grey"/>
            </div>
            </div> 

           
            <div> <p>{this.state.message} </p> </div>
            <div className= "bodyList">
                {displayCard}
            </div>
        </div>
    )
}
}