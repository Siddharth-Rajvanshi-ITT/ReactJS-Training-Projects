import React, { useState } from "react";
import constants from "../../../../Utilities/Constansts/lableConstancts.json";
import styles from "./TotalDetails.module.css";
import { useSelector } from "react-redux";
import { selectTotalPrice } from "../../../../Redux/Selectors/cartSelectors";

const TotalDetails = () => {
  const totalPrice = useSelector(selectTotalPrice) / 100;
  const [discount, setDiscount] = useState<number>(0);

  const handleDiscount = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDiscount(+e.target.value);
  };

  return (
    <div className={styles.totalCard}>
      <h2>{constants.cart.promoCode}</h2>
      <input
        type="number"
        placeholder="Enter code here..."
        onChange={handleDiscount}
      />
      <div className={styles.totalDetails}>
        <div>
          <span>{constants.cart.subtotal}</span>
          <span>
            {constants.restaurantDetails.currency} {totalPrice}
          </span>
        </div>
        <div>
          <span>{constants.cart.discount}</span>
          <span>
            {constants.restaurantDetails.currency} {discount}
          </span>
        </div>
        <div>
          <span>
            <b>{constants.cart.total}</b>
          </span>
          <span>
            <b>
              {constants.restaurantDetails.currency}{" "}
              {totalPrice - discount > 0 ? totalPrice - discount : 0}
            </b>
          </span>
        </div>
      </div>
    </div>
  );
};

export default TotalDetails;
