import React from "react";
import { client } from "../../../../sanity/lib/client";
import NewsFeedPage from "./components/NewsFeedPage";

const page = async ({ params }) => {
  const resolvedParams = await params;
  const { slug } = resolvedParams;

  const query = `*[_type == "newsFeed" && slug.current == $slug][0]{
    _id,
    title,
    "slug": slug.current,
    news_feed_source,
    date_time_posted,
    content, 
    image {
      image_url,
      alt_tag
    },
    category,
    tags
  }`;

  const newsFeedPost = await client.fetch(query, { slug });

  console.log(newsFeedPost, "news feed post");

  return <NewsFeedPage newsFeedPost={newsFeedPost} />;
};

export default page;
