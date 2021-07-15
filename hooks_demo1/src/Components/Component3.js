import React, { useEffect, useState } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

const Component3 = () => {
    //using useEffect hook

    const [val , setVal] = useState(0);


    //called everytime component renders
    useEffect(() => {
        console.log("ComonentDidUpdate");
        console.log(`Value of state is ${val}`);
    })


    //called only once
    useEffect(() => {
        console.log("ComonentDidMount");

        //to perform cleanup activites we return a function here
        return () =>{
            console.log("ComponentDidUnmount");
        }
    },[])


    return(
        <div>
            <p>Hello</p>
            <button  className ='btn-secondary' onClick={() => setVal(val + 1)}> Change State </button>
        </div>
    )
}


export default Component3;