import React from "react";
import MenuSkeleton from "../../../../Components/ItemSkeleton/Index";
import styles from "./Index.module.css";

const RestaurantSkeleton = () => {
  const skeletonComponent = [];

  for (let i = 0; i < 12; i++) {
    skeletonComponent.push(<MenuSkeleton key={i} />);
  }

  return (
    <div className={styles.container}>
      <div className={styles.detailsContainer}>
        <div className={styles.imageContainer}></div>
        <div className={styles.restaurantDetailsContainer}>
          <div className={styles.line}></div>
          <div className={styles.line}></div>
          <div className={styles.line}></div>
          <div className={styles.button}></div>
          <div className={styles.line}></div>
        </div>
      </div>
      <div className={styles.menuContainer}>
        <div className={styles.menuHeading}></div>
        <div className={styles.searchBar}></div>
        <div className={styles.menuItemsContainer}>{skeletonComponent}</div>
      </div>
    </div>
  );
};

export default RestaurantSkeleton;
