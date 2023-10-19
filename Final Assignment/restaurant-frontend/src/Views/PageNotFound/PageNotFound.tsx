import React from "react";
import notFoundImage from "../../Assets/Images/pageNotFound.svg";
import styles from "./PageNotFound.module.css";

const PageNotFound = () => {
  return (
    <div className={styles.container}>
      <img className={styles.image} src={notFoundImage} alt="" />
      <h1 className={styles.title}>Ohh! Page Not Found</h1>
    </div>
  );
};

export default PageNotFound;
