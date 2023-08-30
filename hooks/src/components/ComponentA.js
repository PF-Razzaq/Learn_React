import React, { useContext } from "react";
import { CountContext } from "../App";

const ComponentA = () => {
  const countContext = useContext(CountContext);
  return (
    <div className="text-center position-absolute top-50 start-50 translate-middle">
      <span className="fw-bold fs-2 me-2">
        Component A - {countContext.countState}
      </span>
      <button
        className="p-2 bg-info text-white fw-bold fs-4 m-2"
        onClick={() => countContext.countDispatch("increament")}
      >
        Increament
      </button>
      <button
        className="p-2 bg-info text-white fw-bold fs-4 m-2"
        onClick={() => countContext.countDispatch("decreament")}
      >
        Decreament
      </button>
      <button
        className="p-2 bg-info text-white fw-bold fs-4 m-2"
        onClick={() => countContext.countDispatch("reset")}
      >
        Reset
      </button>
    </div>
  );
};

export default ComponentA;
