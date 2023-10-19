import React from "react";
import MenuSkeleton from "../../../../Components/ItemSkeleton/Index";
import styles from "./Index.module.css";

const HomeSkeleton = () => {
  const skeletonComponent = [];

  for (let i = 0; i < 12; i++) {
    skeletonComponent.push(<MenuSkeleton key={i} />);
  }

  return (
    <div>
      <div className={`${styles.imageContainer} ${styles.skeleton}`}>
        <div
          className={`${styles.restaurantDetailsContainer} ${styles.skeleton}`}
        >
          <div className={`${styles.line} ${styles.ReverseSkeleton}`}></div>
          <div className={`${styles.line} ${styles.ReverseSkeleton}`}></div>
          <div className={`${styles.button} ${styles.ReverseSkeleton}`}></div>
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

export default HomeSkeleton;
