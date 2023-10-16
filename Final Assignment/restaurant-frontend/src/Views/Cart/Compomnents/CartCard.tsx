import React from "react";
import styles from "./CartCard.module.css";
import { item } from "../../RestaurantPage/Types/item";

type cartItem = {
  cartItem: item;
};

const CartCard = (props: cartItem) => {
  return (
    <div className={styles.cartCard}>
      <img
        className={styles.cartImg}
        src={`https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/${props.cartItem.imageId}`}
        alt=""
      />
      <h2>{props.cartItem.name}</h2>
    </div>
  );
};

export default CartCard;
