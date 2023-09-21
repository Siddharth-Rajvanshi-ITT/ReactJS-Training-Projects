import React from "react";
import { useSelector } from "react-redux";
import Product from "./Product";

export const Home = () => {
  const products = useSelector((state) => state.product.data);

  return (
    <div className="container">
      {products.map((element, key) => {
        return <Product key={key} product={element} />;
      })}
    </div>
  );
};
