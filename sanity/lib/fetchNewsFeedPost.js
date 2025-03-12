import { client } from "./client";

export const fetchNewsFeedPosts = async () => {
  const query = `*[_type == "newsFeed"]{
      _id,
      title,
      "slug": slug.current,
      news_feed_source,
      date_time_posted,
      category,
      tags,
      image {
        image_url,
        alt_tag
      }
    }`;

  const newsFeedPosts = await client.fetch(query); // Execute the query

  return newsFeedPosts; // Return the fetched news feed posts
};
