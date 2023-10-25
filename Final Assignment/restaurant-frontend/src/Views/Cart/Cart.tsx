import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectCart } from "../../Redux/Selectors/cartSelectors";
import { actions } from "../../Redux/Slices/cartSlice";
import constants from "../../Utilities/Constansts/lableConstancts.json";
import CartCard from "./Compomnents/CartCard/CartCard";
import styles from "./Cart.module.css";
import TotalDetails from "./Compomnents/TotalDetails/TotalDetails";
import { useNavigate } from "react-router-dom";
import Skeleton from "./Compomnents/Skeleton/Skeleton";

const Cart = () => {
  const cart = useSelector(selectCart);
  const [showSkeleton, setShowSkeleton] = useState(true);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  setTimeout(() => {
    setShowSkeleton(false);
  }, 200);

  const hanldeEmptyCart = () => {
    dispatch(actions.emptyCart());
  };

  return (
    <>
      {!showSkeleton ? (
        <div className={styles.container}>
          <div className={styles.cartContainer}>
            <table>
              <thead>
                <tr className={styles.itemTable}>
                  <th>{constants.cart.product}</th>
                  <th>{constants.cart.count}</th>
                  <th>{constants.cart.price}</th>
                  <th>{constants.cart.remove}</th>
                </tr>
              </thead>
              <hr />
              <tbody className={styles.tableContainer}>
                {cart.cartItems.map((item) => (
                  <CartCard key={item.id} cartItem={item} />
                ))}
              </tbody>
            </table>
            {!cart.isEmpty && (
              <button onClick={hanldeEmptyCart}>
                {constants.cart.emptyCart}
              </button>
            )}
          </div>
          <div className={styles.totalDetails}>
            <TotalDetails />
            <button
              className={styles.checkoutBtn}
              onClick={() => navigate("/checkout")}
            >
              {constants.cart.proceedToCheckout}
            </button>
          </div>
        </div>
      ) : (
        <Skeleton />
      )}
    </>
  );
};

export default Cart;
