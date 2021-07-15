//component 1

import React, { Component } from 'react';

import withCounter from './withCounter';

class ClickCounter extends Component
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
    console.log("Click Counter ");

    //destructuring count and implement count which we are getting from the HOC as props
    const {count , incremenetCount} = this.props;
    
        return (
            <div>
                <button onClick={incremenetCount}> {this.props.name} Clicked {count} times</button>
            </div>
        )
    }
}


export default withCounter(ClickCounter);