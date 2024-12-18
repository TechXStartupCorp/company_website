import React from "react";
import { Button } from "react-bootstrap";
import styles from "./CustomBtn.module.css";
import Link from "next/link";

const CustomBtn = ({
  text,
  variant,
  fullWidth,
  thickerPadding,
  type,
  link,
}) => {
  const buttonContent = (
    <Button
      type={type ? "submit" : undefined}
      variant={variant}
      // target="_blank"
      className={`${styles.customBtn} ${
        thickerPadding ? "thickerWideBTN" : "px-3 py-2"
      } fw-bold ${fullWidth && "w100BTN"}`}
    >
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
