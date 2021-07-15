import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Counter1 () {

    const initialCount = 0;

    //destructuring the useState which returns state and a function
    const [counter , setCounter] = useState(initialCount);


    const increment = () => {
        
        for(let i=0;i<5;i++)
        {
            
            //setCounter(counter +1 ); // this wont work , it will increment the value only by 1 instead of 5
            //console.log(counter);

            //so we use another form of setCounter in which we will pass a function which will have the prevoius value of the state
            
            setCounter(prevValue => prevValue +1);
            console.log("increment 5 called");
        }
    }

    return(
        <div>
            Count value is : {counter}
            <br></br>
            <button onClick={() => setCounter(counter +1)}>Increment</button>

            <button onClick={() => setCounter(counter -1)}>Decrement</button>

            <button onClick={() => setCounter(initialCount)}>Reset</button>

            <button onClick={increment}>Increment by 5</button>
        </div>
    )
}



export default Counter1;