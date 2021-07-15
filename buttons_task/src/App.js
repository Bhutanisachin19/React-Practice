import logo from './logo.svg';
import './App.css';
import Buttons from './Components/Buttons';

function App() {  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
       <Buttons/>
      </header>
    </div>
  );
}

export default App;
