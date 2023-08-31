import React, { useMemo, useState } from "react";

const CounterUseMemo = () => {
  const [counterOne, setCounterOne] = useState(0);
  const [counterTwo, setCounterTwo] = useState(0);
  const incrementOne = useMemo(() => {
    setCounterOne(counterOne + 1);
  }, [counterOne]);
  const incrementTwo = () => {
    setCounterTwo(counterTwo + 1);
  };
  return (
    <div>
      <div>
        <button className="my-2" onClick={incrementOne}>
          Counter One - {counterOne}
        </button>
      </div>
      <div>
        <button onClick={incrementTwo}>Counter Two - {counterTwo}</button>
      </div>
    </div>
  );
};

export default React.memo(CounterUseMemo);
