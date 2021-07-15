import './App.css';
import Counter1 from './Components/Counter1';
import Demo2 from './Components/Demo2';

import Component3 from './Components/Component3';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Demo3 from './Components/Demo3';
import Demo4 from './Components/Demo4';



function App() {

  //const [login , setLogin] = useState(true);

  return (
    <div className="App">

      {/*  <Counter1 />  */ }

      { /* <Demo2 /> */}
      
      {/* Conditional rendering */}
      
      {
        /*
        login ? <Component3/> : <Counter1/> 

      <br></br>
      <br></br>

      <button className ='btn-success' onClick={() => setLogin(!login)}>Switch</button>
      
      */}



     { /*<Component3 />*/}


     {/*useMemo example */}

      {/* <Demo3/> */}

     {/* <Demo4 /> */}


    </div>
  );
}

export default App;
