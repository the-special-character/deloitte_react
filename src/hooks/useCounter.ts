import { useState } from 'react';

const useCounter = () => {
  const [counter, setCounter] = useState(0);

  const increment = () => {
    setCounter((val) => val + 1);
  };

  const decrement = () => {
    setCounter((val) => val - 1);
  };

  return {
    counter,
    increment,
    decrement,
  };
};

export default useCounter;
