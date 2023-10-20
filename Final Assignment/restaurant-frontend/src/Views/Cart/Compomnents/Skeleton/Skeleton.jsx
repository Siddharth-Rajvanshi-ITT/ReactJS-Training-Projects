import React from "react";
import styles from "./Skeleton.module.css";

const Skeleton = () => {
  return (
    <div className={styles.container}>
      <div className={styles.cartContainer}>
        <div className={`${styles.cartItemSkeleton} ${styles.skeleton}`}>
          <div className={`${styles.line} ${styles.ReverseSkeleton}`}></div>
          <div className={`${styles.line} ${styles.ReverseSkeleton}`}></div>
          <div className={`${styles.line} ${styles.ReverseSkeleton}`}></div>
          <div className={`${styles.line} ${styles.ReverseSkeleton}`}></div>
          <div className={`${styles.line} ${styles.ReverseSkeleton}`}></div>
        </div>
      </div>
      <div className={styles.totalContainer}>
        <div className={`${styles.cartItemSkeleton} ${styles.skeleton}`}>
          <div className={`${styles.line} ${styles.ReverseSkeleton}`}></div>
          <div className={`${styles.line} ${styles.ReverseSkeleton}`}></div>
          <div className={`${styles.line} ${styles.ReverseSkeleton}`}></div>
          <div className={`${styles.line} ${styles.ReverseSkeleton}`}></div>
          <div className={`${styles.line} ${styles.ReverseSkeleton}`}></div>
        </div>
      </div>
    </div>
  );
};

export default Skeleton;
