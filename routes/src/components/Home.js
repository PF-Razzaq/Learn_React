import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>Home Page</h1>
      <p>This a home page and this is a awesome page.</p>
      <p>And here we learning a react router</p>
      <br />
      <Link to="/about">Go to About Page </Link>
    </div>
  );
};

export default Home;
