import React from "react";
import styles from "./CartCard.module.css";
import { item } from "../../../RestaurantPage/Types/item";
import { useDispatch } from "react-redux";
import { actions } from "../../../../Redux/Slices/cartSlice";
import constants from "../../../../Utilities/Constansts/lableConstancts.json";

type cartItem = {
  cartItem: item;
};

const CartCard = (props: cartItem) => {
  const dispatch = useDispatch();

  const handleRemoveItem = () => {
    dispatch(actions.removeFromCart(props.cartItem.id));
  };

  const handleAdd = () => {
    dispatch(actions.increaseCount(props.cartItem.id));
  };

  const handleMinus = () => {
    dispatch(actions.decreaseCount(props.cartItem.id));
  };

  return (
    <tr className={styles.itemContainer}>
      <td className={styles.productDetailsContainer}>
        <img
          className={styles.cartImg}
          src={`https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/${props.cartItem.imageId}`}
          alt=""
        />
        <p>{props.cartItem.name}</p>
      </td>
      <td className={styles.counterContainer}>
        <span onClick={handleMinus} className={styles.counterBtn}>
          -
        </span>
        <span>{props.cartItem.counter}</span>
        <span onClick={handleAdd} className={styles.counterBtn}>
          +
        </span>
      </td>
      <td className={styles.priceContainer}>
        {constants.restaurantDetails.currency}{" "}
        {props.cartItem.price * props.cartItem.counter}
      </td>
      <td className={styles.actionBtnContainer}>
        <button onClick={handleRemoveItem} className={styles.actionBtn}>
          X
        </button>
      </td>
    </tr>
  );
};

export default CartCard;
