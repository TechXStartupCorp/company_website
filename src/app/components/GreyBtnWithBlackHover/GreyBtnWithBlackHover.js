import React from "react";
import { Button } from "react-bootstrap";
import Link from "next/link";
import styles from "./GreyBtnWithBlackHover.module.css";

const GreyBtnWithBlackHover = ({ link, text, onClick }) => {
  if (link) {
    return (
      <Link href={link} passHref>
        <Button
          className={`${styles.greyButton} border-0 text-dark fw-bold lightBtnBackgroundColor px-3 py-1`}
        >
          {text}
        </Button>
      </Link>
    );
  }

  return (
    <Button
      onClick={onClick}
      className={`${styles.greyButton} border-0 text-dark fw-bold lightBtnBackgroundColor px-3 py-1`}
    >
      {text}
    </Button>
  );
};

export default GreyBtnWithBlackHover;
