import logo from './Barca.png';
import './App.css';
import FunctionClick from './FunctionClick';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Visca El Barca
        </p>
        <a
          className="App-link"
          href="https://www.fcbarcelona.com/en/"
          target="_blank"
          rel="noopener noreferrer"
        >
          mes que un club
        </a>


      <FunctionClick/>
      
      </header>
    </div>
  );
}

export default App;
