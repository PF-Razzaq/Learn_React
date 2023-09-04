import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const login = () => {
    localStorage.setItem("login", true);
    navigate("/home");
  };
  const navigate = useNavigate();
  useEffect(() => {
    let login = localStorage.getItem("login");
    if (login) {
      navigate("/home");
    }
  });
  return (
    <div>
      <h2>Login Page</h2>
      <input type="text" /> <br />
      <input type="text" />
      <br />
      <button onClick={login}>Login</button>
    </div>
  );
};

export default Login;
