import React, { useState } from 'react';

export default function Mth() {
  let [miles, setMiles] = useState();
  let [flipped, setFlipped] = useState(false);

  const reset = () => setMiles(0);
  const onChange = (event) => setMiles(event.target.value);
  const onFlip = () => {
    reset();
    setFlipped((current) => !current);
  };
  return (
    <div>
      <label htmlFor="miles">Miles</label>
      <input
        value={flipped ? miles * 0.62 : miles}
        id="miles"
        placehoder="Minutes"
        type="number"
        onChange={onChange}
        disabled={flipped}
      />
      <label htmlFor="hours">Kilometers</label>
      <input
        value={flipped ? miles : miles * 1.609}
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
