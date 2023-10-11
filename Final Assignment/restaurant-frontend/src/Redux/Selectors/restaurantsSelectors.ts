import { restaurant } from "../../Types/restaurantTypes";

const selectIsAuthenticated = (state: { auth: { isAuthenticated: boolean } }) =>
  state.auth.isAuthenticated;

const selectAllRestaurants = (state: {
  restaurant: { restaurants: restaurant[] };
}) => state.restaurant.restaurants;

export { selectIsAuthenticated, selectAllRestaurants };
