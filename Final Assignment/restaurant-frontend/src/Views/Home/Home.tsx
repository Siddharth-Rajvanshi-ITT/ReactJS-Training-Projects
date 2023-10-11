import React, { useEffect, useState } from "react";
import { fetchRestaurants } from "../../Http-Services/getAllRestaurants";
import RestaurantCard from "./Components/RestaurantCard";
import "./Home.css";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchRestaurantsStart,
  fetchRestaurantsFailure,
  fetchRestaurantsSuccess,
} from "../../Redux/Slices/restaurantSlice";
import { useNavigate } from "react-router-dom";
import SearchBar from "../../Components/SearchBar/SearchBar";
import { restaurant } from "../../Types/restaurantTypes";
import { selectAllRestaurants } from "../../Redux/Selectors/restaurantsSelectors";

const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [restaurants, setRestaurants] = useState<restaurant[]>([]);
  const AllRestaurants = useSelector(selectAllRestaurants);

  useEffect(() => {
    dispatch(fetchRestaurantsStart());

    fetchRestaurants()
      .then((data) => dispatch(fetchRestaurantsSuccess(data.data)))
      .catch((error) => dispatch(fetchRestaurantsFailure(error)));
  }, [dispatch]);

  const handleNavigate = (id: number) => {
    navigate(`restaurant/${id}`);
  };

  const handleChange = (filteredData: restaurant[]) => {
    setRestaurants(filteredData);
  };

  return (
    <div>
      <SearchBar setSearchResults={handleChange} searchItems={AllRestaurants} />
      <div className="homeContainer">
        {restaurants.map((restaurant, key) => {
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
