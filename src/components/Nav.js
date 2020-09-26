import React from "react";
import { NavLink } from "react-router-dom";

function Nav() {
  return (
    <header className="nav">
      <ul>
        <li>
          <NavLink to="/counter">Counter</NavLink>
        </li>
        <li>
          <NavLink to="/users">Users</NavLink>
        </li>
        <li>
          <NavLink to="/todos">Todos</NavLink>
        </li>
        <li>
          <NavLink to="/comments">Comments</NavLink>
        </li>
      </ul>
    </header>
  );
}

export default Nav;
