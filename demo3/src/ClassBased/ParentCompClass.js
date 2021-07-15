import React, { Component } from 'react';

import ChildComp_Class from './ChildComp_Class';

class ParentCompClass extends Component{

    /*
    constructor(props){
        super(props);
    }
    */

    state = {
        val : 'Parent State'
    }

    render()
    {
        return (
            <div style={{color: "#64b5f6"}}>

                <h2>Class Based Components </h2>
                
                <h3>Hello from Class Based Parent Component , {this.state.val}</h3>
                
                <ChildComp_Class val = {this.state.val}/>
                
                {/* no need to bind if using arrow function */}
                
                <button onClick={() => this.setState({val : "State Changed"})} > Click me to change state</button>
                
                <br>
                </br>
                <br></br>
            
            </div>
        )   
    }
}

export default ParentCompClass ;