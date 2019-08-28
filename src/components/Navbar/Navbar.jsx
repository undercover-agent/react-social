import React, { Component } from "react";
import style from "./Navbar.module.css";
import { NavLink } from "react-router-dom";

const links = [
  { to: "/", label: "Home", exact: true },
  { to: "/profile", label: "My profile", exact: false },
  { to: "/messages", label: "Messages", exact: false },
  { to: "/news", label: "News", exact: false },
  { to: "/settings", label: "Settings", exact: false }
];

class Navbar extends Component {
  renderLinks() {
    return links.map((value, index) => {
      return (
        <li key={index}>
          <NavLink
            to={value.to}
            exact={value.exact}
            activeClassName={style.active}
          >
            {value.label}
          </NavLink>
        </li>
      );
    });
  }

  render() {
    return (
      <nav className={style.Navbar}>
        <ul>{this.renderLinks()}</ul>
      </nav>
    );
  }
}

export default Navbar;
