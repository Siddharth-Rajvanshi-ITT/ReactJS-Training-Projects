import { item } from "../../Views/RestaurantPage/Types/item";

const selectCart = (state: {
  cart: {
    cartItems: item[];
    isEmpty: boolean;
  };
}) => state.cart;

export { selectCart };
