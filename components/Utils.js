import { forwardRef, useState } from "react";
import styles from "../styles/Utils.module.css";

const Cross = () => {
  return (
    <>
      <div className={styles.line1}></div>
      <div className={styles.line2}></div>
    </>
  );
};

Cross.displayName = "Cross";

module.exports = {
  Cross,
};
