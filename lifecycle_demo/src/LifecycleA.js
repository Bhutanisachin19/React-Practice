
import { Component } from 'react';
import LifecycleB from './LifecycleB';


//contains both lifecycle phase methods i.e mount and update 

class LifecycleA extends Component
{

    //1st method which is called in mounting cycle
    constructor(props){
        super(props);
        
        this.state = {
            name : 'Sachin'
        }
        console.log(" LifecycleA  Constructor called ");
    }


    //has to return the new state or null 
    static getDerivedStateFromProps(props , state)
    {
        console.log("LifeCycleA getDerivedStateFromProps() called");
        return null;
    }



    //part of updating cycle
    shouldComponentUpdate(){
        console.log("LifecycleA shouldComponentUpdate");
        return true;
    }


    //part of updating cycle
    getSnapshotBeforeUpdate(prevProps , prevState){
        console.log("LifecycleA getSnapshotBeforeUpdate ");
        return null;
    }


    //part of updating cycle
    componentDidUpdate(){
        console.log("LifecycleA componentDidUpdate ");
    }

    //executed only once when the lifecycle of this component is completed and the child component is rendered 
    componentDidMount(){
        console.log("LifeCycleA componentDidMount() is executed");
    }
    

    //defining as a property
    changeState = () =>{
        this.setState({
            name : 'Bhutani'
        })
    }

    //this is the 3rd method which is executed in mounting cycle
  render(){
      console.log("LifeCycleA Render method executed");
    return (
      <div>

        <div>LifecycleA</div>
        <button onClick={this.changeState}>Change State</button>
        <LifecycleB />
      </div>
    )
  }
}

export default LifecycleA;
