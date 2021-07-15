import React, { useState } from 'react';

import ChildComponent from './ChildComponent';

function ParentComponent(){

    //setting state
    const[value , setValue] = useState('Parent state');

    const handleClick = ()=> {
        // Changing state 
        setValue('State Changed') 
      } 

    return (
        <div style={{color: "#c5cae9"}}>
            <h2>Functional Components</h2>
               <h3>Hello from parent component , {value}  </h3>

                <ChildComponent text={value}  handleClick={handleClick}/>

        <button onClick={handleClick}> Click me to change state </button>
        </div>     
    )
}

export default ParentComponent;