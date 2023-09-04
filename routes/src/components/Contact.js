import React from "react";
import { Link, Outlet } from "react-router-dom";

const Contact = () => {
  return (
    <div>
      <h1>This is a my Contact services</h1>
      <h3>Below these links Channel,Company and Others</h3>
      <Link to="Company">Company</Link>
      <Link to="Channel">Channel</Link>
      <Link to="Other">Other</Link>
      <Outlet />
    </div>
  );
};

export default Contact;
