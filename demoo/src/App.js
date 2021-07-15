import logo from './Barca.png';
import './App.css';
import Names from './Names';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          
          <Names name="Suarez" number="9"/>
          <Names name="Leo" number="10"/>
          <Names name="Neymar" number="11"/>
          
          </p>
      </header>
    </div>
  );
}

export default App;
