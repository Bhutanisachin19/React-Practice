//useRef hook

import React, { useEffect, useRef } from 'react';

const Demo4 = () => {


    const inputRef = useRef(null);


    //we want the focus on input element only once , so we use componentDidMount equivalent useEffect hook
    //passing an empty array means it will be executed only once


    useEffect(()=>{
        //focus the input element
        inputRef.current.focus();
    },[])

    return(
        <div>
            <br></br>
            <br></br>
            <input  ref={inputRef} type="text"/>
        </div>
    )
}




export default Demo4;