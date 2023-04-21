import logo from './logo.svg';
import './App.css';
import EWordssss from './EWordssss';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import { SidebarData } from './components/SidebarData';
import Main from './pages/Main';
import AddWords from './pages/AddWords';
import Learn from './pages/Learn';
import Words from './pages/Words';

function App() {
  return (
    // <div className="App">
    <>
    <Router>
      <Navbar />
      <Routes>
        {/* <Route path='/' exact element={ <Main />} /> */}
        <Route path='/' exact element={ <Learn />} />
        <Route path='/addword' element={ <AddWords />} />
        <Route path='/learn' element={ <Learn />} />
        <Route path='/words' element={ <Words />} />
      </Routes>
    </Router>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}

      {/* <EWordssss /> */}
   
   
    </>
  );
}

export default App;
