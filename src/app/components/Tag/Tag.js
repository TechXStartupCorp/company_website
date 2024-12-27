import React from "react";
import styles from "./Tag.module.css"; // Your CSS module for styling

const Tag = ({ text, isSelected, onClick }) => {
  // Determine the tag's class based on selection
  const tagClass = isSelected
    ? `${styles.tag} ${styles.selected}` // If selected, apply a different style
    : styles.tag;

  return (
    <small
      className={`text-dark fw-bold py-1 px-3 rounded ${tagClass}`}
      onClick={() => onClick(text)} // Trigger onClick with the tag text
      style={{ cursor: "pointer" }} // Add cursor pointer for interaction
    >
      {text}
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
