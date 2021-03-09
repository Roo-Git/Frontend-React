import './App.css';

// IMPORT REACT-ROUDER-DOM
import {BrowserRouter, Switch, Route} from 'react-router-dom';

// IMPORT VIEW.CONTAINERS
import Home from './containers/Home/Home';
import Login from './containers/Login/Login';
import Register from './containers/Register/Register'



function App() {
  return (
    <div className="App">

      <BrowserRouter>
      
        <Switch>

          <Route path='/' exact component={Home}/>
          <Route path='/login' exact component={Login}/>
          <Route path='/register' exact component={Register}/>

          


        </Switch>
      
      </BrowserRouter>
    </div>
  );
}


export default App;