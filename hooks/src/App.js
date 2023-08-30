import React from "react";
import logo from "./logo.svg";
import "./App.css";
import UseState from "./components/UseState";
import UseStateArray from "./components/UseStateArray";
import UseStateObject from "./components/UseStateObject";
import LoginForm from "./components/LoginForm";
import UseEffect1 from "./components/UseEffect1";
import UseEffect2 from "./components/UseEffect2";
import UseEffectApi from "./components/UseEffectApi";
import UseReducerCounter from "./components/UseReducerCounter";
import ComponentA from "./components/ComponentA";
import ComponentB from "./components/ComponentB";
import ComponentC from "./components/ComponentC";
import { useReducer } from "react";
import DataFetchingReduce from "./components/DataFetchingReduce";
import DataFetchingReduce2 from "./components/DataFetchingReduce2";
import CustomHook1 from "./components/CustomHook1";
import CustomHook2 from "./components/CustomHook2";

export const CountContext = React.createContext();
// const initialState = 0;
// const reducer = (state, action) => {
//   switch (action) {
//     case "increament":
//       return state + 1;
//     case "decreament":
//       return state - 1;
//     case "reset":
//       return initialState;
//     default:
//       return state;
//   }
// };

function App() {
  // const [count, dispatch] = useReducer(reducer, initialState);

  return (
    // <CountContext.Provider
    //   value={{ countState: count, countDispatch: dispatch }}
    // >
    //   <div className="App">
    //     <h2 className="text-center position-absolute top-50 start-50 mb-5 heading">
    //       Count-{count}
    //     </h2>
    //     <DataFetchingReduce />
    //     <ComponentB />
    //     <ComponentC />
    //   </div>
    // </CountContext.Provider>
    <div className="App text-center position-absolute top-50 start-50 mb-5">
      <CustomHook1 />
      <CustomHook2 />
    </div>
  );
}

export default App;
