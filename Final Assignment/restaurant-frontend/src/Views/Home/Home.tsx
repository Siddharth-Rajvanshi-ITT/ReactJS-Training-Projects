import React, { useEffect, useState } from "react";
import { fetchRestaurants } from "../../Http-Services/getAllRestaurants";
import RestaurantCard from "./Components/RestaurantCard/RestaurantCard";
import styles from "./Home.module.css";
import { useDispatch, useSelector } from "react-redux";
import { actions } from "../../Redux/Slices/restaurantSlice";
import { useNavigate } from "react-router-dom";
import SearchBar from "../../Components/SearchBar/SearchBar";
import { restaurant } from "./Types/restaurantTypes";
import { selectAllRestaurants } from "../../Redux/Selectors/restaurantsSelectors";
import HomeSkeleton from "./Components/Skeleton/Index";

const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [restaurants, setRestaurants] = useState<restaurant[]>([]);
  const AllRestaurants = useSelector(selectAllRestaurants);

  useEffect(() => {
    dispatch(actions.fetchRestaurantsStart());

    fetchRestaurants()
      .then((data) => {
        console.log(data);
        // dispatch(actions.fetchRestaurantsSuccess(data.data));
      })
      .catch((error) => dispatch(actions.fetchRestaurantsFailure(error)));
  }, [dispatch]);

  const handleNavigate = (id: number) => {
    navigate(`restaurant/${id}`);
  };

  const handleChange = (filteredData: restaurant[]) => {
    setRestaurants(filteredData);
  };

  return (
    <>
      {restaurants ? (
        <div className={styles.container}>
          <div className={styles.searchSection}>
            <h1 className={styles.searchHeading}>Discover & Book</h1>
            <h3 className={styles.subheading}>
              The best restaurants at the best price
            </h3>
            <SearchBar
              setSearchResults={handleChange}
              searchItems={AllRestaurants}
            />
          </div>
          <h1>Visit Your Favourite Restaurants</h1>
          <div className={styles.homeContainer}>
            {restaurants.map((restaurant, key) => {
              return (
                <div
                  className={styles.card}
                  onClick={() => handleNavigate(restaurant.data.id)}
                  key={key}
                >
                  <RestaurantCard restaurantData={restaurant} />
                </div>
              );
            })}
          </div>
        </div>
      ) : (
        <HomeSkeleton />
      )}
    </>
  );
};

export default Home;
