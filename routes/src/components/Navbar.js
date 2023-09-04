import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <ul>
        <li>
          <NavLink
            style={({ isActive }) => {
              return { color: isActive ? "skyblue" : "red" };
            }}
            className="navbarlink"
            to="/about"
          >
            About{" "}
          </NavLink>
        </li>
        <li>
          <NavLink
            style={({ isActive }) => {
              return { color: isActive ? "skyblue" : "red" };
            }}
            className="navbarlink"
            to="/home"
          >
            Home{" "}
          </NavLink>
        </li>
        <li>
          <NavLink
            style={({ isActive }) => {
              return { color: isActive ? "skyblue" : "red" };
            }}
            className="navbarlink"
            to="/user/Anil"
          >
            Anil{" "}
          </NavLink>
        </li>
        <li>
          <NavLink
            style={({ isActive }) => {
              return { color: isActive ? "skyblue" : "red" };
            }}
            className="navbarlink"
            to="/user/Peter"
          >
            Peter{" "}
          </NavLink>
          <NavLink
            style={({ isActive }) => {
              return { color: isActive ? "skyblue" : "red" };
            }}
            className="navbarlink"
            to="/filter"
          >
            Filter{" "}
          </NavLink>
          <NavLink
            style={({ isActive }) => {
              return { color: isActive ? "skyblue" : "red" };
            }}
            className="navbarlink"
            to="/contact"
          >
            Contact{" "}
          </NavLink>
          <NavLink
            style={({ isActive }) => {
              return { color: isActive ? "skyblue" : "red" };
            }}
            className="navbarlink"
            to="/login"
          >
            Login{" "}
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
