import logo from "./logo.svg";
import { BrowserRouter, Routes, Route, Link, Navigate } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import About from "./components/About";
import Navbar from "./components/Navbar";
import User from "./components/User";
import Filter from "./components/Filter";
import Contact from "./components/Contact";
import Company from "./components/Company";
import Channel from "./components/Channel";
import Other from "./components/Other";
import Login from "./components/Login";
import Protected from "./components/Protected";
import { Profiler } from "react";
import MyComponent from "./components/MyComponent";
import MyProfilerComponent from "./components/MyComponent";
import PortalDemo from "./components/PortalDemo";

function App() {
  return (
    <div className="App">
      {/* <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/home" element={<Protected Component={Home} />} />
          <Route path="/login" element={<Login />} />
          <Route path="/about" element={<Protected Component={About} />} />
          <Route path="/user/:name" element={<User />} />
          <Route path="/*" element={<Navigate to="/home" />} />
          <Route path="/filter" element={<Protected Component={Filter} />} />
          <Route path="/Contact/" element={<Contact />}>
            <Route path="company" element={<Company />} />
            <Route path="channel" element={<Channel />} />
            <Route path="other" element={<Other />} />
          </Route>
        </Routes>
      </BrowserRouter> */}
      <PortalDemo />
    </div>
  );
}

export default App;
