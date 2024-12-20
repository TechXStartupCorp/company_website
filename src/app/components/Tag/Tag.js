import React from "react";
import Link from "next/link";
import styles from "./Tag.module.css";

const Tag = ({ text, link }) => {
  return link ? (
    <Link
      rel="noopener noreferrer"
      href={link}
      className="text-decoration-none"
    >
      <small
        className={`text-dark fw-bold py-1 px-3 rounded ${styles.tag}`}
      >
        {text}
      </small>
    </Link>
  ) : (
    <small
      className={`text-dark fw-bold py-1 px-3 rounded ${styles.tag}`}
    >
      {text}
    </small>
  );
};

export default Tag;
