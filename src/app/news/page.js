import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { dummyNewsFeedPosts } from "../data/DummyNewsFeedPosts";
import NewsFeedCard from "../components/NewsFeedCard/NewsFeedCard";

const page = () => {
  return (
    <div className="lightGreyContainerBG">
      <Container className="pb-5">
        <h4 className="xtraBold mt-4">Recent news</h4>
        <Row className="">
          {dummyNewsFeedPosts.map((newsFeedPost, index) => (
            <Col className="mb-3" key={index} xs={12} md={6} lg={4}>
              <NewsFeedCard shadow={true} newsFeedPost={newsFeedPost} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default page;
