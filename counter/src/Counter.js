import React, { useState } from 'react';
import './Counter.css';


//functional component
function Counter () {

    const [count , setCount] = useState(0);

    
    let addCount = () => {
        setCount(count +1);
    } 


    let subCount = () => {
        //wont go below 0

        if(count === 0)
            setCount(0);
        else
            setCount(count-1);
    } 

    return(
        <div>
        
            <h2 className="heade">Hello from counter component</h2>
            <h3 className="counter">Count is {count}</h3>
 
                <button onClick={addCount} className="bttn bt1" >Add </button>
                
                <br></br>
                <br></br>

                <button onClick={subCount} className="bttn bt2" >Subtract</button>
        
        </div>
    )
}



export default Counter;