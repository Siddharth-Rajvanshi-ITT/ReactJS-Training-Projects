import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectCart } from "../../Redux/Selectors/cartSelectors";
import { actions } from "../../Redux/Slices/cartSlice";
import constants from "../../Utilities/Constansts/lableConstancts.json";
import CartCard from "./Compomnents/CartCard";
import styles from "./Cart.module.css";

const Cart = () => {
  const cart = useSelector(selectCart);
  const dispatch = useDispatch();

  const hanldeEmptyCart = () => {
    dispatch(actions.emptyCart());
  };

  return (
    <div>
      {cart.isEmpty ? constants.cart.emptyCartMessage : "Cart is not empty"}
      <div className={styles.cartContainer}>
        {cart.cartItems.map((item, key) => {
          console.log(item);
          return (
            <div key={key} className={styles.card}>
              <CartCard cartItem={item} />
            </div>
          );
        })}
      </div>
      <br />
      {!cart.isEmpty && (
        <button onClick={hanldeEmptyCart}>{constants.cart.emptyCart}</button>
      )}
    </div>
  );
};

export default Cart;
