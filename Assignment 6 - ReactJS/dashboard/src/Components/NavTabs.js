import React from "react";
import { NavLink } from "react-router-dom";

export const NavTabs = () => {
  return (
    <div className="NavTabs">
      <NavLink
        to="/"
        activeClassName="active-link navlinks"
        className="navlinks"
      >
        Dashboard
      </NavLink>
      <NavLink
        to="/attendance"
        activeClassName="active-link"
        className="navlinks"
      >
        Attandance
      </NavLink>
      <NavLink to="/classes" activeClassName="active-link" className="navlinks">
        Classes
      </NavLink>
      <NavLink
        to="/post-assignment"
        activeClassName="active-link"
        className="navlinks"
      >
        Post Assignment
      </NavLink>
      <NavLink
        to="student-assignment"
        activeClassName="active-link"
        className="navlinks"
      >
        Student Assignment
      </NavLink>
    </div>
  );
};
