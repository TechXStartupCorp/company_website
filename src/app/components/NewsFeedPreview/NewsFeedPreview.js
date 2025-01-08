"use client";
import React, { useMemo } from "react";
import styles from "./NewsFeedPreview.module.css";
import { Form, Container, Row, Col, Button, Badge } from "react-bootstrap";
import { CiSearch } from "react-icons/ci";
import { MdOutlineChevronRight } from "react-icons/md";
import CalloutSection from "../CalloutSection/CalloutSection";
import Image from "next/image";
import { dummyNewsFeedPosts } from "@/app/data/DummyNewsFeedPosts";
import GreyBtnWide from "../GreyBtnWide/GreyBtnWide";

const NewsFeedPreview = () => {
  // Select a random newsfeed post using useMemo to avoid recalculation on each render
  const randomPost = useMemo(() => {
    const randomIndex = Math.floor(Math.random() * dummyNewsFeedPosts.length);
    return dummyNewsFeedPosts[randomIndex];
  }, []);

  return (
    <div className="py-2 px-3">
      <Form>
        <div className="position-relative">
          <Form.Control
            type="text"
            className={`${styles.searchInput}`}
            placeholder="Search here..."
          />
          <CiSearch className={`${styles.searchIcon} fs-5`} />
        </div>
      </Form>
      <div className="d-flex justify-content-between align-items-center mt-4">
        <h5 className="fw-bold mb-0">Recommended</h5>
        <span className="fw-semibold">
          View all
          <MdOutlineChevronRight className="ms-2" />
        </span>
      </div>
      <div
        className={`${styles.previewContainerWithImage} w-100 mt-4 position-relative d-flex`}
      >
        <div className={styles.optionalDarkOverlay}></div>
        <Image
          className={`${styles.heroImage}`}
          src={randomPost.image.image_url}
          alt={randomPost.image.alt_tag}
          layout="fill"
          objectFit="cover"
          quality={100}
          priority={true}
        />
        <div className={`${styles.textOverlay}`}>
          <div className="fw-bold d-flex gap-2 align-items-center">
            <h6 className="mb-0 xtraBold">{randomPost.news_feed_source}</h6>{" "}
            <span className="">•</span>{" "}
            <small className="fw-light mt-1">
              {randomPost.date_time_posted}
            </small>
          </div>
          <p className="mt-3 mb-0 fs-6">{randomPost.title}</p>
        </div>
      </div>
      <div className="mt-4">
        {dummyNewsFeedPosts.map((newsFeedPost, index) => (
          <div className="p-2 whiteBG rounded mb-3" key={index}>
            <Row>
              <div className={`d-flex flex-column flex-grow-1`}>
                <div
                  className={`${styles.newsFeedCardContainer} position-relative`}
                >
                  <Badge className={`${styles.newsFeedCategory} text-light`}>
                    Category
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
          //   <Container key={index} className="whiteBG fluid p-3 rounded mb-3">
          //     <Row className="align-items-stretch">
          //       <Col className="">
          //         <div>
          //           <div className="d-flex gap-3 fs-6">
          //             <small className="text-primary fw-bold">
          //               {newsFeedPost.news_feed_source}
          //             </small>{" "}
          //             <span className="text-secondary">•</span>
          //             <small className="text-secondary">
          //               {newsFeedPost.date_time_posted}
          //             </small>
          //           </div>
          //           <div className="mt-3">
          //             <h6 className="xtraBold">{newsFeedPost.title}</h6>
          //           </div>
          //         </div>
          //         <div className="mt-4">
          //           <GreyBtnWide
          //             text="Read more"
          //             //   link={`/blog/${post.title
          //             //     .replace(/\s+/g, "-")
          //             //     .toLowerCase()}`}
          //             //   aria-label={`Read more about ${post.title}`}
          //           />
          //         </div>
          //       </Col>
          //       <Col xs={3} className="h-100 d-flex flex-column">
          //         <div className="w-100 h-100 flex-grow-1 bg-warning">
          //             hi2
          //           {/* <Image
          //             src={newsFeedPost.image.image_url}
          //             alt={newsFeedPost.image.alt_tag}
          //             layout="fill"
          //             objectFit="cover"
          //             className="rounded"
          //           /> */}
          //         </div>
          //       </Col>
          //     </Row>
          //   </Container>
        ))}
      </div>
    </div>
  );
};

export default NewsFeedPreview;
