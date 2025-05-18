import React from "react";
import { Row, Badge } from "react-bootstrap";
import Image from "next/legacy/image";
import GreyBtnWide from "../GreyBtnWide/GreyBtnWide";
import Link from "next/link";
import styles from "./NewsFeedCard.module.css";
import { generateSlug } from "@/app/lib/generateSlug";
import { timeAgo } from "@/app/lib/timeAgo";

const NewsFeedCard = ({ newsFeedPost, shadow }) => {
  return (
    <div
      className={`${styles.newsFeedCard} ${
        shadow && styles.newsFeedCardShadow
      } d-flex flex-column p-2 whiteBG rounded mb-3 h-100`}
    >
      <Row className="flex-grow-1">
        <div className={`d-flex flex-column flex-grow-1`}>
          <div className={`${styles.newsFeedCardContainer} position-relative`}>
            {/* <Badge className={`${styles.newsFeedCategory} text-light`}>
              {newsFeedPost.category}
            </Badge> */}
            <img
              src={newsFeedPost.image}
              alt="Newsfeed post image"
              className="roundedImage"
            />
  
          </div>
          <div className="d-flex flex-column justify-content-between h-100">
            <div className="d-flex flex-column">
              <div className="mt-2 d-flex text-secondary justify-content-between">
                <div>
                  <span>
                    🔥 <small>Trending</small>
                  </span>
                </div>
                <small>{timeAgo(newsFeedPost.publishedAt)}</small>
              </div>
              <div className="mt-2">
                <h5 className="xtraBold">{newsFeedPost.title}</h5>
              </div>
            </div>
            <div className="mt-2">
              <GreyBtnWide
                // link={`/news/${newsFeedPost.slug}`}
                link={newsFeedPost.url}
                aria-label={`Read more about ${newsFeedPost.title}`}
                text="Read more"
              />
            </div>
          </div>
        </div>
      </Row>
    </div>
  );
};

export default NewsFeedCard;
