import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Home = () => {
  const location = useLocation();
  console.log(location);

  const navigate = useNavigate();

  const navToPage = (url) => {
    navigate(url);
  };
  return (
    <div>
      <h1 style={{ color: "red" }}>Home Page</h1>
      <p style={{ color: "yellow" }}>
        This a home page and this is a awesome page.
      </p>
      <p>And here we learning a react router</p>
      <br />
      <Link to="/about">Go to About Page </Link> <br />
      <Link to="/user">Go to User Page </Link>
      <button onClick={() => navToPage("/filter")}>Go to User Page</button>
      <button onClick={() => navToPage("/about")}>Go to About Page</button>
    </div>
  );
};

export default Home;
