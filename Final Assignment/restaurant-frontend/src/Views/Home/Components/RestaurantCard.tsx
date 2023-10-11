import React from "react";

import "./RestaurantCard.css";

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
  const handleNavigate = () => {};
  return (
    <div className="restaurantCard" onClick={handleNavigate}>
      <img
        className="restaurantImg"
        src={`https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/${props.restaurantData.data.cloudinaryImageId}`}
        alt=""
      />
      <h2>{props.restaurantData.data.name}</h2>
      <p>{props.restaurantData.data.area}</p>
      <p>{props.restaurantData.data.avgRating}</p>
      <p>
        {props.restaurantData.data.availability ? "Available" : "Unavailable"}
      </p>
      <p>{props.restaurantData.data.veg ? "Veg" : "Non-Veg"}</p>
    </div>
  );
};

export default RestaurantCard;
