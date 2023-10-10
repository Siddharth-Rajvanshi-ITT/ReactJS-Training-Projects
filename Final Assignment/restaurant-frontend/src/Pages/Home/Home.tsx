import React, { useEffect } from "react";
import { fetchRestaurants } from "../../http-services/getRestaurants";
import RestaurantCard from "./Components/RestaurantCard";
import "./Home.css";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchRestaurantsStart,
  fetchRestaurantsFailure,
  fetchRestaurantsSuccess,
} from "../../Redux/Slices/restaurantSlice";

type restaurant = {
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

const Home = () => {
  const isAuthenticated = useSelector(
    (state: { auth: { isAuthenticated: boolean } }) =>
      state.auth.isAuthenticated
  );

  const dispatch = useDispatch();
  const AllRestaurants = useSelector(
    (state: { restaurant: { restaurants: restaurant[] } }) =>
      state.restaurant.restaurants
  );

  useEffect(() => {
    dispatch(fetchRestaurantsStart());

    fetchRestaurants()
      .then((data) => dispatch(fetchRestaurantsSuccess(data.data)))
      .catch((error) => dispatch(fetchRestaurantsFailure(error)));
  }, [dispatch]);

  console.log(AllRestaurants);
  console.log(isAuthenticated);

  const handleNavigate = () => {};

  return (
    <div className="homeContainer">
      {AllRestaurants.map((restaurant, key) => {
        return (
          <div className="card" onClick={handleNavigate} key={key}>
            <RestaurantCard restaurantData={restaurant} />
          </div>
        );
      })}
    </div>
  );
};

export default Home;
