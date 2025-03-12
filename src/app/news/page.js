import React from "react";
import { client } from "../../../sanity/lib/client";
import NewsFeedIndexPage from "./components/NewFeedIndexPage";

const fetchNewsFeedPosts = async () => {
  const query = `*[_type == "newsFeed"]{
    _id,
    title,
    "slug": slug.current,
    news_feed_source,
    date_time_posted,
    category,
    content,
    tags,
    image {
      image_url,
      alt_tag
    }
  }`;

  const fetchedPosts = await client.fetch(query);
  return fetchedPosts;
};

const NewsFeedPage = async () => {
  const newsFeedPosts = await fetchNewsFeedPosts();

  return <NewsFeedIndexPage newsFeedPosts={newsFeedPosts} />;
};

export default NewsFeedPage;
