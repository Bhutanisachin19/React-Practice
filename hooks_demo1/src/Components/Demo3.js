//useMemo example


import React, { useMemo, useState } from 'react';

const Demo3 = () => {

    //creating 2 states 
    const [state1 , setState1] = useState(0);
    const [state2 , setState2] = useState(0);

    const increment1 = () => {
        setState1(state1 + 1);
        console.log(state1);
    }


    const increment2 = () => {
        setState2(state2 + 1);
        console.log(state2);
    }

    //use memo returns the cached value
    const isEven = useMemo(() => {
        
        let i = 0;
        while(i<2000000000) i++ //to slow down the rendering process

        return state1 % 2 === 0;

    },[state1])


/* 
    const isEven = () => {
        
        let i = 0;
        while(i<2000000000) i++ //to slow down the rendering process

        return state1 % 2 === 0;
    }
 */
    
    /* we are not using isEven function on the second state but still if we change the state the whole component rerednders 
        which calls the isEven function again ,
        to stop this and make out code more optimize we can useMemo hook 
        which will cache the state value and exectue the function only if the value changes
    */



    return (
        <div>
        
            <div>
                <button onClick={increment1}>Change State1 - {state1}</button> 

                <p>State is {isEven ? 'Even' : 'Odd'}</p>
            </div>
            
            <div>
                <button onClick={increment2}>Change State2 - {state2}</button>
            </div>
        
        
        </div>
    )
}


export default Demo3;