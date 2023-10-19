import React from "react";
import styles from "./Index.module.css";

type skeletonItem = {
  count: number;
};

const FillDiv = (props: skeletonItem) => {
  const divs = [];

  for (let i = 0; i < props.count; i++) {
    divs.push(
      <div
        key={i}
        className={`${styles.fillDiv} ${styles.ReverseSkeleton}`}
      ></div>
    );
  }

  return <>{divs}</>;
};

const MenuSkeleton = () => {
  return (
    <div className={`${styles.containerSkeleton} ${styles.skeleton}`}>
      <div
        className={`${styles.itemImageSkeleton} ${styles.ReverseSkeleton}`}
      ></div>

      <FillDiv count={4} />
      <div
        className={`${styles.buttonSkeleton} ${styles.ReverseSkeleton}`}
      ></div>
    </div>
  );
};

export default MenuSkeleton;
