import React from "react";
import { NavLink } from "react-router-dom";

const MainNav = () => {
  return (
    <nav className="main-nav">
      <ul>
        <li>
          <NavLink to="/puppies">Puppies</NavLink>
        </li>
        <li>
          <NavLink to="/kittens">Kittens</NavLink>
        </li>
        <li>
          <NavLink to="/hamsters">Hamsters</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default MainNav;
