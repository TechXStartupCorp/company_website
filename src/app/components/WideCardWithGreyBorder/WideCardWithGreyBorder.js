import React from "react";

const WideCardWithGreyBorder = ({ children }) => {
  return (
    <div
      className={`cardWithGreyBorder d-flex justify-content-between align-items-center py-3 px-4`}
    >
      {children}
    </div>
  );
};

export default WideCardWithGreyBorder;
