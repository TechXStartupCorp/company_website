import React from "react";
import styles from "./Tag.module.css";

const Tag = ({
  text,
  isSelected,
  selectedCategories,
  onClick,
  icon,
}) => {
  const categoryClass = isSelected
    ? `${styles.category} ${styles.selected}`
    : styles.category;

  return (
    <small
      className={`text-dark fw-bold py-1 px-3 rounded greyBtnWithDarkHover ${categoryClass}`}
      {...(onClick && { onClick: () => onClick(text) })}
      style={{ cursor: onClick ? "pointer" : "default" }}
    >
      {icon ? (
        <div
          className={
            !selectedCategories || selectedCategories.length === 0
              ? "text-secondary fw-normal opacity-50"
              : "text-primary opacity-40 fw-normal"
          }
        >
          <span>{text}</span>
          <small className={`${styles.tagX} ms-1`}>{icon}</small>
        </div>
      ) : (
        text
      )}

      {isSelected && (
        <span
          className="ms-2"
          style={{
            fontSize: "0.8rem",
            color: "#212529",
            fontWeight: "bold",
          }}
        >
          x
        </span>
      )}
    </small>
  );
};

export default Tag;
