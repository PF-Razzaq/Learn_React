import React, { useContext } from "react";
import { CountContext } from "../App";

const ComponentD = () => {
  const countContext = useContext(CountContext);
  return (
    <div
      className="text-center position-absolute top-50 start-50 translate-middle"
      style={{ margin: "5rem 0 0 0" }}
    >
      <span className="fw-bold fs-2 me-2">
        Component D - {countContext.countState}
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

export default ComponentD;
