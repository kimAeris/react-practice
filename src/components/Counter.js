import React from "react";
import { useCounterStore } from "../store";

const Counter = () => {
  const { count, increment, reset, setNumber } = useCounterStore();
  return (
    <div className="counter">
      <p>{count}</p>
      <button onClick={increment}>up</button>
      <button onClick={reset}>reset</button>
      <button onClick={() => setNumber(3)}>setNumber</button>
    </div>
  );
};

export default Counter;
