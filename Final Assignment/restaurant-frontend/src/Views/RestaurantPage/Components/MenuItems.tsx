import React from "react";
import { useDispatch } from "react-redux";
import { actions } from "../../../Redux/Slices/cartSlice";
import { MenuItems } from "../Types/menuTypes";
import constants from "../../../Utilities/Constansts/lableConstancts.json";
import styles from "./MenuItems.module.css";

type item = {
  menuItem: MenuItems;
};
const MenuItem = (props: item) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(actions.addToCart(props.menuItem.card.info));
  };

  return (
    <div className={styles.menuItems}>
      <img
        className={styles.itemImg}
        src={`https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/${props.menuItem.card.info.imageId}`}
        alt=""
      />
      <h2>{props.menuItem?.card.info.name}</h2>
      <p>{props.menuItem.card.info.isVeg ? "Veg" : "NonVeg"}</p>
      <button onClick={handleAddToCart}>{constants.cart.addToCard}</button>
    </div>
  );
};

export default MenuItem;
