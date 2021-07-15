//component 2

import React, { Component } from 'react';

import '../App.css';


import withCounter from './withCounter'; //HOC

class HoverCounter extends Component
{
    //here we are using the same coding again i.e the same function to increment the value , which we can reuse also by using HOC
    /*
    constructor(props){
        super(props);

        //setting initial state to 0
        this.state = {count :0}

    }

    //incremenetCount function
    
    
    incremenetCount = () => {
        this.setState({count : this.state.count + 1 })
    }
    */



    render(){
    console.log("Hover Counter ");
    //destructuring count and implement count which we are getting from the HOC as props
    const {count , incremenetCount} = this.props;
        
    //whenever we pass prop it will be passed to the HOC 

        return (
            <div>
                <h3 onMouseOver={incremenetCount} className="Hover">  Hovered {count} times</h3>
            </div>
        )
    }
}


//wrapping the current component with a HOC so that we can pass data to it from the HOC
export default withCounter(HoverCounter);