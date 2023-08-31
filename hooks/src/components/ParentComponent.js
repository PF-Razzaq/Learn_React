import React, { useState, useCallback } from "react";
import Title from "./Title";
import Count from "./Count";
import Button from "./Button";

const ParentComponent = () => {
  const [age, setAge] = useState(25);
  const [sallery, setSallery] = useState(50000);

  const incrementAge = useCallback(() => {
    setAge(age + 1);
  }, [age]);
  const incrementSallery = useCallback(() => {
    setSallery(sallery + 1000);
  }, [sallery]);

  return (
    <div>
      <Title />
      <Count text="Age" count={age} />
      <Button handleClick={incrementAge}>Increment Age</Button>
      <Count text="sallary" count={sallery} />
      <Button handleClick={incrementSallery}>Increment Sallery </Button>
    </div>
  );
};

export default ParentComponent;
