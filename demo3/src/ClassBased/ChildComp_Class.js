import React, { Component } from 'react';


class ChildComp_Class extends Component{

    render()
    {
        return (
            <div>
                <h3>Hello from Class Based Child Component , {this.props.val}</h3>
            </div>
        )   
    }
}


export default ChildComp_Class;
