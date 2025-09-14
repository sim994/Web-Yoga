import React from "react";
import { NavLink } from "react-router-dom";
export function Header() {
  return (
    <nav>
      <div className="logo">
        <p>_Web_Yoga</p>
      </div>
      <ul>
        <NavLink
          to="/home"
          className={({ isActive }) => (isActive ? "red" : "black")}
        >
          <li>Home</li>
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) => (isActive ? "red" : "black")}
        >
          <li>About</li>
        </NavLink>
        <NavLink
          to="/classes"
          className={({ isActive }) => (isActive ? "red" : "black")}
        >
          <li>Classes</li>
        </NavLink>
        <NavLink
          to="/membership"
          className={({ isActive }) => (isActive ? "red" : "black")}
        >
          <li>Membership</li>
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) => (isActive ? "red" : "black")}
        >
          <li>Contact</li>
        </NavLink>
      </ul>
      <div className="buttons">
        <NavLink to="/signin">
          <button className="signin">Singin</button>
        </NavLink>
      </div>
    </nav>
  );
}
