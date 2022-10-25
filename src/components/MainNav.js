import React from "react";
import { NavLink } from "react-router-dom";

const MainNav = ({ search }) => {
  return (
    <nav className="main-nav">
      <ul>
        <li>
          <NavLink to="/puppies" onClick={() => search("puppies")}>
            Puppies
          </NavLink>
        </li>
        <li>
          <NavLink to="/kittens" onClick={() => search("kittens")}>
            Kittens
          </NavLink>
        </li>
        <li>
          <NavLink to="/hamsters" onClick={() => search("hamsters")}>
            Hamsters
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default MainNav;
