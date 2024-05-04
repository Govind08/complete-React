import './index.css';
import Navbar from './Navbar';
import Home from './Home';
import Create from './Create';
import {BrowserRouter as Router,Route, Switch} from 'react-router-dom';

function App() {
  return (
   <Router>
     <div>
      <Navbar className="App" />
      <div className='content'>
       <Switch>
        <Route exact path="/">
        <Home />
        </Route>
        <Route exact path="/create">
        <Create />
        </Route>
       </Switch>
      </div>
    </div>
   </Router>
  );
}

export default App;
