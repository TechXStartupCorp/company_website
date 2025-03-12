import React from "react";
import { client } from "../../../../sanity/lib/client";
import NewsFeedPage from "./components/NewsFeedPage";
import Head from "next/head";
import { fetchNewsFeedPosts } from "../../../../sanity/lib/fetchNewsFeedPost";
// import { useParams } from "next/navigation";
// import { useState, useEffect } from "react";
import { dummyNewsFeedPosts } from "@/app/data/DummyNewsFeedPosts";
import { Breadcrumb, Container } from "react-bootstrap";
import styles from "./page.module.css";
import Image from "next/legacy/image";
import { handleCopyClick } from "../../../../utils/handleCopyClick";
import { BsPaperclip } from "react-icons/bs";
import Tag from "@/app/components/Tag/Tag";
import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  XIcon,
  LinkedinShareButton,
  LinkedinIcon,
  WhatsappShareButton,
  WhatsappIcon,
} from "react-share";

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
