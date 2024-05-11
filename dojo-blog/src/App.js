import './index.css';
import Navbar from './Navbar';
import Home from './Home';
// import Create from './Create';
import {BrowserRouter as Router,Route, Switch} from 'react-router-dom';
import BlogDetails from './BlogDetails';
import Create from './Create';
import NotFound from './NotFound';

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
        <Route path="/blogs/:id">
        <BlogDetails />
        </Route>
        <Route path="/create">
        <Create/>
        </Route>
        <Route path="*">
          <NotFound/>
        </Route>
       </Switch>
      </div>
    </div>
   </Router>
  );
}

export default App;
