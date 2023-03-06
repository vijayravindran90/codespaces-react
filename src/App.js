import './App.css';
import React, {useState} from 'react';
import Form from './pages/Form/Form';
function App() {
  const [title] = useState("Demo");
  return (
    <div className="App">
      <header className="App-header">
      <h1 qa-id="header-component">React {title}</h1><br/>
        <img src="Octocat.png" className="App-logo" alt="logo" />
        <p>
          GitHub Codespaces <span className="heart">♥️</span> React
        </p>
        <Form/>
        <p className="small">
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </p>
      </header>
    </div>
    
  );
}


export default App;
