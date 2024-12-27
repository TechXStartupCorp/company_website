import React from "react";
import Link from "next/link";
import styles from "./GreyBtnWide.module.css";
import { MdArrowOutward } from "react-icons/md";

const GreyBtnWide = ({ onClick, link, icon, text }) => {
  const content = (
    <div
      role="button"
      className={`${styles.greyWideBtn} w-100 mt-2 py-2 rounded lightGreyContainerBG fw-bold d-flex align-items-center justify-content-center gap-3`}
    >
      {icon ? icon : <MdArrowOutward />}
      <small>{text}</small>
    </div>
  );

  if (link) {
    return (
      <Link className="text-dark text-decoration-none" href={link}>
        {content}
      </Link>
    );
  }

  return (
    <div onClick={onClick} className="w-100" style={{ cursor: "pointer" }}>
      {content}
    </div>
  );
};

export default GreyBtnWide;
