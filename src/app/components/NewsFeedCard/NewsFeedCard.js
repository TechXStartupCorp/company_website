import React from "react";
import { Row, Badge } from "react-bootstrap";
import Image from "next/image";
import GreyBtnWide from "../GreyBtnWide/GreyBtnWide";
import Link from "next/link";
import styles from "./NewsFeedCard.module.css";

const NewsFeedCard = ({ newsFeedPost }) => {
  return (
    <div className="p-2 whiteBG rounded mb-3">
      <Row>
        <div className={`d-flex flex-column flex-grow-1`}>
          <div className={`${styles.newsFeedCardContainer} position-relative`}>
            <Badge className={`${styles.newsFeedCategory} text-light`}>
              {newsFeedPost.category}
            </Badge>
            <Image
              className="roundedImage"
              src={newsFeedPost.image.image_url}
              alt={newsFeedPost.image.alt_tag}
              layout="fill"
              objectFit="cover"
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
                <small>{newsFeedPost.date_time_posted}</small>
              </div>
              <div className="mt-2">
                <h5 className="xtraBold">{newsFeedPost.title}</h5>
              </div>
            </div>
            <div className="mt-2">
              <GreyBtnWide
                //   link={link}
                //   icon={icon}
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
