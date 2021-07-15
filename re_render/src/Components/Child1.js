import React, { PureComponent } from 'react';
import '../App.css';


class Child1 extends PureComponent
{
    render()
    {
        console.log("Child 1 render");
        return(
            <button className="btn1" onClick={this.props.onClick}>Button 1</button>
        )
    }
}


export default Child1;