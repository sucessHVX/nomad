import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Mth from './Mth';
import KtM from './KtM';

function App() {
  const [index, setIndex] = useState(0);
  const onSelect = (event) => {
    setIndex(event.target.value);
  };

  return (
    <div>
      <h1>Super Converter</h1>
      <select onChange={onSelect}>
        <option value="0">Minutes & Hours</option>
        <option value="1">Miles & Kilometers</option>
      </select>
      {index === '0' ? <Mth /> : <KtM />}
    </div>
  );
}

export default App;
