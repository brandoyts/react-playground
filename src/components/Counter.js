import React from "react";
import useCounter from "../hooks/useCounter";

function Counter() {
  const [counter, increment, decrement] = useCounter();

  return (
    <div className="counter">
      <h1>Counter: {counter}</h1>
      <button onClick={increment}>increment</button>
      <button onClick={decrement}>decrement</button>
    </div>
  );
}

export default Counter;
