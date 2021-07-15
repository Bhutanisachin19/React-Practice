import React, { Component } from 'react';

import './Buttons.css'

var click = 0;


class Buttons extends Component
{   
    constructor(props)
    {
        super(props);
        this.state = {counter : 0 , count : 0};
        console.log("Constructor");
    }

    componentDidMount(){
        this.setState  ({counter : this.state.counter +5});
        console.log("Component Did Mount");
    }


    clickHandler =() =>{
        this.setState ({counter: this.state.counter + 1})

        click = click +1;

        if(click%5 === 0)   
            this.setState({count:this.state.count +1});

    }

    render(){   
        console.log("Render");
        return(

            <div className="Main">

            <p className="para">{this.state.counter}</p>

            <div>
                <button className="bt1" onClick={this.clickHandler}>Click Me</button>
            </div>  
            <br></br>

            <div>
                <button className="bt2">{this.state.count} Counter</button>
            </div>
            
            </div>
        )
    }


    
}


export default Buttons ;