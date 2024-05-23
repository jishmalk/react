import React, { useState, useMemo } from 'react';

const Usememo = () => {
  const [count, setCount] = useState(0);

  const squarValue = useMemo(() => {
    console.log("Computing squared value...");
    return count * count;
  }, [count]);


  return (
    <div>
      <p>Count4: {count}</p>
      <p>Squared Value: {squarValue}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};

export default Usememo;















































