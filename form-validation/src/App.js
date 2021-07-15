import { useState } from 'react';
import './App.css';
import ComponentForm from './Components/ComponentForm';

const  App =() =>  {
  const [isSubmitted , setIsSubmitted] = useState(false);

  function submitForm(){
    setIsSubmitted(true);
  }


  return (
    <div>
        {/* <ComponentForm /> */}
        
        {!isSubmitted ? <ComponentForm submitForm={submitForm}/> :<h1>Form Submitted successfully</h1> }
    </div>
  );
}

export default App;
