import React from "react";
import useCounter from "./useCounter";

const CustomHook2 = () => {
  const [count, increament, decreament, reset] = useCounter(10, 5);

  return (
    <div>
      <h2>Count-{count}</h2>
      <button onClick={increament}>Increamen</button>
      <button onClick={decreament}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
};

export default CustomHook2;
