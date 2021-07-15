import logo from './logo.svg';
import './App.css';



import ParentComponent from './FunctionBased/ParentComponent';
import ParentCompClass from './ClassBased/ParentCompClass';



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ParentComponent/>
        <ParentCompClass />
      </header>
    </div>
  );
}


export default App;
