import { useState } from "react";

const useCounter = () => {
  const [counter, setCounter] = useState(0);

  const increment = () => {
    setCounter((prev) => prev + 1);
  };

  const decrement = () => {
    if (counter <= 0) {
      alert("counter is 0 cannot be incremented anymore!");
      return;
    }
    setCounter((prev) => prev - 1);
  };

  return [counter, increment, decrement];
};

export default useCounter;
