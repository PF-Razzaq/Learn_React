import React from "react";
import { useSearchParams } from "react-router-dom";

const Filter = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const age = searchParams.get("age");
  const city = searchParams.get("city");
  return (
    <div>
      <h2>This is Filter Page</h2>
      <h3>My age is {age} </h3>
      <h3>I am Living in {city} </h3>
      <input
        type="text"
        placeholder="Which City are you Living"
        onChange={(e) => setSearchParams({ city: e.target.value, age: 20 })}
      />
      <button onClick={() => setSearchParams("age=30")}>Set Age</button>
    </div>
  );
};

export default Filter;
