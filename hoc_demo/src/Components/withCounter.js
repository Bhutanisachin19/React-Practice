//HOC -> to use the same functionality in multiple components

import React from 'react';


//this is just a naming convension 
const withCounter = (WrappedComponent) => {

    //takes original component as a parameter , and returns a new component

    class WithCounter extends React.Component{


        //this is the code which will be shared between the components being passed i.e constructor and the incrementCount
        constructor(props){
            super(props);
    
            //setting initial state to 0
            this.state = {count :0}
    
        }
    
        //incremenetCount function
        incremenetCount = () => {
            this.setState({count : this.state.count + 1 })
        }


        render(){
            console.log("HOC component");
            //adding data to the original component by passing as props  and all the components will recieve seperate states

            //whenever we pass prop it will be passed to the HOC not the component
            return <WrappedComponent count={this.state.count}  incremenetCount={this.incremenetCount}  {...this.props}/>
        }
    }

    return WithCounter;
}


export default withCounter;