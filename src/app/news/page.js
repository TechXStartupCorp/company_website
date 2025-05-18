"use client";
import React, { useMemo } from "react";
import { Container, Row, Col } from "react-bootstrap";
import NewsFeedCard from "../components/NewsFeedCard/NewsFeedCard";
import ContentCard from "../components/ContentCard/ContentCard";
import { useNews } from "../context/NewsContext";

const Page = () => {
  const { articles, loading } = useNews();

  // ✅ Always call hooks before any return or conditional logic
  const randomPost = useMemo(() => {
    if (!articles.length) return null;
    const randomIndex = Math.floor(Math.random() * articles.length);
    return articles[randomIndex];
  }, [articles]);

  if (loading || !randomPost) {
    return <div>Loading news...</div>;
  }

  return (
    <div className="">
      <Container className="pb-5">
        <h3 className="xtraBold mt-4">Recent news</h3>
        <div className="mt-4">
          <ContentCard
            randomPost={randomPost}
            altTag="random post"
            category="temp category"
            preview={true}
          />
        </div>

        <Row className="mt-4">
          <h4 className="xtraBold">More like this</h4>
          <Row className="mt-2">
            {articles
              .filter((article) => article.title !== randomPost.title) // ⛔️ remove the featured one
              .map((article, index) => (
                <Col className="mb-3" key={index} xs={12} md={6} lg={4}>
                  <NewsFeedCard shadow={true} newsFeedPost={article} />
                </Col>
              ))}
          </Row>
        </Row>
      </Container>
    </div>
  );
};

export default Page;

