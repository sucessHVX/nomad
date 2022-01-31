import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  let [counter, setCounter] = useState(0);

  return (
    <div>
      <h3>Total clicks: {counter}</h3>
      <button
        onClick={() => {
          setCounter(counter + 1);
        }}
      >
        Click me
      </button>
    </div>
  );
}

export default App;
