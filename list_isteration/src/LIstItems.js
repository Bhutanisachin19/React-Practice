import React , {useState} from 'react';

function LIstitems() {

    //const [names , setNames] = useState(['Messi 10' , 'Neymar 11' , 'Suarez 9']);

    //const [changed , setChanged ] = useState(0);
    
    let [names_state ,setNames_state]  = useState([
        {
            id:1,
            age:33,
            name : 'Messi',
            position : 'Right Wing' 
        },
        {
            id:2,
            age:28,
            name : 'Neymar',
            position : 'Left Wing' 
        },
        {
            id:3,
            age:32,
            name : 'Suarez',
            position : 'Striker' 
        },
        {
            id:4,
            age:36,
            name : 'Xavi',
            position : 'Midfield' 
        }
    ])


    let handler = (selected_name) => {
            
            console.log("Delete Button Pressed");
            console.log(selected_name.name);
            console.log(selected_name.position);


            
            console.log("Before Delete");
            console.log(names);

            names[0] = names[0].filter(name => name.id !== selected_name.id);            

            //setNames_state({names_state:[...names_state]})

            //setChanged(changed+1)
            //console.log("State is " +changed);

            console.log("After Delete");
            console.log(names);
        }


    var names = [names_state];
    console.log(names); 

    

    var nameList = names[0].map(name => <div key={name.id}>
                                    {   //console.log(name)
                                        //console.log("INSIDE MAP")
                                    }
                                    <h2 >I am  {name.name} . My age is {name.age}. My position is {name.position}. </h2> 
                                    <button onClick={() => handler(name)}> Delete</button> 
                                    </div>
                                )

    
    return (
        <div>
            {nameList}
        </div>
    )
}



export default LIstitems;

/*
    items are being deleted from array but the page is not reloading
*/ 