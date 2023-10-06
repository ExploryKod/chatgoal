import React, {useEffect, useState } from 'react';
import logo from './logo.svg';
import { connect, sendMsg } from "./api/index";
import './App.css';

function App() {

  const send = () => {
    console.log("hello");
    sendMsg("hello");
  }

  useEffect(() => {
    connect();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
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
      </header>
      <div>
        <button onClick={send}>Hit</button>
      </div>
    </div>
  );
}

export default App;
