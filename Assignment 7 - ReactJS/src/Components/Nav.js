import React from "react";
import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/prod">Products</Link>
      <Link to="/cart">Cart</Link>
    </div>
  );
};
