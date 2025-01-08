"use client";
import React from "react";
import { useParams } from "next/navigation";
import { useState, useEffect } from "react";
import { dummyNewsFeedPosts } from "@/app/data/DummyNewsFeedPosts";

const page = () => {
  const { slug } = useParams();

  const decodedSlug = decodeURIComponent(slug).replace(/:/g, "");

  // Now you can process the decodedSlug
  const generateSlug = (title) => {
    return title
      .toLowerCase()
      .replace(/:/g, "")
      .replace(/\s+/g, "-")
      .replace(/-+/g, "-")
      .trim();
  };

  const newsArticle = dummyNewsFeedPosts.find(
    (newsArticle) => generateSlug(newsArticle.title) === decodedSlug
  );

  if (!newsArticle) {
    return <div>News article not found</div>;
  }

  return <div>{newsArticle.title}</div>;
};

export default page;
