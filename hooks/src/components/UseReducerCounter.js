import React, { useReducer } from "react";

const initialState = {
  firstCounter: 0,
  secondCounter: 10,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "increament":
      return { ...state, firstCounter: state.firstCounter + action.value };
    case "decreament":
      return { ...state, firstCounter: state.firstCounter - action.value };
    case "increament2":
      return { ...state, secondCounter: state.secondCounter + action.value };
    case "decreament2":
      return { ...state, secondCounter: state.secondCounter - action.value };
    case "reset":
      return initialState;
    default:
      return state;
  }
};

const UseReducerCounter = () => {
  const [count, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="text-center position-absolute top-50 start-50 translate-middle">
      <h3>FirstCounter-{count.firstCounter}</h3>
      <button
        className="p-2 bg-info text-white fw-bold fs-4 m-2"
        onClick={() => dispatch({ type: "increament", value: 1 })}
      >
        Increament
      </button>
      <button
        className="p-2 bg-info text-white fw-bold fs-4 m-2"
        onClick={() => dispatch({ type: "decreament", value: 1 })}
      >
        Decreament
      </button>
      <button
        className="p-2 bg-info text-white fw-bold fs-4 m-2"
        onClick={() => dispatch({ type: "increament", value: 5 })}
      >
        Increament 5
      </button>
      <button
        className="p-2 bg-info text-white fw-bold fs-4 m-2"
        onClick={() => dispatch({ type: "decreament", value: 5 })}
      >
        Decreament 5
      </button>

      <div>
        <h3>SecondCounter-{count.secondCounter}</h3>
        <button
          className="p-2 bg-info text-white fw-bold fs-4 m-2"
          onClick={() => dispatch({ type: "increament2", value: 1 })}
        >
          Increament
        </button>
        <button
          className="p-2 bg-info text-white fw-bold fs-4 m-2"
          onClick={() => dispatch({ type: "decreament2", value: 1 })}
        >
          Decreament
        </button>
      </div>
      <button
        className="p-2 bg-info text-white fw-bold fs-4 m-2 mt-5"
        onClick={() => dispatch({ type: "reset" })}
      >
        Reset
      </button>
    </div>
  );
};

export default UseReducerCounter;
