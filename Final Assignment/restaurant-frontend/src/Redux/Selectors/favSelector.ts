import { restaurant } from "../../Views/Home/Types/restaurantTypes";

const selectFavorite = (state: {
  favorite: {
    favRestaurants: restaurant[];
  };
}) => state.favorite;

export { selectFavorite };
