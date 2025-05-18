"use client";
import React, { useMemo, useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import styles from "./NewsFeedPreview.module.css";
import { Col } from "react-bootstrap";
import { MdOutlineChevronRight } from "react-icons/md";
import NewsFeedCard from "../NewsFeedCard/NewsFeedCard";
import Link from "next/link";
import { useNews } from "@/app/context/NewsContext";
import { timeAgo } from "@/app/lib/timeAgo";

const NewsFeedPreview = () => {
  const pathname = usePathname();
  const { articles, loading } = useNews();
  console.log(articles, "articles from newfeed preview");
  const isNewsPage = pathname.startsWith("/news");
  const randomPost = useMemo(() => {
    const randomIndex = Math.floor(Math.random() * articles.length);
    return articles[randomIndex];
  }, []);

  console.log(randomPost, "random post");

  useEffect(() => {
    if (!loading) {
      console.log("Fetched Articles:", articles);
    }
  }, [loading, articles]);

  if (isNewsPage) {
    return null;
  }

  return (
    <Col lg={4} xl={3} className={styles.rightColumn}>
      <div className="py-2 px-3">
        <div className="d-flex justify-content-between align-items-center mt-4">
          <h5 className="fw-bold mb-0">Tech news</h5>
          <Link href="/news" className="text-dark text-decoration-none">
            <span className="fw-semibold">
              View all
              <MdOutlineChevronRight className="ms-2" />
            </span>
          </Link>
        </div>

        <Link href={randomPost.url}>
          <div
            className={`${styles.previewContainerWithImage} w-100 mt-4 position-relative d-flex`}
          >
            <div className={styles.optionalDarkOverlay}></div>
            <div className={styles.imgContainer}>
              <img
                className={`${styles.heroImage}`}
                src={randomPost.image}
                alt="Dynamic Image"
              />
            </div>
            <div className={`${styles.textOverlay}`}>
              <div className="fw-bold d-flex gap-2 align-items-center">
                <h6 className="mb-0 xtraBold">{randomPost.source.name}</h6>{" "}
                <span className="">•</span>{" "}
                <small className="fw-light">
                  {timeAgo(randomPost.publishedAt)}
                </small>
              </div>
              <p className="mt-3 mb-0 fs-6">{randomPost.title}</p>
            </div>
          </div>
        </Link>
        <div className="mt-3">
          {articles.length > 0 ? (
            articles
              .filter((post) => post.title !== randomPost?.title) 
              .map((newsFeedPost, index) => (
                <NewsFeedCard
                  shadow={false}
                  newsFeedPost={newsFeedPost}
                  key={index}
                />
              ))
          ) : (
            <p className="text-secondary">No results found</p>
          )}
        </div>
      </div>
    </Col>
  );
};

export default NewsFeedPreview;
