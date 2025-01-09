import React from "react";
import { Row, Col, Badge } from "react-bootstrap";
import Image from "next/image";
import styles from "./ContentCard.module.css";
import GreyBtnWide from "../GreyBtnWide/GreyBtnWide";

const ContentCard = ({
  imageUrl,
  altTag,
  category,
  title,
  content,
  time,
  preview,
  imageAlign,
}) => {
  return (
    <Row>
      <Col>
        <div className={`${styles.imageContainer} position-relative`}>
          <Badge className={`${styles.tag} text-light`}>{category}</Badge>
          <Image
            className="roundedImage"
            src={imageUrl}
            alt={altTag}
            layout="fill"
            objectFit="cover"
          />
        </div>
      </Col>
      <Col>
        <div className="d-flex flex-column justify-content-between h-100">
          <div>
            <div className="d-flex justify-content-between">
              <div className="d-flex align-items-center gap-2">
                <Image
                  src="https://res.cloudinary.com/dq8ii6nbc/image/upload/v1733864478/growtika-Cb2g_CXw_JI-unsplash_erxlor.jpg"
                  alt="Rounded Image"
                  width={32} // Set width
                  height={32} // Set height
                  className={styles.authorImage}
                />
                <span className="fw-bold">TechX Startup</span>
              </div>
              <span className="text-secondary">
                🔥 <small>Trending</small>
              </span>
            </div>
            <h2 className="xtraBold mt-3">{title}</h2>

            <small className="text-secondary mt-2">{time}</small>

            <p className={`${preview ? styles.truncateText : "mt-3"}`}>
              {content}
            </p>
          </div>
          {preview && (
            <GreyBtnWide
              link={`/news/${title.replace(/\s+/g, "-").toLowerCase()}`}
              aria-label={`Read more about ${title}`}
              text="Read more"
            />
          )}
        </div>
      </Col>
    </Row>
  );
};

export default ContentCard;
