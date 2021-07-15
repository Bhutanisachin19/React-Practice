import React, { PureComponent } from 'react';

import '../App.css';


class Child2 extends PureComponent
{
    render()
    {
        console.log("Child 2 render");
        return(
            <button className="btn2" onClick={this.props.onClick}>Button 2</button>
        )
    }
}

export default Child2;