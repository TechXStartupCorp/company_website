import React from "react";
import styles from './WideCardWithGreyBorder.module.css'

const WideCardWithGreyBorder = ({ children }) => {
  return (
    <div
      className={`${styles.wideCardWithGreyBorder} cardWithGreyBorder d-flex py-3 px-4`}
    >
      {children}
    </div>
  );
};

export default WideCardWithGreyBorder;
