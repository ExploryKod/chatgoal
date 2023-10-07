import React, {useEffect, useState } from 'react';
import Header from "./pages/Navigation"
import Home from "./pages/Home"
import './App.css';

function App() {

  return (
    <div className="App">
      <div className="hidden sm:block">
        <Header />
      </div>
      <div className="h-[100vh]">
        <Home />
      </div>
     
    </div>
  );
}

export default App;
