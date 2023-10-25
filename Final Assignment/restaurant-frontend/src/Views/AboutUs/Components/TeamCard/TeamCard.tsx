import React from "react";
import styles from "./TeamCard.module.css";

type card = {
  img: string;
  name: string;
  designation: string;
};

const TeamCard = (props: card) => {
  return (
    <div className={styles.card}>
      <img src={props.img} alt="" className={styles.cardImg} />
      <h3 className={styles.name}>{props.name}</h3>
      <h4 className={styles.designation}>{props.designation}</h4>
    </div>
  );
};

export default TeamCard;
