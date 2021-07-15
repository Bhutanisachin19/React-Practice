import React, { useState } from 'react';

function ChildComponent(props){
    
    return (
        <div>
               <h3>Hello from child component , {props.text}  </h3>
        </div>
     
    )
}

export default ChildComponent;