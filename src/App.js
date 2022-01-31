import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  let [minutes, setMinutes] = useState();
  let [flipped, setFlipped] = useState(false);

  const reset = () => setMinutes(0);
  const onChange = (event) => setMinutes(event.target.value);
  const onFlip = () => {
    reset();
    setFlipped((current) => !current);
  };
  return (
    <div>
      <h1>Super Converter</h1>
      <label htmlFor="minutes">Minutes</label>
      <input
        value={flipped ? minutes * 60 : minutes}
        id="minutes"
        placehoder="Minutes"
        type="number"
        onChange={onChange}
        disabled={flipped}
      />
      <label htmlFor="hours">Hours</label>
      <input
        value={flipped ? minutes : minutes / 60}
        id="hours"
        placehoder="Hours"
        type="number"
        disabled={!flipped}
        onChange={onChange}
      />
      <button onClick={reset}>Reset</button>
      <button onClick={onFlip}>Flip</button>
    </div>
  );
}

export default App;
