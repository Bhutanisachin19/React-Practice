import React, { useEffect, useState } from 'react';


const FunctionalLifecycle = () => {

    const [leo,setLeo] = useState(true)

    useEffect(()=>{
        //runs everytime
        console.log("UseEffect 1  , without any dependency")
    })


    useEffect(()=> {
        //runs onnly when dependency chnages and the 1st time
        console.log("UseEffect 2 with dependency leo ", leo)
    },[leo])


    useEffect(()=> {
        //runs only once
        console.log("useEffect 3  with empty array as dependency")
    },[])

    return (
        <div>
            <h1>
                Hello
            </h1>

            <button  onClick={() => setLeo(!leo)} >
                Change State
            </button>
        </div>
    )
}




export default FunctionalLifecycle