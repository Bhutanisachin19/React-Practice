import logo from "./logo.svg";
import "./App.css";
import CakeComponent from "./Component/CakeContainer";
import { Provider } from "react-redux";
import store from "./Redux/store";
import HooksCakeContainer from "./Component/HooksCakeContainer";
import IceCreamContainer from "./Component/IceCreamContainer";
import HooksIceCreamContainer from "./Component/HooksIceCreamContainer";
import NewCakeContainer from "./Component/NewCakeContainer";
import Itemcontainer from "./Component/Itemcontainer";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Itemcontainer cake />
        <Itemcontainer />

        <CakeComponent />
        <HooksCakeContainer />
        <br></br>
        <hr></hr>
        <IceCreamContainer />
        <HooksIceCreamContainer />
        <br></br>
        <hr></hr>
        <br></br>
        <NewCakeContainer />
      </div>
    </Provider>
  );
}

export default App;
