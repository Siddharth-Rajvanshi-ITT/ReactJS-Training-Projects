import React from "react";
import { NavTabs } from "./NavTabs";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <img
        src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80s"
        alt=""
        className="profilePic"
      />
      <h1>Priency. S</h1>
      <h2>Teacher</h2>
      <NavTabs />
    </div>
  );
};

export default Sidebar;
