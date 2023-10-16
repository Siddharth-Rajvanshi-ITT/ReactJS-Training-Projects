import React from "react";

import styles from "./RestaurantCard.module.css";

type restaurant = {
  restaurantData: {
    type: string;
    subtype: string;
    data: {
      id: number;
      name: string;
      area: string;
      totalRatingsString: string;
      cloudinaryImageId: string;
      cuisines: string[];
      address: string;
      deliveryTime: number;
      locality: string;
      veg: boolean;
      favorite: boolean;
      availability: {
        opened: boolean;
        nextOpenMessage: string;
        nextCloseMessage: string;
      };
      avgRating: string;
      totalRatings: number;
      new: boolean;
    };
  };
};

const RestaurantCard = (props: restaurant) => {
  const rating =
    +props.restaurantData.data.avgRating < 2
      ? "bad"
      : +props.restaurantData.data.avgRating < 4
      ? "mild"
      : +props.restaurantData.data.avgRating > 3.9
      ? "good"
      : "";
  const handleNavigate = () => {};
  return (
    <>
      <div
        className={styles.restaurantCard}
        style={{
          backgroundImage: `url(https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/${props.restaurantData.data.cloudinaryImageId})`,
        }}
        onClick={handleNavigate}
      >
        <div className={styles.detailsContainer}>
          {props.restaurantData.data.new && (
            <p className={styles.newRestaurant}>New</p>
          )}
          <p className={styles.availability}>
            {props.restaurantData.data.availability
              ? "Available"
              : "Unavailable"}
          </p>
          <p
            className={
              props.restaurantData.data.veg ? styles.veg : styles.nonVeg
            }
          >
            {props.restaurantData.data.veg ? "Veg" : "Non-Veg"}
          </p>
          <div className={styles.details}>
            <h2 className={styles.name}>{props.restaurantData.data.name}</h2>
            <p className={styles.area}>{props.restaurantData.data.area}</p>
          </div>
        </div>
      </div>
      <div className={styles.priceContainer}>
        <span className={styles.totalRatings}>
          {props.restaurantData.data.totalRatings} Reviews{" "}
        </span>
        {props.restaurantData.data.totalRatings && (
          <span className={`${styles.rating} ${styles[rating]}`}>
            {props.restaurantData.data.avgRating} ⭐
          </span>
        )}
      </div>
    </>
  );
};

export default RestaurantCard;
