import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div>
      <h1 style={{ color: "brown" }}>About Page</h1>
      <p style={{ color: "blue" }}>
        This a About page and this is a awesome page.
      </p>
      <p>And we also a finish of react router</p>
      <br />
      <Link to="/home">Go To Home Page </Link>
    </div>
  );
};

export default About;
