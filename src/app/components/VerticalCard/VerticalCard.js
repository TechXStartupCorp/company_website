import React from "react";
import styles from "./VerticalCard.module.css";
import Link from "next/link";
import Image from "next/image";

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

          <p className="text-secondary mt-2">{text}</p>
        </div>
        <div className="d-flex gap-3 w-100 justify-content-between">
          <div className={styles.caseStudyLinkContainer}>
            <Link
              href={link}
              rel="noopener noreferrer"
              className={`text-dark fw-bold text-decoration-none py-2 px-3 rounded ${styles.caseStudyLink}`}
            >
              Learn more
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VerticalCard;
