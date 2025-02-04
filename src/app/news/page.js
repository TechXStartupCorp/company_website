"use client";
import React, { useMemo } from "react";
import { Container, Row, Col } from "react-bootstrap";
import NewsFeedCard from "../components/NewsFeedCard/NewsFeedCard";
import { dummyNewsFeedPosts } from "../data/DummyNewsFeedPosts";
import ContentCard from "../components/ContentCard/ContentCard";

const News = () => {
  const randomPost = useMemo(() => {
    const randomIndex = Math.floor(Math.random() * dummyNewsFeedPosts.length);
    return dummyNewsFeedPosts[randomIndex];
  }, []);

  return (
    <div className="">
      <Container className="pb-5">
        <h3 className="xtraBold mt-4">Recent news</h3>
        <div className="mt-4">
          <ContentCard
            imageUrl={randomPost.image.image_url}
            altTag={randomPost.image.alt_tag}
            category={randomPost.category}
            title={randomPost.title}
            content={randomPost.content[0].paragraph}
            time={randomPost.date_time_posted}
            preview={true}
          />
        </div>
        {/* <Col md={12} lg={6}> */}

        <Row className="mt-4">
          <h4 className="xtraBold">More like this</h4>
         <Row className="mt-2">
          {dummyNewsFeedPosts.map((newsFeedPost, index) => (
            <Col className="mb-3" key={index} xs={12} md={6} lg={4}>
              <NewsFeedCard shadow={true} newsFeedPost={newsFeedPost} />
            </Col>
          ))}
          </Row>
        </Row>
      </Container>
    </div>
  );
};

export default News;
