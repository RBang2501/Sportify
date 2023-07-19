import React from 'react'
import { useState, useEffect } from 'react';

export const About = () => {
  const [count, setCount] = useState(1);

  useEffect(() => {
    setCount(JSON.parse(window.sessionStorage.getItem("count")));
  }, []);

  useEffect(() => {
    window.sessionStorage.setItem("count", count);
  }, [count]);

  return (
    <div className="App">
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  );
}
