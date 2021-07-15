import './App.css';
import Home from './Components/Home';
import AboutUs from './Components/AboutUs';
import Feedback from './Components/Feedback';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from './Components/Navbar';
import ErrorPage from './Components/ErrorPage';

function App() {
  return (
          <>
          
            <BrowserRouter>

            {/* Always use link inside router */}
            <Navbar />

            <Switch>
              <Route  exact path='/' component={Home} />
              <Route  exact path='/about' component={AboutUs} />
              <Route  exact path='/feedback' component={Feedback}/>
              <Route path='*' component={ErrorPage} />

            </Switch>

            </BrowserRouter>
            
            </>
  );
}

export default App;
