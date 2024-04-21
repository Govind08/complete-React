import './index.css';
import Navbar from './Navbar';
import Home from './Home';

function App() {
  var title = "Govind's blog";
  return (
    <div>
      <Navbar />
      <header className="App-header">
        {
          <h1>{title}</h1>
        }
      </header>
      <div className='content'>
        <Home />
      </div>
    </div>
  );
}

export default App;
