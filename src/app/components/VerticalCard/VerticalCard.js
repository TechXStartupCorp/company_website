import React from "react";
import styles from "./VerticalCard.module.css";
import Link from "next/link";
import Image from "next/image";
import Tag from "../Tag/Tag";

const VerticalCard = ({
  imageSrc,
  alt,
  title,
  text,
  link,
  secondItem,
  icon,
}) => {
  return (
    <div
      className={`cardWithGreyBorder d-flex flex-column mb-4 p-4 flex-grow-1`}
    >
      <div className={`${styles.verticalCard} position-relative`}>
        <Image
          className="roundedImage"
          src={imageSrc}
          alt={alt}
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="d-flex flex-column justify-content-between h-100 gap-4">
        <div>
          <h4 className="xtraBold mt-3">{title}</h4>

          <p className="textBlue mt-3">{text}</p>
        </div>
        <div className="d-flex gap-3 w-100 justify-content-between">
          <Tag link={link} text="Learn more" />
        </div>
      </div>
    </div>
  );
};

export default VerticalCard;
