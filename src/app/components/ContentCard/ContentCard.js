import React from "react";
import { Row, Col, Badge } from "react-bootstrap";
import Image from "next/legacy/image";
import styles from "./ContentCard.module.css";
import GreyBtnWide from "../GreyBtnWide/GreyBtnWide";
import { timeInterval } from "rxjs";

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
      <Col lg={12} xl={6}>
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
      <Col lg={12} xl={6}>
        <div className="d-flex flex-column justify-content-between h-100">
          <div>
            <div className="d-flex justify-content-between mt-3 mt-xl-0">
              <div className="d-flex align-items-center gap-2">
                <Image
                  src="https://res.cloudinary.com/dq8ii6nbc/image/upload/v1733864478/growtika-Cb2g_CXw_JI-unsplash_erxlor.jpg"
                  alt="Rounded Image"
                  width={32}
                  height={32}
                  className={styles.authorImage}
                />
                <span className="fw-bold">TechX Startup</span>
              </div>
              <span className="text-secondary">
                🔥 <small>Trending</small>
              </span>
            </div>
            <h2 className="xtraBold mt-3">{title}</h2>

            <small className="text-secondary mt-2">
              {new Date(time).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </small>

            <p className={`${preview ? styles.truncateText : ""} mt-3`}>
              {content}
            </p>
          </div>
          {preview && (
            <div className="mt-4 mt-xl-0">
              <GreyBtnWide
                link={`/news/${title.replace(/\s+/g, "-").toLowerCase()}`}
                aria-label={`Read more about ${title}`}
                text="Read more"
              />
            </div>
          )}
        </div>
      </Col>
    </Row>
  );
};

export default ContentCard;
