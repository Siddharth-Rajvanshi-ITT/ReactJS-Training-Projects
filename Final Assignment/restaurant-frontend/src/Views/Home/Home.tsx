import React, { useEffect } from "react";
import { fetchRestaurants } from "../../Http-Services/getAllRestaurants";
import RestaurantCard from "./Components/RestaurantCard";
import "./Home.css";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchRestaurantsStart,
  fetchRestaurantsFailure,
  fetchRestaurantsSuccess,
} from "../../Redux/Slices/restaurantSlice";
import { selectAllRestaurants } from "../../Redux/Selectors/restaurantsSelectors";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const dispatch = useDispatch();
  const AllRestaurants = useSelector(selectAllRestaurants);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchRestaurantsStart());

    fetchRestaurants()
      .then((data) => dispatch(fetchRestaurantsSuccess(data.data)))
      .catch((error) => dispatch(fetchRestaurantsFailure(error)));
  }, [dispatch]);

  const handleNavigate = (id: number) => {
    navigate(`restaurant/${id}`);
  };

  return (
    <div>
      <div className="homeContainer">
        {AllRestaurants.map((restaurant, key) => {
          return (
            <div
              className="card"
              onClick={() => handleNavigate(restaurant.data.id)}
              key={key}
            >
              <RestaurantCard restaurantData={restaurant} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
