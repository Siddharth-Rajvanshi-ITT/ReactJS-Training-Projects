import React from "react";
import styles from "./Index.module.css";

type skeletonItem = {
  count: number;
};

const FillDiv = (props: skeletonItem) => {
  const divs = [];

  for (let i = 0; i < props.count; i++) {
    divs.push(<div key={i} className={styles.fillDiv}></div>);
  }

  return <>{divs}</>;
};

const MenuSkeleton = () => {
  return (
    <div className={styles.containerSkeleton}>
      <div className={styles.itemImageSkeleton}></div>

      <FillDiv count={4} />
      <div className={styles.buttonSkeleton}></div>
    </div>
  );
};

export default MenuSkeleton;
