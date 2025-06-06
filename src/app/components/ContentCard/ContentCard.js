import React from "react";
import { Row, Col } from "react-bootstrap";
import Image from "next/legacy/image";
import styles from "./ContentCard.module.css";
import GreyBtnWide from "../GreyBtnWide/GreyBtnWide";
import { timeAgo } from "@/app/lib/timeAgo";

const ContentCard = ({ randomPost, title, preview }) => {
  return (
    <Row>
      <Col lg={12} xl={6}>
        <div className={`${styles.imageContainer} position-relative`}>
          <img className="rounded" src={randomPost.image} alt="newdfeed image" />
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
                <span className="fw-bold">{randomPost.source.name}</span>
              </div>
              <span className="text-secondary">
                🔥 <small>Trending</small>
              </span>
            </div>
            <h2 className="xtraBold mt-3">{randomPost.title}</h2>

            <small className="text-secondary mt-2">
              {timeAgo(randomPost.publishedAt)}
            </small>

            <p className={`${preview ? styles.truncateText : ""} mt-3`}>
              {(randomPost.content || randomPost.description || "")
                .replace(/\s?\.\.\.\s?\[\d+\schars\]$/, "")
                .replace(/\[\d+\schars\]$/, "")
                .trim()
                .replace(/\.*$/, "...")}{" "}
            </p>
          </div>
          {preview && (
            <div className="mt-4 mt-xl-0">
              <GreyBtnWide
                link={randomPost.url}
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
