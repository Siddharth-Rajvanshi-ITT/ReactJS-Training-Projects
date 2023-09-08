import React from "react";
import { Link } from "react-router-dom";

export const NavTabs = () => {
  return (
    <div className="NavTabs">
      <Link to="/">Dashboard</Link>
      <Link to="/attendance">Attandance</Link>
      <Link to="/classes">Classes</Link>
      <Link to="/post-assignment">Post Assignment</Link>
      <Link to="student-assignment">Student Assignment</Link>
    </div>
  );
};
