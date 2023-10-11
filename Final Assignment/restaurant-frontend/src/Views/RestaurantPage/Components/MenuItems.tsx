import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../../Redux/Slices/cartSlice";

type item = {
  menuItem: {
    card: {
      info: {
        name: string;
        id: number;
      };
    };
  };
};
const MenuItem = (props: item) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart(props.menuItem.card.info.id));
  };

  return (
    <div>
      <p>{props.menuItem?.card.info.name}</p>
      <button onClick={handleAddToCart}>Add to cart</button>
    </div>
  );
};

export default MenuItem;
