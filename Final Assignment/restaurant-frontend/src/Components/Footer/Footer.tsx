import React from "react";
import styles from "./Footer.module.css";
import constants from "../../Utilities/Constansts/lableConstancts.json";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <p>{constants.footer.copyright}</p>
      <p>{constants.footer.madeBy}</p>
    </div>
  );
};

export default Footer;
