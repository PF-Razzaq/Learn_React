import React, { useState } from "react";

const UseStateArray = () => {
  const myBioData = [
    {
      id: 0,
      Name: "Abdul Razzaq",
      age: 25,
    },
    {
      id: 1,
      Name: "Lit Rashid",
      age: 27,
    },
    {
      id: 2,
      Name: "Muhammad Ishaq",
      age: 23,
    },
  ];

  const btnClear = () => {
    setMyArray([]);
  };

  const [myArray, setMyArray] = useState(myBioData);

  return (
    <>
      {myArray.map((curEle) => (
        <h4 key={curEle.id}>
          Id: ; {curEle.id} Name: {curEle.Name} ; and Age: {curEle.age}
        </h4>
      ))}
      <button onClick={btnClear}>Clear</button>
    </>
  );
};

export default UseStateArray;
