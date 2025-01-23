import React from "react";
import styles from "./VerticalCard.module.css";
import Link from "next/link";
import Image from "next/legacy/image";
import Tag from "../Tag/Tag";
import GreyBtnWide from "../GreyBtnWide/GreyBtnWide";

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
      className={`cardWithGreyBorder d-flex flex-column mb-4 p-3 flex-grow-1`}
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
          <h5 className={`${styles.cardTitle} xtraBold mt-4`}>{title}</h5>

          <p className="mt-3 textBlue">{text}</p>
        </div>

        <GreyBtnWide link={link} icon={icon} text="Read more" />
      </div>
    </div>
  );
};

export default VerticalCard;
