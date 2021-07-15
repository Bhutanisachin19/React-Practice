
import { Component } from 'react';


//contains both lifecycle phase methods i.e mount and update

class LifecycleB extends Component
{

    //1st method which is called in mounting cycle
    constructor(props){
        super(props);
        
        this.state = {
            name : 'Child'
        }
        console.log(" LifeCycleB  Constructor called ");
    }


    //has to return the new state or null 
    //executes in mount and update both
    static getDerivedStateFromProps(props , state)
    {
        console.log("LifeCycleB getDerivedStateFromProps() called");
        return null;
    }


    //executed only once when the lifecycle of this component is completed and the child component (if any) is rendered 
    componentDidMount(){
        console.log(" LifeCycleB componentDidMount() is executed");
    }
    


    //part of updating cycle
    shouldComponentUpdate(){
        console.log("LifecycleB shouldComponentUpdate");
        return true;
    }

    //part of updating cycle
    getSnapshotBeforeUpdate(prevProps , prevState){
        console.log("LifecycleB getSnapshotBeforeUpdate ");
        return null;
    }


    //part of updating cycle
    componentDidUpdate(){
        console.log("LifecycleB componentDidUpdate ");
    }


    //this is the 3rd method which is executed in mounting cycle
  render(){
      console.log(" LifeCycleB Render method executed");
    return (
      <div>
        LifeCycleB
      </div>
    )
  }
}

export default LifecycleB;
