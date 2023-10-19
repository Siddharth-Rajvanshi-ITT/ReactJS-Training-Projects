import React from "react";
import { MenuItems } from "../../Types/menuTypes";
import styles from "./MenuItems.module.css";
import yelloStar from "../../../../Assets/Images/Icons/yellowStar.svg";
import star from "../../../../Assets/Images/Icons/star.svg";
import { useDispatch } from "react-redux";
import { actions } from "../../../../Redux/Slices/cartSlice";
import constants from "../../../../Utilities/Constansts/lableConstancts.json";

type item = {
  menuItem: MenuItems;
};
const MenuItem = (props: item) => {
  const dispatch = useDispatch();
  const rating =
    Math.round(+props.menuItem.card.info.ratings.aggregatedRating.rating) < 2
      ? "bad"
      : Math.round(+props.menuItem.card.info.ratings.aggregatedRating.rating) <
        4
      ? "mild"
      : Math.round(+props.menuItem.card.info.ratings.aggregatedRating.rating) >
        3.9
      ? "good"
      : "";

  const handleAddToCart = () => {
    dispatch(actions.addToCart(props.menuItem.card.info));
  };

  return (
    <div className={styles.menuItem}>
      <div
        className={styles.itemImageContainer}
        style={{
          backgroundImage: `url('https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/${props.menuItem.card.info.imageId}')`,
        }}
      >
        <span className={styles.category}>
          {props.menuItem.card.info.category}
        </span>
        {props.menuItem.card.info.isBestseller && (
          <span className={styles.bestseller}>
            {constants.restaurantDetails.bestSeller}
          </span>
        )}
        <div className={styles.ratingSection}>
          <span>
            {Array.from(
              {
                length: Math.round(
                  +props.menuItem.card.info.ratings.aggregatedRating.rating
                ),
              },
              (_, index) => (
                <img
                  src={yelloStar}
                  alt="Star"
                  key={index}
                  className={styles.star}
                />
              )
            )}
            {Array.from(
              {
                length:
                  5 -
                  Math.round(
                    +props.menuItem.card.info.ratings.aggregatedRating.rating
                  ),
              },
              (_, index) => (
                <img
                  src={star}
                  alt="Star"
                  key={index}
                  className={styles.star}
                />
              )
            )}
          </span>
          <span className={`${styles.rating} ${styles[rating]}`}>
            {props.menuItem.card.info.ratings.aggregatedRating.rating}
          </span>
        </div>
        <span className={styles.reviews}>
          {props.menuItem.card.info.ratings.aggregatedRating.ratingCountV2}{" "}
          {constants.restaurantDetails.reviews}
        </span>
      </div>
      <div className={styles.itemDetails}>
        <h2 className={styles.name}>{props.menuItem.card.info.name}</h2>
        <p className={styles.description}>
          {props.menuItem.card.info.description}
        </p>
        <h3 className={styles.price}>
          {constants.restaurantDetails.price} {props.menuItem.card.info.price}{" "}
          {constants.restaurantDetails.currency}
        </h3>
        <button className={styles.addToCart} onClick={handleAddToCart}>
          {constants.cart.addToCard}
        </button>
      </div>
    </div>
  );
};

export default MenuItem;
