import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div>
      <h1>About Page</h1>
      <p>This a About page and this is a awesome page.</p>
      <p>And we also a finish of react router</p>
      <br />
      <Link to="/home">Go To Home Page </Link>
    </div>
  );
};

export default About;
