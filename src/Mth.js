import React, { useState } from 'react';

export default function Mth() {
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
