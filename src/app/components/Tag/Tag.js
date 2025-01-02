import React from "react";
import styles from "./Tag.module.css";

const Tag = ({
  text,
  isSelected,
  selectedTags,
  setSelectedTags,
  onClick,
  icon,
}) => {
  const tagClass = isSelected ? `${styles.tag} ${styles.selected}` : styles.tag;

  return (
    <small
      className={`text-dark fw-bold py-1 px-3 rounded greyBtnWithDarkHover ${tagClass}`}
      onClick={() => onClick(text)}
      style={{ cursor: "pointer" }}
    >
      {icon ? (
        <div
          className={
            selectedTags.length === 0
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
