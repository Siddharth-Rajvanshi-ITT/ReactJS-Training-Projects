import React, { useState } from "react";
import Product from "./Product";
import { useAppSelector } from "../Features/React-hooks";

export const Home = () => {
  const [showItems, setShowhowItems] = useState(6);
  const products = useAppSelector((state) => state.product.data);

  const handleLoadedItems = () => {
    setShowhowItems(showItems + 6);
  };

  return (
    <div>
      <div className="container">
        {products.slice(0, showItems).map((element, key) => {
          return <Product key={key} product={element} />;
        })}
      </div>
      {showItems <= products.length && (
        <button onClick={handleLoadedItems}>Load More</button>
      )}
    </div>
  );
};
