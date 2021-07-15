// how to use useState with Arrays

import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


function Demo2() {
    
    const [items , setItems] = useState([]); //initializing with an empty array


    const addItem= () => {
        // the setter function will not automatically update and merge the state in functional component so we have to do it manually using the spread operator


        //1st we spread the current array and then we push the new element
        setItems([...items , {
            id:items.length,
            value : Math.floor(Math.random() * 10 ) + 1
        }])

    }
    
    return (
        <div>
            <button onClick={addItem}> Add an item </button>
            <ul>
                {
                    items.map(item => <li key={item.id}>  {item.value} </li>)
                }
            </ul>
        </div>
    )

}


export default Demo2;