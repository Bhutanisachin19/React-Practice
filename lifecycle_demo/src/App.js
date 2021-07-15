import './App.css';
import { Component } from 'react';
import LifecycleA from './LifecycleA';
import FunctionalLifecycle from './FunctionalLifecycle';


class App extends Component
{

  render(){
    return (
      <div className="App">
            {/* <LifecycleA/>           */}
            <FunctionalLifecycle />
      </div>
    )
  }
}
export default App;
