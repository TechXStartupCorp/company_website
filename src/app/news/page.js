// import React from "react";
// import { client } from "../../../sanity/lib/client";
// import NewsFeedIndexPage from "./components/NewFeedIndexPage";

// const fetchNewsFeedPosts = async () => {
//   const query = `*[_type == "newsFeed"]{
//     _id,
//     title,
//     "slug": slug.current,
//     news_feed_source,
//     date_time_posted,
//     category,
//     content,
//     tags,
//     image {
//       image_url,
//       alt_tag
//     }
//   }`;

//   const fetchedPosts = await client.fetch(query);
//   return fetchedPosts;
// };

// const NewsFeedPage = async () => {
//   const newsFeedPosts = await fetchNewsFeedPosts();

//   return <NewsFeedIndexPage newsFeedPosts={newsFeedPosts} />;
// };

// export default NewsFeedPage;

"use client";
import React, { useMemo } from "react";
import { Container, Row, Col } from "react-bootstrap";
import NewsFeedCard from "../components/NewsFeedCard/NewsFeedCard";
import ContentCard from "../components/ContentCard/ContentCard";
import { useNews } from "../context/NewsContext";

const Page = () => {
  const { articles, loading } = useNews(); // ✅ use hook inside the component

  if (loading) {
    return <div>Loading news...</div>;
  }

  const randomPost = useMemo(() => {
    const randomIndex = Math.floor(Math.random() * articles.length);
    return articles[randomIndex];
  }, []);

  return (
    <div className="">
      <Container className="pb-5">
        <h3 className="xtraBold mt-4">Recent news</h3>
        <div className="mt-4">
          <ContentCard
            imageUrl={randomPost.image}
            altTag="random post"
            // category={randomPost.category}
            category="temp category"
            title={randomPost.title}
            // content={randomPost.content[0].paragraph}
            content={randomPost.content}
            // time={randomPost.date_time_posted}
            time="yesturday"
            preview={true}
          />
        </div>

        <Row className="mt-4">
          <h4 className="xtraBold">More like this</h4>
          <Row className="mt-2">
            {articles.map((article, index) => (
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
