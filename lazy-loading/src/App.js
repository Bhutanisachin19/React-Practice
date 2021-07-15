import React, { lazy, Suspense } from "react";
import "./App.css";
//import MyComponent from "./MyComponent";

//lazy loading
//to load data asynchronously ,
//instead of loading everything at the same time

const MyComponent = lazy(() => import("./MyComponent"));
//we have a callback function which will lazy load this component
//but while loading the app does not know what mycomponent is because it has to be lazy loaded so it gives an error
// so solve this  we use <Suspense> , it will render something while our component is rendering by taking a parameter (fallback)

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Suspense fallback={<div>Loading...</div>}>
          <MyComponent />
        </Suspense>
      </header>
    </div>
  );
}

export default App;
