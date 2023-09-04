import React from "react";
import { useParams } from "react-router-dom";

const User = () => {
  const params = useParams();
  const { name } = params;
  return (
    <div>
      <h1>This is {name}'s Page</h1>
    </div>
  );
};

export default User;
