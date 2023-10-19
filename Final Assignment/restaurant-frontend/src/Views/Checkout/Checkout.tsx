import React, { useEffect, useState } from "react";
import styles from "./Checkout.module.css";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const [lable, setLable] = useState<string>("Processing your payment...");
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      setLable("Payment done. Redirecting to Homepage.");
    }, 2000);
    setTimeout(() => {
      navigate("/");
    }, 4000);
  });
  return (
    <div className={styles.container}>
      <h1>{lable}</h1>
    </div>
  );
};

export default Checkout;
