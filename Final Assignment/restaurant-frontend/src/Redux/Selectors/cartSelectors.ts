import { item } from "../../Views/RestaurantPage/Types/item";

const selectCart = (state: {
  cart: {
    cartItems: item[];
    isEmpty: boolean;
  };
}) => state.cart;

const selectTotalPrice = (state: {
  cart: {
    cartItems: item[];
    isEmpty: boolean;
  };
}) => {
  return state.cart.cartItems.reduce((total, item) => {
    return total + item.price * item.counter;
  }, 0);
};

export { selectCart, selectTotalPrice };
