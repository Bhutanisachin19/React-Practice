import logo from './logo.svg';
import './App.css';
import ClickCounter from './Components/ClickCounter';
import HoverCounter from './Components/HoverCounter';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ClickCounter name= 'Sachin' />
        <HoverCounter/>
      </header>
    </div>
  );
}

export default App;
