import React from "react";
import { Button } from "react-bootstrap";
import styles from "./CustomBtn.module.css";

const CustomBtn = ({
  text,
  variant,
  fullWidth,
  thickerPadding,
  type,
  link,
  icon, // New prop for the icon
}) => {
  const buttonContent = (
    <Button
      type={type ? "submit" : undefined}
      variant={variant}
      className={`${styles.customBtn} ${
        thickerPadding ? "thickerWideBTN" : "px-3 py-2"
      } fw-bold d-flex justify-content-center align-items-center ${fullWidth && "w100BTN"}`}
    >
      {icon && icon}
      {text}
    </Button>
  );

  return link ? (
    <a target="_blank" href={link} rel="noopener noreferrer">
      {buttonContent}
    </a>
  ) : (
    buttonContent
  );
};

export default CustomBtn;
