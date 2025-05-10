"use client";
import React, { useMemo, useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import styles from "./NewsFeedPreview.module.css";
import { Form, Col } from "react-bootstrap";
import { CiSearch } from "react-icons/ci";
import { MdOutlineChevronRight } from "react-icons/md";
import Image from "next/legacy/image";
import { dummyNewsFeedPosts } from "@/app/data/dummyNewsFeedPosts";
import NewsFeedCard from "../NewsFeedCard/NewsFeedCard";
import Link from "next/link";
import { useNews } from "@/app/context/NewsContext";

const NewsFeedPreview = () => {
  const pathname = usePathname(); // Get the current path
  const { articles, loading } = useNews();
  const isNewsPage = pathname.startsWith("/news"); // Check if the current path is /news or a nested route
  // Select a random newsfeed post using useMemo to avoid recalculation on each render
  const randomPost = useMemo(() => {
    const randomIndex = Math.floor(Math.random() * articles.length);
    return articles[randomIndex];
  }, []);

  console.log(randomPost, "random post");

  useEffect(() => {
    if (!loading) {
      console.log("Fetched Articles:", articles); // ✅ Console log here
    }
  }, [loading, articles]);


// add export later
  function timeAgo(dateString) {
    const now = new Date();
    const published = new Date(dateString);
    const secondsAgo = Math.floor((now - published) / 1000);
  
    const intervals = [
      { label: "year", seconds: 31536000 },
      { label: "month", seconds: 2592000 },
      { label: "week", seconds: 604800 },
      { label: "day", seconds: 86400 },
      { label: "hour", seconds: 3600 },
      { label: "minute", seconds: 60 },
      { label: "second", seconds: 1 },
    ];
  
    for (const interval of intervals) {
      const count = Math.floor(secondsAgo / interval.seconds);
      if (count >= 1) {
        return `${count} ${interval.label}${count > 1 ? "s" : ""} ago`;
      }
    }
  
    return "just now";
  }

  // if (loading) return <p>Loading news...</p>;

  const [searchTerm, setSearchTerm] = useState("");

  // Filter the posts based on search term
  const filteredPosts = useMemo(() => {
    return dummyNewsFeedPosts.filter((post) =>
      post.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm]);

  if (isNewsPage) {
    return null;
  }

  //   content
  // :
  // "The official Legend of Zelda playing cards from Nintendo are currently on sale for just $9.99 (20% off). Keep in mind, they are a Japan-only imported product, so buying through Amazon typically means you're purchasing from a reseller. This could mean... [309 chars]"
  // description
  // :
  // "Back to Nintendo's roots."
  // image
  // :
  // "https://assets-prd.ignimgs.com/2025/05/09/legend-of-zelda-playing-cards-1746823499510.jpg?width=1280"
  // publishedAt
  // :
  // "2025-05-09T22:26:46Z"
  // source
  // :
  // {name: 'IGN', url: 'https://www.ign.com'}
  // title
  // :
  // "You Can Get a Pack of Official Legend of Zelda Playing Cards for Just $10"
  // url
  // :
  // "https://www.ign.com/articles/you-can-get-a-pack

  return (
    <Col lg={4} xl={3} className={styles.rightColumn}>
      <div className="py-2 px-3">
        <Form>
          <div className="position-relative">
            <Form.Control
              type="text"
              className={`${styles.searchInput}`}
              placeholder="Search here..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)} // Update state as the user types
            />
            <CiSearch className={`${styles.searchIcon} fs-5`} />
          </div>
        </Form>
        <div className="d-flex justify-content-between align-items-center mt-4">
          <h5 className="fw-bold mb-0">Recommended</h5>
          <Link href="/news" className="text-dark text-decoration-none">
            <span className="fw-semibold">
              View all
              <MdOutlineChevronRight className="ms-2" />
            </span>
          </Link>
        </div>

        <Link
          href={`/news/${randomPost.title.replace(/\s+/g, "-").toLowerCase()}`}
        >
          <div
            className={`${styles.previewContainerWithImage} w-100 mt-4 position-relative d-flex`}
          >
            <div className={styles.optionalDarkOverlay}></div>
            <div className={styles.imgContainer}>
            <img className={`${styles.heroImage}`} src={randomPost.image} alt="Dynamic Image" />
            </div>

            {/* <Image
              className={`${styles.heroImage}`}
              src={randomPost.image}
              // alt={randomPost.image.alt_tag}
              alt="alt"
              layout="fill"
              objectFit="cover"
              quality={100}
              priority={true}
            /> */}
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
          {filteredPosts.length > 0 ? (
            filteredPosts.map((newsFeedPost, index) => (
              <NewsFeedCard
                shadow={false}
                newsFeedPost={newsFeedPost}
                key={index}
              />
            ))
          ) : (
            <p className="text-secondary">No results found</p> // Display a message when no posts match the search
          )}
        </div>
      </div>
    </Col>
  );
};

export default NewsFeedPreview;
