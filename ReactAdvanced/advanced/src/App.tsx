import React from 'react';
import logo from './logo.svg';
import './App.css';
import ContainerWrapper from './components/ContainerWrapper';

function App() {
  return (
    <div className="App">
      <ContainerWrapper> 
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        </ContainerWrapper>
    </div>
  );
}

export default App;
