import logo from './logo.svg';
import axios from 'axios';
import './App.css';

function App() {
  const makeApiRequest = () => {
    console.log("makeApiRequest");
    axios.get("/api/testwithcurrentuser").then(response => {
      console.log("response", response);
    })
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <p>Dev mode</p>
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
        <button onClick={makeApiRequest}>Api request!</button>
      </header>
    </div>
  );
}

export default App;
