import React from "react";
import { NavLink, useRouteMatch } from "react-router-dom";
import { routes } from "../routes";
import "../styles.css";

const NavBar = () => {
  let match = useRouteMatch("/review/:reviewId");

  return match !== null ? null : (
    <nav>
      <ul>
        <li>
          <NavLink exact to={routes.HOME}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to={routes.SHOP}>Shop</NavLink>
        </li>
        <li>
          <NavLink to={routes.REVIEWS}>Reviews</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
