"use client";
import React, { useMemo } from "react";
import { Container, Row, Col } from "react-bootstrap";
import NewsFeedCard from "@/app/components/NewsFeedCard/NewsFeedCard";
import ContentCard from "@/app/components/ContentCard/ContentCard";

const NewFeedIndexPage = ({ newsFeedPosts }) => {
  const randomPost = useMemo(() => {
    const randomIndex = Math.floor(Math.random() * newsFeedPosts.length);
    return newsFeedPosts[randomIndex];
  }, []);

  console.log(randomPost, "random post");

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

        <Row className="mt-4">
          <h4 className="xtraBold">More like this</h4>
          <Row className="mt-2">
            {newsFeedPosts.map((newsFeedPost, index) => (
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

export default NewFeedIndexPage;
