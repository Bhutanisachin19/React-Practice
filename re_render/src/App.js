import { PureComponent } from 'react';
import './App.css';
import Child1 from './Components/Child1';
import Child2 from './Components/Child2';

class App extends PureComponent{


  constructor(props)
  {
    super(props);
    
    this.state = {count : 0}

  }

   handler = () => {
     this.setState({count : this.state.count + 1});
      console.log("Button clicked");
  }

  render()
  {
    console.log("Parent render");
    return (
      <div className="Main">
        <p className="Para">{this.state.count}</p>
        <Child1 count = {this.count} onClick={this.handler}/>
        <br></br>

        <Child2 count = {this.count} onClick={this.handler}/>  

        {/*
            this.state.count will cause the child to rerender
            <Child2 count = {this.state.count} onClick={this.handler}/>  
        */ }
      
      </div>
    )
  }
}

export default App;
