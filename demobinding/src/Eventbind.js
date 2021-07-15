import React, { Component } from 'react';

class Eventbind extends Component
{
    constructor(props)
    {
        super(props);

        this.state = {
            msg : "Hello"
        }

        //another approach fir bindng the "this" keyword with event handler
        this.handler = this.handler.bind(this);
    }


    //another approach is making the handler function as an arrow function


    //this is a normal function hence we are using bind in constructor
    handler() {
        console.log(this);
        this.setState({
            msg: 'GoodBye'
        })
    }


    render(){
        console.log("Render");
    return(
        <div>
            <h3>{this.state.msg}</h3>

            {/*
                this will bind the "this" with current context if we dont write this it will be binding with global i.e undefined here
                there are many other ways to bind like using arrow functions
                <button onClick={this.handler.bind(this)}>Click Me!</button>
            
            */ }


            {/* Binding Done in constructor */}
            <button onClick={this.handler}>Click Me!</button>
                                
        </div>
    )
    }
}

export default Eventbind;